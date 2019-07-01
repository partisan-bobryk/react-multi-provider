import React from 'react';

const FooContext = React.createContext({});
const BarContext = React.createContext({});

export const FooProvider = FooContext.Provider;
export const FooConsumer = FooContext.Consumer;

export const BarProvider = BarContext.Provider;
export const BarConsumer = BarContext.Consumer;