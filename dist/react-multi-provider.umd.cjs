(function(e,r){typeof exports=="object"&&typeof module<"u"?r(exports,require("react")):typeof define=="function"&&define.amd?define(["exports","react"],r):(e=typeof globalThis<"u"?globalThis:e||self,r(e.MultiProvider={},e.React))})(this,function(e,r){"use strict";const n=Object.freeze(Object.defineProperty({__proto__:null,MultiProvider:i=>{if(!i.providers)throw new Error("MultiProvider: Missing providers prop");if(!i.children)throw new Error("MultiProvider: Missing children");let t=i.children;return i.providers.length&&i.providers.forEach(o=>{t=r.createElement(o.type,o.props,t)}),t}},Symbol.toStringTag,{value:"Module"}));e.MultiProvider=n,Object.defineProperty(e,Symbol.toStringTag,{value:"Module"})});