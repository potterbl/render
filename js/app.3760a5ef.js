(function(){"use strict";var e={558:function(e,t,n){var r=n(963),a=n(252);function o(e,t,n,r,o,u){const i=(0,a.up)("request-form"),s=(0,a.up)("result-form");return(0,a.wg)(),(0,a.iD)("div",null,[0==o.currentStep?((0,a.wg)(),(0,a.j4)(i,{key:0,onHandleData:u.dataHandler},null,8,["onHandleData"])):((0,a.wg)(),(0,a.j4)(s,{key:1,dataValue:o.data,onHandleStep:u.stepHandler},null,8,["dataValue","onHandleStep"]))])}var u={name:"App",data(){return{data:"",currentStep:0}},methods:{dataHandler(e){this.data=e,console.log(this.data),this.currentStep=1},stepHandler(e){this.currentStep=e}}},i=n(744);const s=(0,i.Z)(u,[["render",o]]);var l=s;function d(e,t,n,o,u,i){return(0,a.wy)(((0,a.wg)(),(0,a.iD)("input",{type:"number",placeholder:"Enter zip here...","onUpdate:modelValue":t[0]||(t[0]=e=>u.ipnutArea=e)},null,512)),[[r.nr,u.ipnutArea]])}var p={name:"input-zip",data(){return{ipnutArea:""}}};const c=(0,i.Z)(p,[["render",d],["__scopeId","data-v-41bf84de"]]);var f=c;const h=e=>((0,a.dD)("data-v-1d26b863"),e=e(),(0,a.Cn)(),e),m={className:"request__form"},v=h((()=>(0,a._)("h1",null,"Enter ZIP-Code",-1)));function g(e,t,n,r,o,u){const i=(0,a.up)("input-zip"),s=(0,a.up)("button-render");return(0,a.wg)(),(0,a.iD)("div",m,[v,(0,a.Wm)(i,{modelValue:o.zip,"onUpdate:modelValue":t[0]||(t[0]=e=>o.zip=e)},null,8,["modelValue"]),(0,a.Wm)(s,{style:{"margin-top":"20px"},onClick:u.sendRequest},{default:(0,a.w5)((()=>[(0,a.Uk)("Render")])),_:1},8,["onClick"])])}var w=n(154),b={name:"request-form",data(){return{zip:"",data:""}},methods:{sendRequest(){w.Z.get(`https://api.zippopotam.us/us/${this.zip}`).then((e=>{this.$emit("handleData",e.data)})).catch((e=>{alert(e)}))}}};const _=(0,i.Z)(b,[["render",g],["__scopeId","data-v-1d26b863"]]);var y=_;const z={class:"btn btn-light"};function k(e,t,n,r,o,u){return(0,a.wg)(),(0,a.iD)("button",z,[(0,a.WI)(e.$slots,"default",{},void 0,!0)])}var A={name:"button-render"};const S=(0,i.Z)(A,[["render",k],["__scopeId","data-v-8b07c3e6"]]);var C=S,O=n(577);const j={class:"result__form"};function H(e,t,n,r,o,u){const i=(0,a.up)("button-render");return(0,a.wg)(),(0,a.iD)(a.HY,null,[(0,a.Wm)(i,{style:{position:"absolute",top:"10px",left:"10px",padding:"10px 20px"},onClick:u.firstStage},{default:(0,a.w5)((()=>[(0,a.Uk)(" Go to first stage ")])),_:1},8,["onClick"]),(0,a._)("div",j,[(0,a._)("p",null,"Entered ZIP-Code: "+(0,O.zw)(n.dataValue["post code"]),1),(0,a._)("p",null,"State: "+(0,O.zw)(n.dataValue.places[0].state),1),(0,a._)("p",null,"City: "+(0,O.zw)(n.dataValue.places[0]["place name"]),1),(0,a._)("p",null,"IP: "+(0,O.zw)(this.ipAddress),1),(0,a._)("p",null,"User Agent: "+(0,O.zw)(this.userAgent),1),(0,a._)("p",null,"HTTP Referer: "+(0,O.zw)(this.httpReferer),1),(0,a._)("p",null,"UTM: "+(0,O.zw)(decodeURIComponent(this.utmParams).replace(/&/g,", ")),1)])],64)}var P={name:"result-form",props:["dataValue"],data(){return{ipAddress:"",userAgent:"",httpReferer:"",utmParams:""}},methods:{firstStage(){this.$emit("handleStep",0)}},mounted(){fetch("https://api.ipify.org?format=json").then((e=>e.json())).then((e=>{this.ipAddress=e.ip})).catch((e=>console.error(e))),this.userAgent=navigator.userAgent,this.httpReferer=document.referrer;const e=new URLSearchParams(window.location.search);this.utmParams=e.toString()}};const V=(0,i.Z)(P,[["render",H],["__scopeId","data-v-e3ac9980"]]);var x=V,D=[f,y,C,x];const I=(0,r.ri)(l);D.forEach((e=>{I.component(e.name,e)})),I.mount("#app")}},t={};function n(r){var a=t[r];if(void 0!==a)return a.exports;var o=t[r]={exports:{}};return e[r](o,o.exports,n),o.exports}n.m=e,function(){var e=[];n.O=function(t,r,a,o){if(!r){var u=1/0;for(d=0;d<e.length;d++){r=e[d][0],a=e[d][1],o=e[d][2];for(var i=!0,s=0;s<r.length;s++)(!1&o||u>=o)&&Object.keys(n.O).every((function(e){return n.O[e](r[s])}))?r.splice(s--,1):(i=!1,o<u&&(u=o));if(i){e.splice(d--,1);var l=a();void 0!==l&&(t=l)}}return t}o=o||0;for(var d=e.length;d>0&&e[d-1][2]>o;d--)e[d]=e[d-1];e[d]=[r,a,o]}}(),function(){n.d=function(e,t){for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={143:0};n.O.j=function(t){return 0===e[t]};var t=function(t,r){var a,o,u=r[0],i=r[1],s=r[2],l=0;if(u.some((function(t){return 0!==e[t]}))){for(a in i)n.o(i,a)&&(n.m[a]=i[a]);if(s)var d=s(n)}for(t&&t(r);l<u.length;l++)o=u[l],n.o(e,o)&&e[o]&&e[o][0](),e[o]=0;return n.O(d)},r=self["webpackChunkrender"]=self["webpackChunkrender"]||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))}();var r=n.O(void 0,[998],(function(){return n(558)}));r=n.O(r)})();
//# sourceMappingURL=app.3760a5ef.js.map