<script lang="ts" setup></script>

<template>
  <div class="not-found-container">
    <p class="">404</p>
    <p class="">Not Found</p>
  </div>
</template>

<style lang="scss">
.not-found-container {
  margin-top: $header-height;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  justify-content: center;
  p {
    &:first-of-type {
      font-size: 12rem;
    }
    &:last-of-type {
      font-size: 5rem;
    }
  }
}
</style>
