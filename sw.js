if(!self.define){let e,s={};const i=(i,n)=>(i=new URL(i+".js",n).href,s[i]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=i,e.onload=s,document.head.appendChild(e)}else e=i,importScripts(i),s()})).then((()=>{let e=s[i];if(!e)throw new Error(`Module ${i} didn’t register its module`);return e})));self.define=(n,r)=>{const t=e||("document"in self?document.currentScript.src:"")||location.href;if(s[t])return;let o={};const l=e=>i(e,t),c={module:{uri:t},exports:o,require:l};s[t]=Promise.all(n.map((e=>c[e]||l(e)))).then((e=>(r(...e),o)))}}define(["./workbox-3625d7b0"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"assets/howler-28c3b87d.js",revision:null},{url:"assets/index-1700af69.js",revision:null},{url:"assets/index-1b7b06b9.css",revision:null},{url:"index.html",revision:"0ff089062e53ab9e6f95e40a6c1bad5d"},{url:"registerSW.js",revision:"1872c500de691dce40960bb85481de07"},{url:"icon-512.png",revision:"af930a3a9fd9a93105a1cafa1ec1c1a7"},{url:"manifest.webmanifest",revision:"a263f2c2be7c07e14633ec0e706a0f18"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html")))}));
