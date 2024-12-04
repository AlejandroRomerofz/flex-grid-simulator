import type { InjectionKey, Ref } from "vue";

export const DarkModeProvider: InjectionKey<{
  darkMode: Ref<boolean>;
  toggleDarkMode: () => void;
}> = Symbol("dark-mode");
