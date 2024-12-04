<script lang="ts" setup>
import type { PropertyDimensionsType } from "@/types/PropertyDimensionsType";
import FlexElement from "../shared/FlexElement.vue";
import { ref, computed, inject, onMounted } from "vue";
import type { AlignSelf } from "@/types/FlexElementProps";
import { cloneDeep } from "lodash";
import type {
  AlignContent,
  AlignItems,
  FlexDirection,
  FlexStyle,
  FlexWrap,
  JustifyContent,
} from "@/types/FlexStyle";
import { type SettingsInput } from "../shared/SettingsManager.vue";
import { flexStyleSettings } from "@/utils/flexStyleSettings";
import { flexElementSettings } from "@/utils/flexElementStyleSettings";
import { SettingsManagerProvider } from "@/providers/SettingsManagerProvider";
import SharedWorkspace from "../shared/SharedWorkspace.vue";
import { ElementManagerProvider } from "@/providers/ElementsManagerProvider";

onMounted(() => {
  for (let i = 0; i < 3; i++) {
    addElement();
  }
});

const workspace = ref<{
  handleElementClick: (index: number) => void;
  elements: SettingsInput[][];
  selectedElements: number[];
}>();

const { onAddClick, onResetClick } = inject(ElementManagerProvider)!;

const {
  elementInputSettings,
  inputSettings,
  option1Name,
  option2Name,
  settingsMode,
} = inject(SettingsManagerProvider)!;

inputSettings.value = cloneDeep(flexStyleSettings);
elementInputSettings.value = cloneDeep(flexElementSettings);

option1Name.value = "Flex";
option2Name.value = "Element";

settingsMode.value = "Flex";

const handleElementClick = (index: number) => {
  workspace.value?.handleElementClick(index);
};

const addElement = () => {
  workspace.value?.elements.push(cloneDeep(flexElementSettings));
};

onAddClick.value = () => {
  addElement();
};

onResetClick.value = () => {
  resetWorkspace();
};

const resetWorkspace = () => {
  workspace.value!.elements = [];
  workspace.value!.selectedElements = [];
  for (let i = 0; i < 3; i++) {
    addElement();
  }
  inputSettings.value = cloneDeep(flexStyleSettings);
};

const style = computed<FlexStyle>(() => ({
  gap:
    (inputSettings.value[0].selectValue! as PropertyDimensionsType) == "auto"
      ? "auto"
      : inputSettings.value[0].numberValue! +
        (inputSettings.value[0].selectValue! as PropertyDimensionsType),
  flexDirection: inputSettings.value[1].selectValue as FlexDirection,
  flexWrap: inputSettings.value[2].selectValue as FlexWrap,
  justifyContent: inputSettings.value[3].selectValue as JustifyContent,
  alignItems: inputSettings.value[4].selectValue as AlignItems,
  alignContent: inputSettings.value[5].selectValue as AlignContent,
}));
</script>

<template>
  <SharedWorkspace ref="workspace">
    <div :style="style" class="wf-container">
      <FlexElement
        v-for="(element, index) in workspace?.elements"
        @click="handleElementClick(index)"
        :key="index"
        :selected="workspace!.selectedElements.includes(index)"
        :align-self="(element[3].selectValue! as AlignSelf)"
        :flex-basis="element[4].numberValue!"
        :flex-grow="element[1].numberValue!"
        :flex-shrink="element[2].numberValue!"
        :height="element[6].numberValue!"
        :height-type="(element[6].selectValue as PropertyDimensionsType)"
        :flex-basis-type="(element[4].selectValue as PropertyDimensionsType)"
        :order="element[0].numberValue!"
        :name="index.toString()"
        :width="element[5].numberValue!"
        :width-type="(element[5].selectValue as PropertyDimensionsType)"
      ></FlexElement>
    </div>
  </SharedWorkspace>
</template>

<style lang="scss">
.wf-container {
  display: flex;
}
</style>
