<script lang="ts" setup>
// CREATE COMPONENT WITH SETTINGS FROM A SettingsInput ARRAY

import SettingsManagerSelect from "../shared/SettingsManagerSelect.vue";

type SettingsManagerProps = {
  settings: SettingsInput[];
};

export type SettingInputType = "number" | "select" | "mixed";

export type SettingsInput = {
  name: string;
  type: SettingInputType;
  selectValues?: string[];
  numberValue?: number;
  selectValue?: string;
};

const props = defineProps<SettingsManagerProps>();

const emits = defineEmits(["valueChange", "selectChange"]);

const handleChange = (index: number, element: HTMLInputElement) => {
  emits("valueChange", index, element.value);
};

const handleSelectChange = (index: number, selected: string) => {
  emits("selectChange", index, selected);
};
</script>

<template>
  <div class="settings-manager bg-secondary">
    <div class="container sm-container">
      <div
        v-for="(settingInput, index) in props.settings"
        :key="index"
        class="settings-input"
      >
        <p>{{ settingInput.name }}</p>
        <div class="si-inputs">
          <input
            class="bg-primary"
            type="number"
            :value="settingInput.numberValue"
            @input="(e) => handleChange(index, e.target as HTMLInputElement)"
            v-if="settingInput.type == 'number' || settingInput.type == 'mixed'"
          />
          <SettingsManagerSelect
            v-if="settingInput.type == 'select' || settingInput.type == 'mixed'"
            @change="(selected) => handleSelectChange(index, selected)"
            :options="settingInput.selectValues ?? []"
            :selection="settingInput.selectValue ?? ''"
          ></SettingsManagerSelect>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.settings-manager {
  width: 100%;
  height: 100%;
  padding: 1rem 0;
  p {
    font-size: 1.2rem;
  }
}

.sm-container {
  overflow-y: auto;
  padding: 0 1rem;
  display: flex;
  height: 100%;
  flex-direction: column;
  .settings-input {
    align-items: center;
    display: flex;
    justify-content: space-between;
    padding: 2rem 0;
  }
}

.si-inputs {
  display: flex;
  justify-content: end;
  align-items: center;
  gap: 1rem;
  input {
    width: 4rem;
    font-size: 1.2rem;
    padding: 0.5rem;
    max-width: 100%;
    border: 0;
    text-align: center;
    @include background($primary);
  }
}
</style>
