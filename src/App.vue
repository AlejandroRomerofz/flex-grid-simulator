<script setup lang="ts">
import { RouterView } from "vue-router";
import MainHeader from "./components/layout/MainHeader.vue";
import ElementManager from "./components/layout/ElementManager.vue";
import { provide, ref } from "vue";
import { ElementManagerProvider } from "./providers/ElementsManagerProvider";
import type { SettingsInput } from "./components/layout/SettingsManager.vue";
import { SettingsManagerProvider } from "./providers/SettingsManagerProvider";
import OptionsSwitch from "./components/shared/OptionsSwitch.vue";
import SettingsManager from "./components/layout/SettingsManager.vue";
import { DarkModeProvider } from "./providers/DarkModeProvider";

// Dark mode
const darkMode = ref(false);
const toggleDarkMode = () => {
  darkMode.value = darkMode.value ? false : true;
};

// Element manager
const disableRemoveButton = ref(true);
const disableCopyButton = ref(true);
const onRemoveClick = ref(() => {});
const onAddClick = ref(() => {});
const onResetClick = ref(() => {});
const onCopyClick = ref(() => {});

// Settings manager
// Settings mode options
const option1Name = ref("");
const option2Name = ref("");

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

// Flex or grid style settings
const inputSettings = ref<SettingsInput[]>([]);

// Flex or grid elements style settings
const elementInputSettings = ref<SettingsInput[]>([]);

const onValueNumberChange = ref(() => {});
const onSelectChange = ref(() => {});
const onElementValueNumberChange = ref(() => {});
const onElementSelectChange = ref(() => {});

const elementsSelectedCount = ref(0);

// Providers
provide(DarkModeProvider, { darkMode, toggleDarkMode });

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
  <div :class="{ dark: darkMode }">
    <div class="background"></div>
    <MainHeader></MainHeader>
    <div class="manager-container">
      <div class="m-container">
        <ElementManager
          v-if="inputSettings.length > 0"
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

    <div
      v-if="inputSettings.length > 0"
      class="settings-manager-container bg-secondary"
    >
      <div class="smc-switch">
        <OptionsSwitch
          @change="handleSettingsModeChange"
          :option1-name="option1Name"
          :option2-name="option2Name"
        ></OptionsSwitch>
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
  </div>
</template>

<style lang="scss" scoped>
.background {
  position: fixed;
  z-index: -10;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: $main-background-color;
  opacity: 1;
  background-image: $main-background-pattern;
  background-size: 20px 20px;
  .dark & {
    background-color: $main-dark-background-color;
    background-image: $main-dark-background-pattern;
  }
}
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
  @include laptop {
    margin-left: $laptop-settings-manager-width;
    width: 100rem;
    padding: 1rem 10rem;
  }
}

.smc-switch {
  position: absolute;
  top: -5rem;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  @include laptop {
    bottom: 5rem;
    top: unset;
    padding: 2rem 0;
    align-items: end;
  }
}

.smc-switch-container {
  position: relative;
}

.settings-manager-container {
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  z-index: 20;
  height: $mobile-settings-manager-height;
  @include background($secondary);
  @include laptop {
    top: $header-height;
    width: $laptop-settings-manager-width;
    height: 100%;
  }
  .no-selected-elements {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
}
</style>
