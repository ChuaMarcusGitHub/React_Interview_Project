declare module "*.scss";

declare module "*.css" {
  import { CSSResult } from "lit-element";
  const css: CSSResult;
  export default css;
}