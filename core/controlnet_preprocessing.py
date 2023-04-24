import logging

import numpy as np
import torch
from PIL import Image
from transformers import AutoImageProcessor, UperNetForSemanticSegmentation

from core.controlnet_utils import ade_palette
from core.types import ControlNetData, ControlNetMode

logger = logging.getLogger(__name__)

try:
    from controlnet_aux import (
        CannyDetector,
        HEDdetector,
        MidasDetector,
        MLSDdetector,
        OpenposeDetector,
    )
except ImportError:
    logger.warning(
        "You have old version of controlnet-aux, please run `pip uninstall controlnet-aux && pip install controlnet-aux` to update it to the lates version."
    )


def image_to_controlnet_input(
    input_image: Image.Image,
    data: ControlNetData,
) -> Image.Image:
    "Converts an image to the format expected by the controlnet model"

    model = data.controlnet

    if model == ControlNetMode.NONE:
        return input_image
    elif model == ControlNetMode.CANNY:
        return canny(
            input_image,
            low_threshold=data.canny_low_threshold,
            high_threshold=data.canny_low_threshold * 3,
        )
    elif model == ControlNetMode.DEPTH:
        return depth(input_image)
    elif model == ControlNetMode.HED:
        return hed(
            input_image,
            detect_resolution=data.detection_resolution,
            image_resolution=min(input_image.size),
        )
    elif model == ControlNetMode.MLSD:
        return mlsd(
            input_image,
            resolution=data.detection_resolution,
            score_thr=data.mlsd_thr_v,
            dist_thr=data.mlsd_thr_d,
        )
    elif model == ControlNetMode.NORMAL:
        return normal(input_image)
    elif model == ControlNetMode.OPENPOSE:
        return openpose(input_image)
    elif model == ControlNetMode.SCRIBBLE:
        return scribble(input_image)
    elif model == ControlNetMode.SEGMENTATION:
        return segmentation(input_image)

    raise NotImplementedError


def canny(
    input_image: Image.Image, low_threshold: int = 100, high_threshold: int = 200
) -> Image.Image:
    "Applies canny edge detection to an image"

    detector = CannyDetector()
    canny_image = detector(
        img=input_image, low_threshold=low_threshold, high_threshold=high_threshold
    )

    image = np.array(canny_image)
    image = image[:, :, None]
    image = np.concatenate([image, image, image], axis=2)
    image = Image.fromarray(image)

    return image


def depth(input_image: Image.Image) -> Image.Image:
    "Applies depth estimation to an image"

    midas_detector = MidasDetector.from_pretrained("lllyasviel/ControlNet")
    image = midas_detector(input_image)

    if isinstance(image, tuple):
        return image[0]
    else:
        return image


def hed(
    input_image: Image.Image, detect_resolution=512, image_resolution=512
) -> Image.Image:
    "Applies hed edge detection to an image"

    hed_detector = HEDdetector.from_pretrained("lllyasviel/ControlNet")
    image = hed_detector(
        input_image,
        detect_resolution=detect_resolution,
        image_resolution=image_resolution,
    )

    assert isinstance(image, Image.Image)
    return image


def mlsd(
    input_image: Image.Image,
    resolution: int = 512,
    score_thr: float = 0.1,
    dist_thr: float = 20,
) -> Image.Image:
    "Applies M-LSD edge detection to an image"

    mlsd_detector = MLSDdetector.from_pretrained("lllyasviel/ControlNet")
    image = mlsd_detector(
        input_image,
        thr_v=score_thr,
        thr_d=dist_thr,
        detect_resolution=resolution,
        image_resolution=resolution,
    )

    assert isinstance(image, Image.Image)
    return image


def normal(input_image: Image.Image) -> Image.Image:
    "Applies normal estimation to an image"

    midas_detector = MidasDetector.from_pretrained("lllyasviel/ControlNet")
    image = midas_detector(input_image, depth_and_normal=True)  # type: ignore

    return image[1]


def openpose(input_image: Image.Image) -> Image.Image:
    "Applies openpose to an image"

    op_detector = OpenposeDetector.from_pretrained("lllyasviel/ControlNet")
    image = op_detector(input_image)

    assert isinstance(image, Image.Image)
    return image


def scribble(input_image: Image.Image) -> Image.Image:
    "Applies scribble to an image"

    raise NotImplementedError


def segmentation(input_image: Image.Image) -> Image.Image:
    "Applies segmentation to an image"

    image_processor = AutoImageProcessor.from_pretrained(
        "openmmlab/upernet-convnext-small"
    )
    image_segmentor = UperNetForSemanticSegmentation.from_pretrained(
        "openmmlab/upernet-convnext-small"
    )

    pixel_values = image_processor(input_image, return_tensors="pt").pixel_values

    assert isinstance(image_segmentor, UperNetForSemanticSegmentation)
    with torch.no_grad():
        outputs = image_segmentor(pixel_values)

    seg = image_processor.post_process_semantic_segmentation(
        outputs, target_sizes=[input_image.size[::-1]]
    )[0]

    color_seg = np.zeros(
        (seg.shape[0], seg.shape[1], 3), dtype=np.uint8
    )  # height, width, 3

    palette = np.array(ade_palette())

    for label, color in enumerate(palette):
        color_seg[seg == label, :] = color

    color_seg = color_seg.astype(np.uint8)

    image = Image.fromarray(color_seg)
    return image