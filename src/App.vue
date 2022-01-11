<template>
  <div id="app">
    <Header />

    <div class="container">
      <transition mode="out-in">
        <router-view />
      </transition>
    </div>
  </div>
</template>

<script>
import Header from "@/components/Header.vue";
export default {
  name: "App",
  components: { Header },
};
</script>

<style>
:root {
  --main-color: brown;
  --main-color-hover: rgb(224, 59, 59);
  --text-color: rgb(17, 19, 37);
}

#app {
  display: flex;
  width: 100%;
  align-items: center;
  flex-direction: column;
  margin-bottom: 70px;
  color: var(--text-color);
}

.container {
  margin: 0 5px;
}

/* TRANSITIONS */

.v-enter,
.v-leave-to {
  transform: translate3d(0, -20px, 0);
  opacity: 0;
}

.v-enter-active,
.v-leave-active {
  transition: all 0.3s;
}
</style>
