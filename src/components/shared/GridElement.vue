<script lang="ts" setup>
import type { GridElementProps } from "@/types/GridElementProps";
import type { GridElementStyle } from "@/types/GridElementStyle";
import { computed, defineEmits } from "vue";

const props = defineProps<GridElementProps>();
const emits = defineEmits(["click"]);

const handleClick = () => {
  emits("click");
};

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
    class="grid-element bg-secondary"
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
  &:hover {
    filter: invert(10%);
  }
  &.selected {
    background-color: rgb(186, 186, 255);
  }
  p {
    pointer-events: none;
    -webkit-user-select: none; /* Safari */
    -ms-user-select: none; /* IE 10 and IE 11 */
    user-select: none; /* Standard syntax */
  }
}
</style>
