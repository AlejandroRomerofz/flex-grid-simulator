import type { PropertyDimensionsType } from "./PropertyDimensionsType";

export type AlignSelf =
  | "flex-start"
  | "center"
  | "stretch"
  | "baseline"
  | "flex-end"
  | "auto";

export type FlexElementProps = {
  name?: string;
  selected: boolean;
  order: number;
  flexGrow: number;
  flexShrink: number;
  alignSelf: AlignSelf;
  flexBasisType: PropertyDimensionsType;
  flexBasis: number;
  widthType: PropertyDimensionsType;
  width: number;
  heightType: PropertyDimensionsType;
  height: number;
};
