import React from "react";
import { render } from "react-dom";
import { MultiProvider } from "../dist/react-multi-provider";
// Example Context
import {
  FooConsumer,
  FooProvider,
  BarConsumer,
  BarProvider,
} from "./context/Custom.context";

const App = () => {
  const providerList = [
    <FooProvider value="Context Coming from Foo" />,
    <BarProvider value="Context Comming from Bar" />,
  ];

  return (
    <MultiProvider providers={providerList}>
      <Parent />
    </MultiProvider>
  );
};

const Parent = (props) => {
  return <Child />;
};

const Child = () => {
  return (
    <>
      <h3>Consumer</h3>
      <FooConsumer>{(fooContext) => <p>{fooContext}</p>}</FooConsumer>
      <BarConsumer>{(barContext) => <p>{barContext}</p>}</BarConsumer>
    </>
  );
};

render(<App />, document.getElementById("root"));
