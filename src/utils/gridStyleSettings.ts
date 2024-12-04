import type { SettingsInput } from "@/components/shared/SettingsManager.vue";

export const gridStyleSettings: SettingsInput[] = [
  {
    name: "Columns",
    type: "number",
    numberValue: 2,
  },
  {
    name: "Rows",
    type: "number",
    numberValue: 2,
  },
  {
    name: "Column gap",
    type: "mixed",
    numberValue: 10,
    selectValue: "px",
    selectValues: ["%", "px", "auto"],
  },
  {
    name: "Row gap",
    type: "mixed",
    numberValue: 10,
    selectValue: "px",
    selectValues: ["%", "px", "auto"],
  },
];
