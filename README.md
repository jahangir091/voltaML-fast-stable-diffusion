<div align="center">

  <img src="static/volta-rounded.svg" alt="logo" width="200" height="auto" />
  <h1>VoltaML - Fast Stable Diffusion</h1>
  
  <p><b>
    Stable Diffusion WebUI and API accelerated by <a href="https://github.com/facebookincubator/AITemplate">AITemplate</a> 
  </b></p>
  
  
  <p>
    <a href="https://github.com/VoltaML/voltaML-fast-stable-diffusion/actions/workflows/docker_build_main.yml">
      <img src="https://github.com/VoltaML/voltaML-fast-stable-diffusion/actions/workflows/docker_build_main.yml/badge.svg" alt="docker build" />
    </a>
    <a href="https://github.com/VoltaML/voltaML-fast-stable-diffusion/actions/workflows/docs.yml">
      <img src="https://github.com/VoltaML/voltaML-fast-stable-diffusion/actions/workflows/docs.yml/badge.svg" alt="docs" />
    </a>
    <a href="https://github.com/VoltaML/voltaML-fast-stable-diffusion/graphs/contributors">
      <img src="https://img.shields.io/github/contributors/VoltaML/voltaML-fast-stable-diffusion" alt="contributors" />
    </a>
    <a href="">
      <img src="https://img.shields.io/github/last-commit/VoltaML/voltaML-fast-stable-diffusion" alt="last update" />
    </a>
    <a href="https://github.com/VoltaML/voltaML-fast-stable-diffusion/network/members">
      <img src="https://img.shields.io/github/forks/VoltaML/voltaML-fast-stable-diffusion" alt="forks" />
    </a>
    <a href="https://github.com/VoltaML/voltaML-fast-stable-diffusion/stargazers">
      <img src="https://img.shields.io/github/stars/VoltaML/voltaML-fast-stable-diffusion" alt="stars" />
    </a>
    <a href="https://github.com/VoltaML/voltaML-fast-stable-diffusion/issues/">
      <img src="https://img.shields.io/github/issues/VoltaML/voltaML-fast-stable-diffusion" alt="open issues" />
    </a>
    <a href="https://github.com/VoltaML/voltaML-fast-stable-diffusion/blob/master/LICENSE">
      <img src="https://img.shields.io/github/license/VoltaML/voltaML-fast-stable-diffusion.svg" alt="license" />
    </a>
    <a href="https://github.com/voltaML/voltaML-fast-stable-diffusion/tree/experimental">
      <img src="https://img.shields.io/github/commit-activity/m/VoltaML/voltaML-fast-stable-diffusion/experimental?label=commit%20activity%20-%20experimental" alt="commit activity on experimental" />
    </a>
    <a href="https://github.com/voltaML/voltaML-fast-stable-diffusion/tree/experimental">
      <img src="https://img.shields.io/github/last-commit/VoltaMl/voltaML-fast-stable-diffusion/experimental?label=last%20commit%20-%20experimental" alt="latest activity on experimental" />
    </a>
  </p>
  <a href="https://discord.gg/pY5SVyHmWm"> <img src="https://dcbadge.vercel.app/api/server/pY5SVyHmWm" /> </a> 
    
  <h4>
      <a href="https://voltaml.github.io/voltaML-fast-stable-diffusion/">Documentation</a>
    <span> · </span>
      <a href="https://github.com/VoltaML/voltaML-fast-stable-diffusion/issues/new/choose">Report Bug</a>
    <span> · </span>
      <a href="https://github.com/VoltaML/voltaML-fast-stable-diffusion/issues/new/choose">Request Feature</a>
  </h4>

</div>

<hr>
<h3 align="center">Made with ❤️ by <a href="https://github.com/Stax124/">Stax124</a>, <a href="https://github.com/gabe56f">Gabe</a>, and the community</h3>
<hr>

<br />

<h1> Table of Contents</h1>

- [About the Project](#about-the-project)
  - [Screenshots](#screenshots)
  - [Tech Stack](#tech-stack)
  - [Main features](#main-features)
  - [Speed comparison](#speed-comparison)
  - [Installation](#installation)
- [Contributing](#contributing)
- [License](#license)
- [Contact](#contact)

# About the Project

## Screenshots

<div align="center"> 
  <img src="docs/static/frontend/frontend-txt2img.webp" alt="screenshot" />
  <img src="docs/static/frontend/frontend-img2img.webp" alt="screenshot" />
  <img src="docs/static/frontend/frontend-browser.webp" alt="screenshot" />
</div>

## Tech Stack

<details>
  <summary>Client</summary>
  <ul>
    <li><a href="https://www.typescriptlang.org/">Typescript</a></li>
    <li><a href="https://vuejs.org/">Vue.js</a></li>
    <li><a href="https://www.naiveui.com/en-US/dark">NaiveUI</a></li>
    <li><a href="https://ionic.io/ionicons">Ionicons</a></li>
  </ul>
</details>

<details>
  <summary>API</summary>
  <ul>
    <li><a href="https://www.python.org/">Python</a></li>
    <li><a href="https://fastapi.tiangolo.com/">FastAPI</a></li>
    <li><a href="https://pytorch.org/">PyTorch</a></li>
    <li><a href="https://github.com/facebookincubator/AITemplate">AITemplate</a></li>
  </ul>
</details>

<details>
<summary>Discord Bot</summary>
  <ul>
    <li><a href="https://github.com/Rapptz/discord.py">Discord.py</a></li>
  </ul>
</details>

<details>
<summary>DevOps</summary>
  <ul>
    <li><a href="https://www.docker.com/">Docker</a></li>
    <li><a href="https://github.com/features/actions">GitHub Actions</a></li>
    <li><a href="https://pages.github.com/">GitHub Pages</a></li>
    <li><a href="https://vitepress.vuejs.org/">VitePress</a></li>
  </ul>
</details>

## Main features

- Easy install with Docker
- Clean and simple Web UI
- Supports PyTorch as well as AITemplat for inference
- Support for Windows and Linux
- Documented API

## Speed comparison

Please refer to this [table](https://voltaml.github.io/voltaML-fast-stable-diffusion/getting-started/introduction#speed-comparison). Data had a small sample size and was usually collected on a single machine. Your results may vary.

## Installation

Please see the [documentation](https://voltaml.github.io/voltaML-fast-stable-diffusion/) for installation instructions.

# Contributing

<a href="https://github.com/VoltaML/voltaML-fast-stable-diffusion/graphs/contributors">
  <img src="https://contrib.rocks/image?repo=VoltaML/voltaML-fast-stable-diffusion" />
</a>

Contributions are always welcome!

# License

Distributed under the <b>GPL v3</b>. See [License](https://github.com/VoltaML/voltaML-fast-stable-diffusion/blob/experimental/License) for more information.

# Contact

Feel free to contact us on Discord: https://discord.gg/pY5SVyHmWm

Project Link: [https://github.com/VoltaML/voltaML-fast-stable-diffusion](https://github.com/VoltaML/voltaML-fast-stable-diffusion)
