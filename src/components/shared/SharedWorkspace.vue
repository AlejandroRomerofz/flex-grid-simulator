<script lang="ts" setup>
import { ref, inject, watch } from "vue";
import { cloneDeep } from "lodash";
import { type SettingsInput } from "../layout/SettingsManager.vue";
import { ElementManagerProvider } from "@/providers/ElementsManagerProvider";
import { SettingsManagerProvider } from "@/providers/SettingsManagerProvider";

// Inject providers
const { disableCopyButton, disableRemoveButton, onCopyClick, onRemoveClick } =
  inject(ElementManagerProvider)!;

const {
  elementInputSettings,
  elementsSelectedCount,
  inputSettings,
  onElementSelectChange,
  onElementValueNumberChange,
  onSelectChange,
  onValueNumberChange,
} = inject(SettingsManagerProvider)!;

// Store elements and selected elements indexes
const elements = ref<SettingsInput[][]>([]);
const selectedElements = ref<number[]>([]);

// Set all emits from providers
onCopyClick.value = () => {
  copySelected();
};

onRemoveClick.value = () => {
  removeSelected();
};

onValueNumberChange.value = (index: number, value: number) => {
  inputSettings.value[index].numberValue = value;
};

onSelectChange.value = (index: number, value: string) => {
  inputSettings.value[index].selectValue = value;
};

onElementValueNumberChange.value = (index: number, value: number) => {
  elementInputSettings.value[index].numberValue = value;
};

onElementSelectChange.value = (index: number, value: string) => {
  elementInputSettings.value[index].selectValue = value;
};

watch(selectedElements, (newValue) => {
  elementsSelectedCount.value = selectedElements.value.length;
  if (newValue.length > 0) {
    // If selected elements enable copy and remove buttons
    if (disableCopyButton.value) disableCopyButton.value = false;
    if (disableRemoveButton.value) disableRemoveButton.value = false;

    //If only one is selected its options are shown
    if (newValue.length === 1) {
      elementInputSettings.value = elements.value[selectedElements.value[0]];
    }

    return;
  }

  // If no selected elements disable copy and remove buttons

  if (!disableCopyButton.value) disableCopyButton.value = true;
  if (!disableRemoveButton.value) disableRemoveButton.value = true;
});

const copySelected = () => {
  for (const selectedIndex of selectedElements.value) {
    const selectedElement = elements.value[selectedIndex];
    elements.value.push(cloneDeep(selectedElement));
  }
  selectedElements.value = [];
};

const removeSelected = () => {
  elements.value = elements.value.filter(
    (element, index) => !selectedElements.value.includes(index)
  );
  selectedElements.value = [];
};

const switchElementSelected = (index: number) => {
  //Deselect
  if (selectedElements.value.includes(index)) {
    const newSelected = selectedElements.value.filter((i) => i != index);
    selectedElements.value = newSelected;
    return;
  }

  //Select
  const newSelected = [...selectedElements.value];
  newSelected.push(index);
  selectedElements.value = newSelected;
};

const handleElementClick = ref((index: number) => {
  switchElementSelected(index);
});

defineExpose({
  handleElementClick: handleElementClick.value,
  elements,
  selectedElements,
});
</script>

<template>
  <div class="workspace">
    <div class="container w-container">
      <slot></slot>
    </div>
  </div>
</template>

<style lang="scss">
.workspace {
  margin-top: $header-height + $mobile-manager-height;
  margin-bottom: $mobile-settings-manager-height + 2rem;
  @include laptop {
    margin-bottom: 0;
    margin-left: $laptop-settings-manager-width;
  }
}
.w-container {
  padding: 1rem;
}
</style>
