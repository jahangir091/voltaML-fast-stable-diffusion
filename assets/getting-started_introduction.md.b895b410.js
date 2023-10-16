import{_ as t,o as e,c as a,Q as o}from"./chunks/framework.c44c5b88.js";const r="/voltaML-fast-stable-diffusion/assets/frontend-txt2img.903528c3.webp",d="/voltaML-fast-stable-diffusion/assets/frontend-img2img.1b4ac0c8.webp",s="/voltaML-fast-stable-diffusion/assets/frontend-browser.5f949dac.webp",_=JSON.parse('{"title":"Welcome to VoltaML","description":"","frontmatter":{},"headers":[],"relativePath":"getting-started/introduction.md","filePath":"getting-started/introduction.md","lastUpdated":1697439141000}'),i={name:"getting-started/introduction.md"},n=o('<h1 id="welcome-to-voltaml" tabindex="-1">Welcome to VoltaML <a class="header-anchor" href="#welcome-to-voltaml" aria-label="Permalink to &quot;Welcome to VoltaML&quot;">​</a></h1><h2 align="center" style="border-bottom:1px solid var(--vp-c-divider);padding-bottom:24px;"> Made with ❤️ by <a href="https://github.com/Stax124" target="_blank">Stax124</a> and <a href="https://github.com/gabe56f" target="_blank">Gabe</a></h2><div class="danger custom-block"><p class="custom-block-title">IMPORTANT</p><p>For all Pull Requests, please make sure to target the <code>experimental</code> branch. The <code>main</code> branch is only used for releases (or in some situations, PRs with high priority - marked as <code>Fast-Forward</code>)</p></div><div class="info custom-block"><p class="custom-block-title">INFO</p><p>Feel free to join our <a href="https://discord.gg/pY5SVyHmWm" target="_blank" rel="noreferrer">Discord server</a></p></div><p>Stable Diffusion WebUI accelerated by <a href="https://github.com/facebookincubator/AITemplate">AITemplate</a></p><p><strong>This documentation should walk you through the installation process, your first generated image, setting up the project to your liking and accelerating models with AITemplate.</strong></p><p>There is also a dedicated section to the <strong>Discord bot, API</strong> and a section for <strong>developers and collaborators.</strong></p><h2 id="main-features" tabindex="-1">Main features <a class="header-anchor" href="#main-features" aria-label="Permalink to &quot;Main features&quot;">​</a></h2><ul><li>Easy install with Docker</li><li>Clean and simple Web UI</li><li>Supports PyTorch as well as AITemplate for inference</li><li>Support for Windows and Linux</li><li>xFormers supported out of the box</li><li>GPU cluster load balancing</li><li>Discord bot</li><li>Documented API</li><li>Clean source code that should be easy to understand</li></ul><h2 id="speed-comparison" tabindex="-1">Speed comparison <a class="header-anchor" href="#speed-comparison" aria-label="Permalink to &quot;Speed comparison&quot;">​</a></h2><p>The below benchmarks have been done for generating a 512x512 image, batch size of one, measured in it/s.</p><table><thead><tr><th>GPU</th><th>PyTorch</th><th>SPDA</th><th>AITemplate</th></tr></thead><tbody><tr><td>RTX 4090</td><td>19</td><td>39</td><td>60</td></tr><tr><td>RTX 4080</td><td>15.53</td><td>20.21</td><td>40.51</td></tr><tr><td>RTX 3070 Laptop</td><td>No data</td><td>9.8</td><td>16.8</td></tr><tr><td>RTX 3050</td><td>4.6</td><td>5.7</td><td>10.15</td></tr><tr><td>RTX 3060 Ti</td><td>No data</td><td>10.50</td><td>19.46</td></tr><tr><td>A100</td><td>15.1</td><td>27.5</td><td>No data</td></tr><tr><td>A10</td><td>8.8</td><td>15.6</td><td>23.5</td></tr><tr><td>T4</td><td>4.3</td><td>5.5</td><td>No data</td></tr></tbody></table><h2 id="ui-preview" tabindex="-1">UI Preview <a class="header-anchor" href="#ui-preview" aria-label="Permalink to &quot;UI Preview&quot;">​</a></h2><p><strong>Text to image</strong><img src="'+r+'" alt="Text2Image"></p><hr><p><strong>Image to image</strong><img src="'+d+'" alt="Image2Image"></p><hr><p><strong>Image Browser</strong><img src="'+s+'" alt="ImageBrowser"></p>',18),l=[n];function c(p,h,m,u,g,b){return e(),a("div",null,l)}const T=t(i,[["render",c]]);export{_ as __pageData,T as default};
