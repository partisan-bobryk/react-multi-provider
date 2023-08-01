import React from "react";
export interface MultiProviderProps {
    providers: React.ReactElement<any>[];
    children: React.ReactNode;
}
export declare const MultiProvider: (props: MultiProviderProps) => React.ReactNode;
