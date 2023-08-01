import t from "react";
const d = (r) => {
  if (!r.providers)
    throw new Error("MultiProvider: Missing providers prop");
  if (!r.children)
    throw new Error("MultiProvider: Missing children");
  let e = r.children;
  return r.providers.length && r.providers.forEach((i) => {
    e = t.createElement(i.type, i.props, e);
  }), e;
};
export {
  d as MultiProvider
};
//# sourceMappingURL=react-multi-provider.js.map
