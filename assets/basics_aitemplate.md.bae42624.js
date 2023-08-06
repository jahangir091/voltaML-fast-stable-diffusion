import{_ as e,o as t,c as a,V as o}from"./chunks/framework.934df2e6.js";const i="/voltaML-fast-stable-diffusion/assets/aitemplate-accelerate.d51f6a9f.webp",l="/voltaML-fast-stable-diffusion/assets/aitemplate-load.91a322db.webp",A=JSON.parse('{"title":"AITemplate Acceleration","description":"","frontmatter":{},"headers":[],"relativePath":"basics/aitemplate.md","filePath":"basics/aitemplate.md","lastUpdated":1691330398000}'),s={name:"basics/aitemplate.md"},n=o('<h1 id="aitemplate-acceleration" tabindex="-1">AITemplate Acceleration <a class="header-anchor" href="#aitemplate-acceleration" aria-label="Permalink to &quot;AITemplate Acceleration&quot;">​</a></h1><h2 id="benefits" tabindex="-1">Benefits <a class="header-anchor" href="#benefits" aria-label="Permalink to &quot;Benefits&quot;">​</a></h2><ul><li>About 1.7x faster generation</li></ul><h2 id="downsides" tabindex="-1">Downsides <a class="header-anchor" href="#downsides" aria-label="Permalink to &quot;Downsides&quot;">​</a></h2><ul><li>No LoRA support</li><li>No Textual Inversion support</li><li>Locked down resolution (if you use static AITemplate)</li></ul><h2 id="acceleration" tabindex="-1">Acceleration <a class="header-anchor" href="#acceleration" aria-label="Permalink to &quot;Acceleration&quot;">​</a></h2><p>Make sure that you are one the correct page as can be seen in the image below.</p><p><img src="'+i+'" alt="AITemplate Acceleration"></p><ol><li>Width and Height - these cannot be changed after the model is compiled</li><li>Batch Size - this cannot be changed after the model is compiled as well - but Batch Count can - for this reason, I recommend setting it to 1</li><li>CPU Threads - Number of CPU threads that will be used for compilation - <strong>MORE THREADS, MORE RAM NEEDED</strong> - if you do not have enough RAM, lower this number down, <strong>6-8 Threads is recommended (about 7GB free RAM needed)</strong></li><li>Model - model that will be accelerated</li><li>Accelerate Button - click this to start the acceleration process</li></ol><div class="warning custom-block"><p class="custom-block-title">WARNING</p><p>Due to extreme load on the CPU, connection between the browser and the server will be lost. If this happens, you need to click the reconnect button - acceleration should not be affected.</p><p>WE WOULD RECOMMEND RESTARTING VOLTA AFTER ACCELERATION IS DONE, AS WEBSOCKETS MIGHT BE TOTALLY BROKEN</p></div><h2 id="how-to-use" tabindex="-1">How to use <a class="header-anchor" href="#how-to-use" aria-label="Permalink to &quot;How to use&quot;">​</a></h2><ol><li>Switch the Model tab to AITemplate</li><li>Click the <code>Load</code> button</li><li>Generate an image - only txt2img, img2img and ControlNet are supported</li></ol><p><img src="'+l+'" alt="AITemplate Acceleration"></p>',13),c=[n];function r(d,h,p,m,u,b){return t(),a("div",null,c)}const _=e(s,[["render",r]]);export{A as __pageData,_ as default};
