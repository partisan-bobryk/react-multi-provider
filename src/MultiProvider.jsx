import React from "react";

export default function MultiProvider(props) {
  let content;

  if (!props.providers.length) {
    return content;
  }

  content = React.createElement(props.providers[0]);

  if (props.providers.length === 1) {
    return content;
  }

  props.providers.forEach((provider, index) => {
    if (index === 0) {
      return;
    }

    content = React.createElement(provider, null, content);
  });

  return React.createElement(content, null, props.children);
}
