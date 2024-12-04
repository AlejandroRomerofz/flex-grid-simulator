import type { SettingsInput } from "@/components/layout/SettingsManager.vue";

export const flexElementSettings: SettingsInput[] = [
  {
    name: "order",
    type: "number",
    numberValue: 0,
  },
  {
    name: "Flex Grow",
    type: "number",
    numberValue: 0,
  },
  {
    name: "Flex Shrink",
    type: "number",
    numberValue: 1,
  },
  {
    name: "Aling Self",
    type: "select",
    selectValue: "auto",
    selectValues: [
      "flex-start",
      "center",
      "stretch",
      "baseline",
      "flex-end",
      "auto",
    ],
  },
  {
    name: "Flex Basis",
    type: "mixed",
    numberValue: 0,
    selectValue: "auto",
    selectValues: ["%", "px", "auto"],
  },
  {
    name: "Width",
    type: "mixed",
    numberValue: 150,
    selectValue: "px",
    selectValues: ["%", "px", "auto"],
  },
  {
    name: "Height",
    type: "mixed",
    numberValue: 150,
    selectValue: "px",
    selectValues: ["%", "px", "auto"],
  },
];
