import type { SettingsInput } from "@/components/shared/SettingsManager.vue";

export const flexStyleSettings: SettingsInput[] = [
  {
    name: "Gap",
    type: "mixed",
    numberValue: 20,
    selectValue: "px",
    selectValues: ["%", "px", "auto"],
  },
  {
    name: "Flex-Direction",
    type: "select",
    selectValue: "row",
    selectValues: ["row", "row-reverse", "column", "column-reverse"],
  },
  {
    name: "Flex-Wrap",
    type: "select",
    selectValue: "nowrap",
    selectValues: ["wrap", "nowrap", "wrap-reverse"],
  },
  {
    name: "Justify-content",
    type: "select",
    selectValue: "start",
    selectValues: [
      "start",
      "center",
      "space-between",
      "space-around",
      "space-evenly",
      "end",
    ],
  },
  {
    name: "Align-items",
    type: "select",
    selectValue: "stretch",
    selectValues: ["start", "center", "stretch", "baseline", "end"],
  },
  {
    name: "Align-content",
    type: "select",
    selectValue: "stretch",
    selectValues: [
      "start",
      "center",
      "space-between",
      "stretch",
      "space-around",
      "end",
    ],
  },
];
