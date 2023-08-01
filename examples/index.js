import React, { useContext } from "react";
import { render } from "react-dom";
import { MultiProvider } from "react-multi-provider";
// Example Context
import { BarContext, FooContext } from "./context/Custom.context";

const App = () => {
  const providerList = [
    <FooContext.Provider value="Jeff" />,
    <BarContext.Provider value={999} />,
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
  const fooValue = useContext(FooContext);
  const barValue = useContext(BarContext);

  return (
    <>
      <p>
        Hello, I am {fooValue} and I am {barValue} old
      </p>
    </>
  );
};

render(<App />, document.getElementById("root"));
