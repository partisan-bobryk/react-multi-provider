(function(e,r){typeof exports=="object"&&typeof module<"u"?r(exports,require("react")):typeof define=="function"&&define.amd?define(["exports","react"],r):(e=typeof globalThis<"u"?globalThis:e||self,r(e["react-multi-provider"]={},e.React))})(this,function(e,r){"use strict";const o=i=>{if(!i.providers)throw new Error("MultiProvider: Missing providers prop");if(!i.children)throw new Error("MultiProvider: Missing children");let t=i.children;return i.providers.length&&i.providers.forEach(n=>{t=r.createElement(n.type,n.props,t)}),t};e.MultiProvider=o,Object.defineProperty(e,Symbol.toStringTag,{value:"Module"})});
//# sourceMappingURL=react-multi-provider.umd.cjs.map
