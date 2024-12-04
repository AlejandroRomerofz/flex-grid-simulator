<script lang="ts" setup>
import type { FlexElementProps } from "@/types/FlexElementProps";
import type { FlexElementStyle } from "@/types/FlexElementStyle";
import { computed, defineEmits } from "vue";

const props = defineProps<FlexElementProps>();
const emits = defineEmits(["click"]);

const handleClick = () => {
  emits("click");
};

// Create style object from props
const style = computed<FlexElementStyle>(() => ({
  order: props.order,
  flexGrow: props.flexGrow,
  flexShrink: props.flexShrink,
  flexBasis:
    props.flexBasisType == "auto"
      ? "auto"
      : props.flexBasis + props.flexBasisType,
  alignSelf: props.alignSelf,
  width: props.widthType == "auto" ? "auto" : props.width + props.widthType,
  height: props.heightType == "auto" ? "auto" : props.height + props.heightType,
}));
</script>

<template>
  <div
    @click="handleClick"
    class="flex-element"
    :class="{ selected: props.selected }"
    :style="style"
  >
    <p>{{ props.name }}</p>
  </div>
</template>

<style lang="scss">
.flex-element {
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
  p {
    pointer-events: none;
    -webkit-user-select: none; /* Safari */
    -ms-user-select: none; /* IE 10 and IE 11 */
    user-select: none; /* Standard syntax */
  }
}
</style>
