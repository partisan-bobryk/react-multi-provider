import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import { MultiProvider, MultiProviderProps } from "..";
import React from "react";

describe("component:MultiProvider", () => {
  const mockContext1 = React.createContext("");
  const mockContext2 = React.createContext(0);

  const ChildWithContext = (): React.ReactElement => {
    return (
      <>
        <mockContext1.Consumer>
          {(testContext) => (
            <p data-testid="rendered-context-string">{testContext}</p>
          )}
        </mockContext1.Consumer>

        <mockContext2.Consumer>
          {(testContext) => (
            <p data-testid="rendered-context-number">My age is {testContext}</p>
          )}
        </mockContext2.Consumer>
      </>
    );
  };

  it("should throw if no providers prop passed", () => {
    try {
      MultiProvider({} as MultiProviderProps);
    } catch (err) {
      expect(err).toBeDefined();
      expect((err as Error)?.message).toBe(
        "MultiProvider: Missing providers prop"
      );
    }
  });

  it("should throw if no child component is provided", () => {
    try {
      const props: Partial<MultiProviderProps> = {
        providers: [<mockContext1.Provider value="sample context" />],
      };
      MultiProvider(props as MultiProviderProps);
    } catch (err) {
      expect(err).toBeDefined();
      expect((err as Error).message).toBe("MultiProvider: Missing children");
    }
  });

  it("should render a context tree around an element", () => {
    const testContextString = "Hi i'm being passed down by context";
    const testContextNumber = 99;
    const providerList: React.ReactElement<any>[] = [
      <mockContext1.Provider value={testContextString} />,
      <mockContext2.Provider value={testContextNumber} />,
    ];

    render(
      <MultiProvider providers={providerList}>
        <ChildWithContext></ChildWithContext>
      </MultiProvider>
    );

    expect(screen.getByTestId("rendered-context-string")).toBeDefined();
    expect(screen.getByTestId("rendered-context-string")?.innerHTML).toBe(
      testContextString
    );
    expect(screen.getByTestId("rendered-context-number")).toBeDefined();
    expect(screen.getByTestId("rendered-context-number")?.innerHTML).toBe(
      `My age is ${testContextNumber}`
    );
  });
});
