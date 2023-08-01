import React from "react";

export interface MultiProviderProps {
  providers: React.ReactElement<any>[];
  children: React.ReactNode;
}

export const MultiProvider = (props: MultiProviderProps): React.ReactNode => {
  /* Error/Validation */
  if (!props.providers) {
    throw new Error("MultiProvider: Missing providers prop");
  }

  if (!props.children) {
    throw new Error("MultiProvider: Missing children");
  }

  let content = props.children;

  // Turn object into an array
  const numberOfProviders = props.providers.length;

  if (!numberOfProviders) {
    // Providers prop is empty, return the content that was meant to be rendered
    return content;
  }

  props.providers.forEach((provider) => {
    // content = React.cloneElement(provider, null, content);
    content = React.createElement(provider.type, provider.props, content);
  });

  return content;
};
