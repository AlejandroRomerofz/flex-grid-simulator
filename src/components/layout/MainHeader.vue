<script lang="ts" setup></script>

<template>
  <header class="main-header bg-secondary">
    <div class="container mh-container">
      <p>Flex and grid simulator</p>
    </div>
  </header>
</template>

<style lang="scss" scoped>
.main-header {
  z-index: 10;
  height: $header-height;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
}
.mh-container {
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  p {
    font-weight: 300;
  }
}
</style>
