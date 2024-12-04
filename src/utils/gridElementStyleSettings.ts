import type { SettingsInput } from "@/components/shared/SettingsManager.vue";

export const gridElementStyleSettings: SettingsInput[] = [
  {
    name: "Row start",
    type: "number",
    numberValue: 1,
  },
  {
    name: "Column Start",
    type: "number",
    numberValue: 1,
  },
  {
    name: "Row end",
    type: "number",
    numberValue: 1,
  },
  {
    name: "Column End",
    type: "number",
    numberValue: 1,
  },
];
