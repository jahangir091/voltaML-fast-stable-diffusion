import{_ as e,o as t,c as o,V as a}from"./chunks/framework.934df2e6.js";const u=JSON.parse('{"title":"Models","description":"","frontmatter":{},"headers":[],"relativePath":"webui/models.md","filePath":"webui/models.md","lastUpdated":1688331116000}'),d={name:"webui/models.md"},s=a('<h1 id="models" tabindex="-1">Models <a class="header-anchor" href="#models" aria-label="Permalink to &quot;Models&quot;">​</a></h1><p>VoltaML support all of these methods for loading models:</p><table><thead><tr><th></th><th>Diffusers</th><th>Checkpoint (.ckpt)</th><th>Safetensors (.safetensors)</th><th>AITemplate</th></tr></thead><tbody><tr><td>AITemplate compile</td><td>Yes</td><td>No</td><td>No</td><td>Unavailable</td></tr><tr><td>Float 16</td><td>Yes</td><td>Only if already pruned</td><td>Only if already pruned</td><td>Yes</td></tr><tr><td>Float 32</td><td>Yes</td><td>Yes</td><td>Yes</td><td>No</td></tr></tbody></table><p>Both <code>Checkpoint</code> and <code>Safetensors</code> are loaded with float type that they were saved with. Fix needs to be done in the <code>diffusers</code> package - follow <a href="https://github.com/huggingface/diffusers/issues/2755" target="_blank" rel="noreferrer">this</a> thread for more info.</p><h2 id="aitemplate-compilation" tabindex="-1">AITemplate compilation <a class="header-anchor" href="#aitemplate-compilation" aria-label="Permalink to &quot;AITemplate compilation&quot;">​</a></h2><p>The AITemplate compilation is a process that traces the model and creates more optimized version of it. This process can be started on the <code>Accelerate</code> page.</p><h2 id="float16-float32" tabindex="-1">Float16 / Float32 <a class="header-anchor" href="#float16-float32" aria-label="Permalink to &quot;Float16 / Float32&quot;">​</a></h2><p>This refers to the precision of the model. Float16 is a half precision model, which is faster to load and run, but less accurate. Float32 is a full precision model, which is slower to load and run, but more accurate.</p><p>It can be also seen on the filesizes of the models. Float16 models are 2x smaller than Float32 models (2GB compared to 4GB).</p><h2 id="model-conversion" tabindex="-1">Model conversion <a class="header-anchor" href="#model-conversion" aria-label="Permalink to &quot;Model conversion&quot;">​</a></h2><p>Work in progress.</p>',11),l=[s];function r(i,n,h,c,p,m){return t(),o("div",null,l)}const _=e(d,[["render",r]]);export{u as __pageData,_ as default};