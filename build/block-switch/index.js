(()=>{"use strict";var e,t={797:()=>{const e=window.wp.blocks,t=JSON.parse('{"UU":"create-block/block-switch"}'),s=window.wp.blockEditor,n=window.wp.components,o=window.wp.i18n,i=window.ReactJSXRuntime;(0,e.registerBlockType)(t.UU,{edit:function({attributes:e,setAttributes:t}){const{tablePressId:r,withHead:l,headText:a=""}=e;return(0,i.jsxs)("div",{...(0,s.useBlockProps)({className:"block_switch_content"}),children:[(0,i.jsx)(s.InspectorControls,{children:(0,i.jsxs)(n.PanelBody,{title:(0,o.__)("Основные настройки"),children:[(0,i.jsx)(n.TextControl,{label:(0,o.__)("ID TablePress"),value:r,onChange:e=>t({tablePressId:e}),placeholder:(0,o.__)("Введите id таблицы TablePress")}),(0,i.jsx)(n.CheckboxControl,{label:(0,o.__)("С заголовком"),checked:l,onChange:()=>t({withHead:!l})})]})}),(0,i.jsx)(s.RichText,{...(0,s.useBlockProps)({className:"block_switch_content_head "+(l?"":"d-none"),style:{color:"white"}}),tagName:"h2",value:a,onChange:e=>t({headText:e})}),(0,i.jsx)("div",{children:"Таблица будет показана на фронтенде"})]})},save:function({attributes:e}){const t=`[table id=${e.tablePressId.toString()}]`;return(0,i.jsxs)("div",{className:"block_switch_content_container",children:[e.withHead&&(0,i.jsxs)("div",{id:"switch_arr",className:"block_switch_content_head_container",children:[(0,i.jsx)("h2",{dangerouslySetInnerHTML:{__html:e.headText},className:"block_switch_content_head"}),(0,i.jsx)("span",{children:(0,i.jsx)("svg",{width:"14",height:"16",viewBox:"0 0 14 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:(0,i.jsx)("path",{d:"M13.1022 6.68484C14.1404 7.25427 14.1404 8.74573 13.1022 9.31517L2.72135 15.0089C1.72171 15.5572 0.500002 14.8338 0.500002 13.6937L0.500002 2.30629C0.500002 1.16616 1.72171 0.442842 2.72135 0.991129L13.1022 6.68484Z",fill:"white"})})})]}),(0,i.jsx)("div",{className:"switch_hand",id:e.withHead?"switch_hand":"",children:(0,i.jsx)("div",{className:"block_switch_content",style:{position:"relative"},children:(0,i.jsx)("div",{dangerouslySetInnerHTML:{__html:t}})})})]})}})}},s={};function n(e){var o=s[e];if(void 0!==o)return o.exports;var i=s[e]={exports:{}};return t[e](i,i.exports,n),i.exports}n.m=t,e=[],n.O=(t,s,o,i)=>{if(!s){var r=1/0;for(h=0;h<e.length;h++){for(var[s,o,i]=e[h],l=!0,a=0;a<s.length;a++)(!1&i||r>=i)&&Object.keys(n.O).every((e=>n.O[e](s[a])))?s.splice(a--,1):(l=!1,i<r&&(r=i));if(l){e.splice(h--,1);var c=o();void 0!==c&&(t=c)}}return t}i=i||0;for(var h=e.length;h>0&&e[h-1][2]>i;h--)e[h]=e[h-1];e[h]=[s,o,i]},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e={258:0,742:0};n.O.j=t=>0===e[t];var t=(t,s)=>{var o,i,[r,l,a]=s,c=0;if(r.some((t=>0!==e[t]))){for(o in l)n.o(l,o)&&(n.m[o]=l[o]);if(a)var h=a(n)}for(t&&t(s);c<r.length;c++)i=r[c],n.o(e,i)&&e[i]&&e[i][0](),e[i]=0;return n.O(h)},s=globalThis.webpackChunkvsau_blocks=globalThis.webpackChunkvsau_blocks||[];s.forEach(t.bind(null,0)),s.push=t.bind(null,s.push.bind(s))})();var o=n.O(void 0,[742],(()=>n(797)));o=n.O(o)})();