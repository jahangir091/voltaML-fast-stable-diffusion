import{_ as e,o as s,c as a,V as n}from"./chunks/framework.de2c87d6.js";const m=JSON.parse('{"title":"Frontend","description":"","frontmatter":{},"headers":[],"relativePath":"developers/frontend.md","filePath":"developers/frontend.md","lastUpdated":1685468326000}'),o={name:"developers/frontend.md"},t=n('<h1 id="frontend" tabindex="-1">Frontend <a class="header-anchor" href="#frontend" aria-label="Permalink to &quot;Frontend&quot;">​</a></h1><p>This is the documentation for setting up the WebUI for local development.</p><h2 id="_1-clone-the-repository" tabindex="-1">1. Clone the repository <a class="header-anchor" href="#_1-clone-the-repository" aria-label="Permalink to &quot;1. Clone the repository&quot;">​</a></h2><div class="language-bash line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki one-dark-pro has-diff"><code><span class="line"><span style="color:#61AFEF;">git</span><span style="color:#ABB2BF;"> </span><span style="color:#98C379;">clone</span><span style="color:#ABB2BF;"> </span><span style="color:#98C379;">https://github.com/VoltaML/voltaML-fast-stable-diffusion</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">--branch</span><span style="color:#ABB2BF;"> </span><span style="color:#98C379;">experimental</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><h2 id="_2-move-into-the-frontend-directory" tabindex="-1">2. Move into the frontend directory <a class="header-anchor" href="#_2-move-into-the-frontend-directory" aria-label="Permalink to &quot;2. Move into the frontend directory&quot;">​</a></h2><div class="language-bash line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki one-dark-pro has-diff"><code><span class="line"><span style="color:#56B6C2;">cd</span><span style="color:#ABB2BF;"> </span><span style="color:#98C379;">voltaML-fast-stable-diffusion/frontend</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><h2 id="_3-install-dependencies" tabindex="-1">3. Install dependencies <a class="header-anchor" href="#_3-install-dependencies" aria-label="Permalink to &quot;3. Install dependencies&quot;">​</a></h2><div class="warning custom-block"><p class="custom-block-title">WARNING</p><p>Node.js version 18+ installed is required. (16 might work as well but it&#39;s not tested)</p></div><div class="info custom-block"><p class="custom-block-title">INFO</p><p>If you are using Linux, you might need to use <code>sudo</code> before the command.</p></div><p>Install yarn if you don&#39;t have it already.</p><div class="language-bash line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki one-dark-pro"><code><span class="line"><span style="color:#61AFEF;">npm</span><span style="color:#ABB2BF;"> </span><span style="color:#98C379;">install</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">-g</span><span style="color:#ABB2BF;"> </span><span style="color:#98C379;">yarn</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>Install dependencies</p><div class="language-bash line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki one-dark-pro"><code><span class="line"><span style="color:#61AFEF;">yarn</span><span style="color:#ABB2BF;"> </span><span style="color:#98C379;">install</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><h2 id="_4-run-the-development-server" tabindex="-1">4. Run the development server <a class="header-anchor" href="#_4-run-the-development-server" aria-label="Permalink to &quot;4. Run the development server&quot;">​</a></h2><div class="language-bash line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki one-dark-pro"><code><span class="line"><span style="color:#61AFEF;">yarn</span><span style="color:#ABB2BF;"> </span><span style="color:#98C379;">dev</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><h2 id="_5-open-the-webui" tabindex="-1">5. Open the WebUI <a class="header-anchor" href="#_5-open-the-webui" aria-label="Permalink to &quot;5. Open the WebUI&quot;">​</a></h2><p>Open <a href="http://127.0.0.1:5173/" target="_blank" rel="noreferrer">http://127.0.0.1:5173/</a> with your browser to see the result.</p>',17),l=[t];function r(p,i,d,c,h,u){return s(),a("div",null,l)}const y=e(o,[["render",r]]);export{m as __pageData,y as default};