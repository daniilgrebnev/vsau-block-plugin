(()=>{"use strict";var e,l={456:()=>{const e=window.wp.blocks,l=window.wp.blockEditor,o=window.ReactJSXRuntime,t=JSON.parse('{"UU":"create-block/block-link"}'),n=window.wp.components,r=window.wp.i18n,i=(window.React,({fill:e,width:l})=>(0,o.jsx)("svg",{width:l,height:l,viewBox:"0 0 17 17",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:(0,o.jsx)("path",{d:"M17 17H0V15.5833H17V17ZM10.0158 13.5363L16.9717 6.375H12.0487V0H4.95833V6.375H0.0495833L6.99125 13.5363C7.395 13.9471 7.92625 14.1667 8.49292 14.1667C9.05958 14.1667 9.59792 13.9471 10.0017 13.5363H10.0158Z",fill:e})}));(0,e.registerBlockType)(t.UU,{edit:function({attributes:e,setAttributes:t}){const{text:s,url:a,blockType:c}=e;return(0,o.jsxs)("div",{...(0,l.useBlockProps)({className:`block-link_content ${c}`}),children:[(0,o.jsx)(l.InspectorControls,{children:(0,o.jsxs)(n.PanelBody,{title:(0,r.__)("Основные настройки"),children:[(0,o.jsx)(n.RadioControl,{label:(0,r.__)("Цвет"),options:[{label:(0,r.__)("Синий"),value:"blue"},{label:(0,r.__)("Белый"),value:"white"}],selected:c,onChange:e=>t({blockType:e})}),(0,o.jsx)(n.TextControl,{label:(0,r.__)("Ссылка"),value:a,onChange:e=>t({url:e})})]})}),(0,o.jsx)(i,{width:18,fill:"white"===c?"#0f91d6":"#fff"}),(0,o.jsx)(l.RichText,{value:s,multiline:!1,onChange:e=>t({text:e}),placeholder:(0,r.__)("Текст ссылки")})]})},save:function(){return(0,o.jsx)("p",{...l.useBlockProps.save(),children:"980"})}})}},o={};function t(e){var n=o[e];if(void 0!==n)return n.exports;var r=o[e]={exports:{}};return l[e](r,r.exports,t),r.exports}t.m=l,e=[],t.O=(l,o,n,r)=>{if(!o){var i=1/0;for(h=0;h<e.length;h++){for(var[o,n,r]=e[h],s=!0,a=0;a<o.length;a++)(!1&r||i>=r)&&Object.keys(t.O).every((e=>t.O[e](o[a])))?o.splice(a--,1):(s=!1,r<i&&(i=r));if(s){e.splice(h--,1);var c=n();void 0!==c&&(l=c)}}return l}r=r||0;for(var h=e.length;h>0&&e[h-1][2]>r;h--)e[h]=e[h-1];e[h]=[o,n,r]},t.o=(e,l)=>Object.prototype.hasOwnProperty.call(e,l),(()=>{var e={506:0,862:0};t.O.j=l=>0===e[l];var l=(l,o)=>{var n,r,[i,s,a]=o,c=0;if(i.some((l=>0!==e[l]))){for(n in s)t.o(s,n)&&(t.m[n]=s[n]);if(a)var h=a(t)}for(l&&l(o);c<i.length;c++)r=i[c],t.o(e,r)&&e[r]&&e[r][0](),e[r]=0;return t.O(h)},o=globalThis.webpackChunkvsau_blocks=globalThis.webpackChunkvsau_blocks||[];o.forEach(l.bind(null,0)),o.push=l.bind(null,o.push.bind(o))})();var n=t.O(void 0,[862],(()=>t(456)));n=t.O(n)})();