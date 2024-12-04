export type FlexDirection = "row" | "row-reverse" | "column" | "column-reverse";
export type FlexWrap = "wrap" | "nowrap" | "wrap-reverse";
export type JustifyContent =
  | "start"
  | "center"
  | "space-between"
  | "space-around"
  | "space-evenly"
  | "end";

export type AlignItems = "start" | "center" | "stretch" | "baseline" | "end";
export type AlignContent =
  | "start"
  | "center"
  | "space-between"
  | "stretch"
  | "space-around"
  | "end";

export type FlexStyle = {
  gap: string;
  flexDirection: FlexDirection;
  flexWrap: FlexWrap;
  justifyContent: JustifyContent;
  alignItems: AlignItems;
  alignContent: AlignContent;
};
