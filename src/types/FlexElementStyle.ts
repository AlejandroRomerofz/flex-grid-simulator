import type { AlignSelf } from "./FlexElementProps";

export type FlexElementStyle = {
  order: number;
  flexGrow: number;
  flexShrink: number;
  alignSelf: AlignSelf;
  flexBasis: string;
  width: string;
  height: string;
};
