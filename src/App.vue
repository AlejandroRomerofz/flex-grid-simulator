<script setup lang="ts">
import { RouterView } from "vue-router";
import MainHeader from "./components/layout/MainHeader.vue";
import ElementManager from "./components/layout/ElementManager.vue";
import { provide, ref } from "vue";
import { ElementManagerProvider } from "./providers/ElementsManagerProvider";
import type { SettingsInput } from "./components/shared/SettingsManager.vue";
import { SettingsManagerProvider } from "./providers/SettingsManagerProvider";
import OptionsSwitch from "./components/shared/OptionsSwitch.vue";
import SettingsManager from "./components/shared/SettingsManager.vue";

const disableRemoveButton = ref(true);
const disableCopyButton = ref(true);
const onRemoveClick = ref(() => {});
const onAddClick = ref(() => {});
const onResetClick = ref(() => {});
const onCopyClick = ref(() => {});

const option1Name = ref("");
const option2Name = ref("");

const inputSettings = ref<SettingsInput[]>([]);
const elementInputSettings = ref<SettingsInput[]>([]);
const onValueNumberChange = ref(() => {});
const onSelectChange = ref(() => {});
const onElementValueNumberChange = ref(() => {});
const onElementSelectChange = ref(() => {});
const elementsSelectedCount = ref(0);

const settingsMode = ref<string>("");

const handleSettingsModeChange = (mode: 1 | 2) => {
  switch (mode) {
    case 1:
      settingsMode.value = option1Name.value;
      break;
    case 2:
      settingsMode.value = option2Name.value;
      break;
  }
};

provide(ElementManagerProvider, {
  disableRemoveButton,
  disableCopyButton,
  onAddClick,
  onCopyClick,
  onRemoveClick,
  onResetClick,
});

provide(SettingsManagerProvider, {
  elementInputSettings,
  elementsSelectedCount,
  inputSettings,
  onElementSelectChange,
  onElementValueNumberChange,
  onSelectChange,
  onValueNumberChange,
  option1Name,
  option2Name,
  settingsMode,
});
</script>

<template>
  <MainHeader></MainHeader>
  <div class="manager-container">
    <div class="m-container">
      <ElementManager
        :disable-add-button="false"
        :disable-remove-button="disableRemoveButton"
        :disable-reset-button="false"
        :disable-copy-button="disableCopyButton"
        @add-button-click="onAddClick"
        @copy-button-click="onCopyClick"
        @remove-button-click="onRemoveClick"
        @reset-button-click="onResetClick"
      ></ElementManager>
    </div>
  </div>

  <RouterView />

  <div class="settings-manager-container bg-secondary">
    <div class="smc-switch-container">
      <div class="smc-switch">
        <OptionsSwitch
          @change="handleSettingsModeChange"
          :option1-name="option1Name"
          :option2-name="option2Name"
        ></OptionsSwitch>
      </div>
    </div>
    <SettingsManager
      v-if="settingsMode == option1Name"
      @value-change="onValueNumberChange"
      :settings="inputSettings"
      @select-change="onSelectChange"
    ></SettingsManager>
    <SettingsManager
      v-if="settingsMode == option2Name && elementsSelectedCount == 1"
      @value-change="onElementValueNumberChange"
      :settings="elementInputSettings"
      @select-change="onElementSelectChange"
    ></SettingsManager>
    <div class="no-selected-elements">
      <p v-if="settingsMode == option2Name && elementsSelectedCount == 0">
        No elements selected
      </p>
      <p v-if="settingsMode == option2Name && elementsSelectedCount > 1">
        Select only one element
      </p>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.manager-container {
  z-index: 10;
  position: fixed;
  top: $header-height;
  left: 0;
  width: 100%;
  height: $mobile-manager-height;
  display: flex;
  justify-content: center;
  align-items: center;
}

.m-container {
  padding: 1rem 0;
  width: 75%;
  height: 100%;
  display: flex;
}

.smc-switch-container {
  position: relative;
  .smc-switch {
    position: absolute;
    top: -5rem;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
}

.settings-manager-container {
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  height: $mobile-settings-manager-height;
  .no-selected-elements {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
}
</style>
