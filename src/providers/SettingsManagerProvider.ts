import type { SettingsInput } from "@/components/shared/SettingsManager.vue";
import type { InjectionKey, Ref } from "vue";

export const SettingsManagerProvider: InjectionKey<{
  inputSettings: Ref<SettingsInput[]>;
  elementInputSettings: Ref<SettingsInput[]>;
  onValueNumberChange: Ref<(index: number, value: number) => void>;
  onSelectChange: Ref<(index: number, selected: string) => void>;
  onElementValueNumberChange: Ref<(index: number, value: number) => void>;
  onElementSelectChange: Ref<(index: number, selected: string) => void>;
  elementsSelectedCount: Ref<number>;
  option1Name: Ref<string>;
  option2Name: Ref<string>;
  settingsMode: Ref<string>;
}> = Symbol("element-manager");
