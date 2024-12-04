<script lang="ts" setup>
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { faTrashCan, faCopy } from "@fortawesome/free-regular-svg-icons";
import { faArrowRotateLeft, faPlus } from "@fortawesome/free-solid-svg-icons";

type ElementManagerProps = {
  disableAddButton: boolean;
  disableRemoveButton: boolean;
  disableCopyButton: boolean;
  disableResetButton: boolean;
};

const props = defineProps<ElementManagerProps>();

const emits = defineEmits([
  "addButtonClick",
  "removeButtonClick",
  "copyButtonClick",
  "resetButtonClick",
]);

const handleAddButtonClick = () => {
  if (props.disableAddButton) return;
  emits("addButtonClick");
};

const handleRemoveButtonClick = () => {
  if (props.disableRemoveButton) return;

  emits("removeButtonClick");
};

const handleCopyButtonClick = () => {
  if (props.disableCopyButton) return;

  emits("copyButtonClick");
};

const handleResetButtonClick = () => {
  if (props.disableResetButton) return;

  emits("resetButtonClick");
};
</script>

<template>
  <div class="element-manager bg-secondary">
    <div
      @click="handleAddButtonClick"
      class="em-button add-button"
      :class="{ disabled: props.disableAddButton }"
    >
      <font-awesome-icon :icon="faPlus" />
    </div>
    <div
      @click="handleRemoveButtonClick"
      class="em-button remove-button"
      :class="{ disabled: props.disableRemoveButton }"
    >
      <font-awesome-icon :icon="faTrashCan" />
    </div>
    <div
      @click="handleCopyButtonClick"
      class="em-button"
      :class="{ disabled: props.disableCopyButton }"
    >
      <font-awesome-icon :icon="faCopy" />
    </div>
    <div
      @click="handleResetButtonClick"
      class="em-button"
      :class="{ disabled: props.disableResetButton }"
    >
      <font-awesome-icon :icon="faArrowRotateLeft" />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.element-manager {
  border-radius: 1rem;
  width: 100%;
  display: flex;
  justify-content: space-between;
  .em-button {
    padding: 2rem;
    flex-grow: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 2rem;
    &:not(.disabled) {
      cursor: pointer;
    }

    &.remove-button {
      color: rgb(255, 0, 0);
    }

    &.disabled {
      color: gray;
    }
  }
}
</style>
