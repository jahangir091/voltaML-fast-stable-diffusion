import{_ as e,a as t}from"./chunks/load-model-modal.fc8bf3b2.js";import{_ as o,o as a,c as l,V as d}from"./chunks/framework.934df2e6.js";const s="/voltaML-fast-stable-diffusion/assets/hf_download.a2c7eb28.webp",k=JSON.parse('{"title":"Models","description":"","frontmatter":{},"headers":[],"relativePath":"basics/models.md","filePath":"basics/models.md","lastUpdated":1688331116000}'),i={name:"basics/models.md"},r=d('<h1 id="models" tabindex="-1">Models <a class="header-anchor" href="#models" aria-label="Permalink to &quot;Models&quot;">​</a></h1><p>Models are what is responsible for the main aesthetics of the output image. They come in two main formats</p><ul><li>Checkpoint files (<code>.ckpt</code> or <code>.safetensors</code>)</li><li>Diffusers</li></ul><p>Both of these formats are supported by the UI, but <strong>Diffusers is the preffered way</strong>.</p><p>Checkpoints are the raw files that you can download from sites like <a href="https://civit.ai/" target="_blank" rel="noreferrer">CivitAI</a>.</p><p>Diffusers is unwrapped format that stores all the parts of the model separately. This allows for a more modular approach to loading the models, where you can just load the parts you need. You can browse these models on <a href="https://huggingface.co/" target="_blank" rel="noreferrer">HuggingFace</a>.</p><table><thead><tr><th>Feature</th><th>Checkpoints</th><th>Diffusers</th></tr></thead><tbody><tr><td>Load speed</td><td>Slow</td><td>Fast</td></tr><tr><td>Ease of transport</td><td>Easy</td><td>Hard</td></tr><tr><td>AITemplate</td><td>No</td><td>Yes</td></tr><tr><td>Supported</td><td>Yes</td><td>Yes</td></tr><tr><td>Recommended</td><td>No</td><td>Yes</td></tr></tbody></table><h2 id="where-to-put-the-files" tabindex="-1">Where to put the files <a class="header-anchor" href="#where-to-put-the-files" aria-label="Permalink to &quot;Where to put the files&quot;">​</a></h2><p>Volta will look for files ending with <code>.ckpt</code> or <code>.safetensors</code> in the <code>data/models</code> folder.</p><p>If you have model in the <strong>Diffusers format</strong>, you can just drop the folder into the <code>data/models</code> folder.</p><div class="warning custom-block"><p class="custom-block-title">WARNING</p><p>Diffusers model might not show up in the UI if Volta considers it to be invalid. You can see more info if you run Volta from the terminal with the <code>LOG_LEVEL=DEBUG</code> mode, which can be set in the <code>.env</code> file.</p></div><h2 id="diffusers-model-download" tabindex="-1">Diffusers model download <a class="header-anchor" href="#diffusers-model-download" aria-label="Permalink to &quot;Diffusers model download&quot;">​</a></h2><ul><li>Easy Download and Install within the UI</li></ul><div class="warning custom-block"><p class="custom-block-title">WARNING</p><p>Moving files into the <code>data/models</code> will require a reconnect of the UI to the server. This can be done by clicking the <code>Reconnect</code> button in the top right corner of the UI.</p></div><p><img src="'+s+'" alt="HF Download Page"></p><ol><li>Custom Model Download - Paste the ID of the model you want to download there and click Install</li><li>Currated Model Download - Click on the Download button and wait for the download to finish</li></ol><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>Download progress can be seen in the terminal window where you started Volta.</p></div><h2 id="checkpoints-download-install" tabindex="-1">Checkpoints download/install <a class="header-anchor" href="#checkpoints-download-install" aria-label="Permalink to &quot;Checkpoints download/install&quot;">​</a></h2><ul><li>Uploading models via the Model Manager</li><li>Manually dropping the files into the <code>data/models</code> folder</li></ul><div class="warning custom-block"><p class="custom-block-title">WARNING</p><p>Moving files into the <code>data/models</code> will require a reconnect of the UI to the server. This can be done by clicking the <code>Reconnect</code> button in the top right corner of the UI.</p></div><p>These models will then be available to load in the UI.</p><div class="info custom-block"><p class="custom-block-title">INFO</p><p>The first time you try to load a checkpoint model, Volta will download the necessary files to run the model. This can take a while, but only needs to be done once.</p></div><h2 id="model-manager" tabindex="-1">Model Manager <a class="header-anchor" href="#model-manager" aria-label="Permalink to &quot;Model Manager&quot;">​</a></h2><p>This tab in the UI is the place where you can manage your models. It&#39;s main purpose for now is model deletion and easy model upload.</p><ul><li>✅ Feature available and supported</li><li>❌ Feature not available yet</li><li>🚧 Feature is in the development or testing phase</li></ul><table><thead><tr><th>Feature</th><th>Supported</th></tr></thead><tbody><tr><td>Easy File uppload</td><td>✅</td></tr><tr><td>Deletion</td><td>✅</td></tr><tr><td>One Click conversion</td><td>❌</td></tr><tr><td>VAE swapping</td><td>❌</td></tr></tbody></table><h2 id="loading-models" tabindex="-1">Loading models <a class="header-anchor" href="#loading-models" aria-label="Permalink to &quot;Loading models&quot;">​</a></h2><p>All the models should become available to load in the Model Loader:</p><p>Click on the <strong>Load Model</strong> button:</p><p><img src="'+e+'" alt="Load Model Button"></p><p>Select the model you just downloaded:</p><ol><li>Click the Load Button (marked as 1)</li><li>Wait for the button to change to Unload (marked as 2)</li></ol><p><img src="'+t+'" alt="Select Model"></p><h2 id="extra" tabindex="-1">Extra <a class="header-anchor" href="#extra" aria-label="Permalink to &quot;Extra&quot;">​</a></h2><h3 id="vae-swapping" tabindex="-1">VAE swapping <a class="header-anchor" href="#vae-swapping" aria-label="Permalink to &quot;VAE swapping&quot;">​</a></h3><p>VAE swapping is not available yet. Please try to use the model with baked in VAE instead.</p>',36),n=[r];function h(c,p,u,m,f,b){return a(),l("div",null,n)}const _=o(i,[["render",h]]);export{k as __pageData,_ as default};