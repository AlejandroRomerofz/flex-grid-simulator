<script lang="ts" setup>
import type { PropertyDimensionsType } from "@/types/PropertyDimensionsType";
import { ref, computed, inject, onMounted } from "vue";
import { cloneDeep } from "lodash";
import { type SettingsInput } from "./SettingsManager.vue";
import { SettingsManagerProvider } from "@/providers/SettingsManagerProvider";
import SharedWorkspace from "../shared/SharedWorkspace.vue";
import { gridStyleSettings } from "@/utils/gridStyleSettings";
import { gridElementStyleSettings } from "@/utils/gridElementStyleSettings";
import type { GridStyle } from "@/types/GridStyle";
import GridElement from "../shared/GridElement.vue";
import { ElementManagerProvider } from "@/providers/ElementsManagerProvider";

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

// Start component
onMounted(() => {
  addElement();
});

// Set grid setting and names
inputSettings.value = cloneDeep(gridStyleSettings);
elementInputSettings.value = cloneDeep(gridElementStyleSettings);

option1Name.value = "Grid";
option2Name.value = "Element";

settingsMode.value = "Grid";

// Set click method from workspace
const handleElementClick = (index: number) => {
  workspace.value?.handleElementClick(index);
};

// Set element manager add and reset functions
const addElement = () => {
  workspace.value!.selectedElements = [];
  workspace.value?.elements.push(cloneDeep(gridElementStyleSettings));
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
  addElement();
  inputSettings.value = cloneDeep(gridStyleSettings);
};

//Create grid style from grid settings
const style = computed<GridStyle>(() => ({
  gridTemplateColumns: `repeat(${inputSettings.value[0].numberValue!}, 1fr)`,
  gridTemplateRows: `repeat(${inputSettings.value[1].numberValue!}, 1fr)`,
  gridColumnGap:
    (inputSettings.value[2].selectValue! as PropertyDimensionsType) == "auto"
      ? "auto"
      : inputSettings.value[2].numberValue! +
        (inputSettings.value[2].selectValue! as PropertyDimensionsType),
  gridRowGap:
    (inputSettings.value[3].selectValue! as PropertyDimensionsType) == "auto"
      ? "auto"
      : inputSettings.value[3].numberValue! +
        (inputSettings.value[3].selectValue! as PropertyDimensionsType),
}));
</script>

<template>
  <SharedWorkspace ref="workspace">
    <div :style="style" class="wg-container">
      <GridElement
        v-for="(element, index) in workspace?.elements"
        @click="handleElementClick(index)"
        :key="index"
        :selected="workspace!.selectedElements.includes(index)"
        :grid-column-end="element[3].numberValue!"
        :grid-column-start="element[1].numberValue!"
        :grid-row-end="element[2].numberValue!"
        :grid-row-start="element[0].numberValue!"
        :name="index.toString()"
      ></GridElement>
    </div>
  </SharedWorkspace>
</template>

<style lang="scss">
.wg-container {
  display: grid;
}
</style>
