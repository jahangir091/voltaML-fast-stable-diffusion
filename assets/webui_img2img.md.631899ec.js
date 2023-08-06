import{_ as e,o as t,c as a,V as o}from"./chunks/framework.934df2e6.js";const g=JSON.parse('{"title":"Image to Image","description":"","frontmatter":{},"headers":[],"relativePath":"webui/img2img.md","filePath":"webui/img2img.md","lastUpdated":1691330398000}'),i={name:"webui/img2img.md"},s=o('<h1 id="image-to-image" tabindex="-1">Image to Image <a class="header-anchor" href="#image-to-image" aria-label="Permalink to &quot;Image to Image&quot;">​</a></h1><p>This page is focused on transforming input image with the power of Stable Diffusion Models. There are multiple ways to do this and we will cover all of the available options here.</p><div class="warning custom-block"><p class="custom-block-title">WARNING</p><p>All of these models require extra model to be loaded and sometimes even one more for the detection algorithm. TLDR: It sucks a lot of VRAM.</p></div><h2 id="image-to-image-1" tabindex="-1">Image to Image <a class="header-anchor" href="#image-to-image-1" aria-label="Permalink to &quot;Image to Image&quot;">​</a></h2><p>This is the simplest way to transform an image. Stable Diffusion will take this image as an initial guide.</p><h4 id="denoising-strength" tabindex="-1">Denoising strength <a class="header-anchor" href="#denoising-strength" aria-label="Permalink to &quot;Denoising strength&quot;">​</a></h4><p>The higher the value, the more of the image will be forgotten and transformed by the model.</p><div class="info custom-block"><p class="custom-block-title">TODO</p><p>Plot of images showing the effect of this parameter</p></div><h2 id="controlnet" tabindex="-1">ControlNet <a class="header-anchor" href="#controlnet" aria-label="Permalink to &quot;ControlNet&quot;">​</a></h2><p>ControlNet is a neural network structure to control diffusion models by adding extra conditions. More information can be found in the <a href="https://arxiv.org/abs/2302.05543" target="_blank" rel="noreferrer">paper</a> or on <a href="https://github.com/lllyasviel/ControlNet" target="_blank" rel="noreferrer">GitHub</a>.</p><p>For now, we only support 4 modes:</p><h3 id="canny" tabindex="-1">Canny <a class="header-anchor" href="#canny" aria-label="Permalink to &quot;Canny&quot;">​</a></h3><div class="info custom-block"><p class="custom-block-title">TODO</p><p>Show an example of the Canny mode (input, output, and the Canny edges)</p></div><p>Canny is just an edge detection algorithm. It will detect edges in the image and use them as a guide for the model. This approach doesn&#39;t require any additional models like OpenPose or MLSD, so it can be considered lightweight.</p><h4 id="low-threshold-and-high-threshold" tabindex="-1">Low threshold and High threshold <a class="header-anchor" href="#low-threshold-and-high-threshold" aria-label="Permalink to &quot;Low threshold and High threshold&quot;">​</a></h4><p>These parameters are used by the Canny algorithm to detect edges. More broader values will detect more edges, but also more noise.</p><h3 id="hed" tabindex="-1">HED <a class="header-anchor" href="#hed" aria-label="Permalink to &quot;HED&quot;">​</a></h3><div class="info custom-block"><p class="custom-block-title">TODO</p><p>Show an example of the HED mode (input, output, and the HED edges)</p></div><p>More fancier edge detection algorithm. It requires extra model to be loaded, but is relatively lightweight.</p><h3 id="mlsd" tabindex="-1">MLSD <a class="header-anchor" href="#mlsd" aria-label="Permalink to &quot;MLSD&quot;">​</a></h3><div class="info custom-block"><p class="custom-block-title">TODO</p><p>Show an example of the MLSD mode (input, output, and the MLSD edges)</p></div><h3 id="openpose" tabindex="-1">OpenPose <a class="header-anchor" href="#openpose" aria-label="Permalink to &quot;OpenPose&quot;">​</a></h3><div class="info custom-block"><p class="custom-block-title">TODO</p><p>Show an example of the OpenPose mode (input, output, and the OpenPose edges)</p></div><p>OpenPose is a pose estimation algorithm. It will detect human poses in the image and use them as a guide for the model. It is heavier than the previous modes.</p>',24),n=[s];function l(r,h,d,m,c,p){return t(),a("div",null,n)}const f=e(i,[["render",l]]);export{g as __pageData,f as default};
