"use strict";Object.defineProperty(exports,Symbol.toStringTag,{value:"Module"});const i=require("react"),o=r=>{if(!r.providers)throw new Error("MultiProvider: Missing providers prop");if(!r.children)throw new Error("MultiProvider: Missing children");let e=r.children;return r.providers.length&&r.providers.forEach(t=>{e=i.createElement(t.type,t.props,e)}),e},n=Object.freeze(Object.defineProperty({__proto__:null,MultiProvider:o},Symbol.toStringTag,{value:"Module"}));exports.MultiProvider=n;
