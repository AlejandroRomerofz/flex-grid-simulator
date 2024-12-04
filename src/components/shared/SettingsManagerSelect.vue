<script lang="ts" setup>
import { ref } from "vue";

const open = ref(false);

type SettingManagerSelectProps = {
  options: string[];
  selection: string;
};

const props = defineProps<SettingManagerSelectProps>();

const switchOpen = () => {
  if (open.value) open.value = false;
  else open.value = true;
};

const emits = defineEmits(["change"]);

const changeSelect = (selection: string) => {
  if (selection == props.selection) return;
  emits("change", selection);
};
</script>

<template>
  <div @click="switchOpen" class="si-select">
    <p class="si-selected">{{ props.selection }}</p>
    <div class="sis-selections" :class="{ open: open }">
      <div
        class="sis-option"
        :class="{
          selected: selection == option,
        }"
        v-for="(option, index) in props.options"
        :key="index"
        @click="changeSelect(option)"
      >
        <p>{{ option }}</p>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.si-select {
  width: auto;
  position: relative;

  .si-selected {
    padding: 0.5rem 1rem;
    cursor: pointer;
    @include background($primary);
  }
  .sis-selections {
    position: absolute;
    width: max-content;
    z-index: 10;
    max-height: 10rem;
    overflow-y: auto;
    animation: open;
    opacity: 0;
    top: -1rem;
    right: 0;
    transition: 0.5s;
    pointer-events: none;
    cursor: pointer;
    @include background($primary);
    &.open {
      opacity: 100%;
      top: 0;
      pointer-events: all;
    }
  }
  .sis-option {
    padding: 0.5rem 1rem;
    &.selected {
      cursor: auto;
      @include background($tertiary);
    }
    &:not(.selected):hover {
      p {
        text-decoration: underline;
      }
    }
  }

  p {
    font-size: 1.2rem;
  }
}
</style>
