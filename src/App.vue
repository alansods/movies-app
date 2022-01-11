<template>
  <div id="app">
    <Header />
    <transition mode="out-in">
      <div class="container">
        <router-view />
      </div>
    </transition>
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
#app {
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-bottom: 70px;
}

.container {
  margin: 0 15px;
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
