# react-multi-provider

This package was created to help clean up the nasty code you get from taking advantage of React Context API.

Transform your code from something that looks like this

```tsx
  <ContextProvider1>
    <ContextProvider2>
      <ContextProvider3>
        ...
          <SomeComponent>
        ...
      </ContextProvider3>
    </ContextProvider2>
  </ContextProvider1>
```

to something like this

```tsx
  <MultiProvider
    providers={[
      <ContextProvider1/>,
      <ContextProvider2/>,
      <ContextProvider3/>,
      ...
  ]}>
    <SomeComponent/>
  </MultiProvider>
```

## Installation

To install the package, run the following command in your terminal

```shell
  npm install react-multi-provider
```

## Usage

To use this component it is really simple and easy. Start by importing it after installation.

```javascript
import { MultiProvider } from "react-multi-provider";
```

Then take the nested providers and pass them into a `providers` prop.

```tsx
<MultiProvider
  providers={[
    <FooContextProvider value="Jeff" />,
    <BarContextProvider value={400} />,
  ]}
>
  <ExampleComponent />
</MultiProvider>
```

To consume the context, leverage the `useContext` hook.

```tsx
export const ChildComponent = () => {
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
```

Check out a more detailed example in the `examples/` directory of this repo.

## Notes

For those of you who are Flutter fans will know that the inspiration for this package came from `provider`. Special thanks to the author!
