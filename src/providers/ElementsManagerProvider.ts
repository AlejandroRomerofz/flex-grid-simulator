import type { InjectionKey, Ref } from "vue";

export const ElementManagerProvider: InjectionKey<{
  disableRemoveButton: Ref<boolean, boolean>;
  disableCopyButton: Ref<boolean, boolean>;
  onRemoveClick: Ref<() => void>;
  onAddClick: Ref<() => void>;
  onResetClick: Ref<() => void>;
  onCopyClick: Ref<() => void>;
}> = Symbol("element-manager");
