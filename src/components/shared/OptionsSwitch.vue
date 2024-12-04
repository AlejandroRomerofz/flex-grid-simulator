<script lang="ts" setup>
import { ref } from "vue";

const optionSelected = ref<1 | 2>(1);

type OptionsSwitchProps = {
  option1Name: string;
  option2Name: string;
};

const props = defineProps<OptionsSwitchProps>();
const emits = defineEmits(["change"]);

const handleChange = (selected: 1 | 2) => {
  if (optionSelected.value == selected) return;
  optionSelected.value = selected;
  emits("change", optionSelected.value);
};
</script>

<template>
  <div class="options-switch">
    <div
      @click="handleChange(1)"
      class="option"
      :class="{
        selected: optionSelected == 1,
      }"
    >
      <p>{{ props.option1Name }}</p>
    </div>
    <div
      @click="handleChange(2)"
      class="option"
      :class="{
        selected: optionSelected == 2,
      }"
    >
      <p>
        {{ props.option2Name }}
      </p>
    </div>
  </div>
</template>

<style lang="scss">
.options-switch {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  border-radius: 1.5rem;
  overflow: hidden;

  .option {
    text-align: center;
    padding: 1rem 2rem;
    flex-basis: 50%;
    transition: 0.5s;
    &:not(.selected) {
      cursor: pointer;
      @include background($secondary);

      &:hover {
        @include background($primary);
      }
    }

    &.selected {
      @include background($tertiary);
    }
    p {
      font-size: 1.3rem;
    }
  }
}
</style>
