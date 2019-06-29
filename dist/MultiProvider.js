"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var MultiProvider = function MultiProvider(props) {
  var content = props.children || null;
  /* Error/Validation */

  if (!props.providers) {
    throw "MultiProvider: Missing providers prop";
  }

  if (!props.children) {
    throw "MultiProvider: Missing children";
  } // Turn object into an array
  // const numberOfProviders = props.providers.size;


  var numberOfProviders = props.providers.length;

  if (!numberOfProviders) {
    // Providers prop is empty, r
    return content;
  }

  props.providers.forEach(function (provider) {
    content = _react["default"].cloneElement(provider, null, content);
  });
  return content;
};

var _default = MultiProvider;
exports["default"] = _default;