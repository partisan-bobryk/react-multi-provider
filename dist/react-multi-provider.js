import t from "react";
const o = (r) => {
  if (!r.providers)
    throw new Error("MultiProvider: Missing providers prop");
  if (!r.children)
    throw new Error("MultiProvider: Missing children");
  let e = r.children;
  return r.providers.length && r.providers.forEach((i) => {
    e = t.createElement(i.type, i.props, e);
  }), e;
}, d = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  MultiProvider: o
}, Symbol.toStringTag, { value: "Module" }));
export {
  d as MultiProvider
};
