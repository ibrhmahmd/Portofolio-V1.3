import{n as c,s as p}from"./scheduler.7a274a43.js";const e=[];function g(n,l=c){let o;const i=new Set;function r(t){if(p(n,t)&&(n=t,o)){const b=!e.length;for(const s of i)s[1](),e.push(s,n);if(b){for(let s=0;s<e.length;s+=2)e[s][0](e[s+1]);e.length=0}}}function f(t){r(t(n))}function _(t,b=c){const s=[t,b];return i.add(s),i.size===1&&(o=l(r,f)||c),t(n),()=>{i.delete(s),i.size===0&&o&&(o(),o=null)}}return{set:r,update:f,subscribe:_}}var a;const d=((a=globalThis.__sveltekit_vwx788)==null?void 0:a.base)??"/final-porto-and-delete";var u;const w=((u=globalThis.__sveltekit_vwx788)==null?void 0:u.assets)??d;export{w as a,d as b,g as w};
