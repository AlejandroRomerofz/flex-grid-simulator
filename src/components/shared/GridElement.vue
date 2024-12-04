<script lang="ts" setup>
import type { GridElementProps } from "@/types/GridElementProps";
import type { GridElementStyle } from "@/types/GridElementStyle";
import { computed, defineEmits } from "vue";

const props = defineProps<GridElementProps>();
const emits = defineEmits(["click"]);

const handleClick = () => {
  emits("click");
};

// Create style object from props
const style = computed<GridElementStyle>(() => ({
  gridColumnEnd: props.gridColumnEnd,
  gridColumnStart: props.gridColumnStart,
  gridRowEnd: props.gridRowEnd,
  gridRowStart: props.gridRowStart,
}));
</script>

<template>
  <div
    @click="handleClick"
    class="grid-element"
    :class="{ selected: props.selected }"
    :style="style"
  >
    <p>{{ props.name }}</p>
  </div>
</template>

<style lang="scss">
.grid-element {
  transition: 0.5s;
  padding: 2rem;
  border-radius: 1rem;
  box-shadow: 4px 4px 2px black;
  cursor: pointer;
  @include background($secondary);
  &:hover {
    filter: invert(10%);
  }
  &.selected {
    @include background($tertiary);
  }
}
</style>
