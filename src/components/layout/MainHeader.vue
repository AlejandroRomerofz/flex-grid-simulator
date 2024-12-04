<script lang="ts" setup>
import { DarkModeProvider } from "@/providers/DarkModeProvider";
import { inject } from "vue";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { faSun, faMoon } from "@fortawesome/free-solid-svg-icons";
import { useRouter } from "vue-router";

const router = useRouter();

const { darkMode, toggleDarkMode } = inject(DarkModeProvider)!;

const toggleMode = () => {
  if (router.currentRoute.value.path == "/grid") {
    router.push("/");
    return;
  }
  router.push("/grid");
};
</script>

<template>
  <header class="main-header">
    <div class="container mh-container">
      <div class="toggle-mode" @click="toggleMode">
        <p>{{ router.currentRoute.value.path == "/grid" ? `grid` : `flex` }}</p>
      </div>
      <p>Flex and grid simulator</p>
      <div @click="toggleDarkMode" class="dark-mode-switch">
        <font-awesome-icon v-if="darkMode" :icon="faSun" />
        <font-awesome-icon v-if="!darkMode" :icon="faMoon" />
      </div>
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
  @include background($secondary);
}

.mh-container {
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  p {
    font-weight: 300;
  }
  .toggle-mode {
    width: 7rem;
    padding: 0.5rem;
    border: 1px solid black;
    border-radius: 0.6rem;
    text-align: center;
    cursor: pointer;
    &:hover {
      @include background($primary);
    }
    p {
      font-size: 1.6rem;
      text-transform: capitalize;
    }
  }
  .dark-mode-switch {
    cursor: pointer;
    width: 7rem;
    font-size: 1.8rem;
    text-align: end;
    &:hover {
      filter: invert(40%);
    }
  }
}
</style>
