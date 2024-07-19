declare module '*.scss' {
    const content: {
       [className: string]: string
    };
    export = content;
 }

 declare module "*.svg?react" {
   import * as React from "react";
 
   const ReactComponent: React.FunctionComponent<
     React.ComponentProps<"svg"> & { title?: string }
   >;
 
   export default ReactComponent;
 }