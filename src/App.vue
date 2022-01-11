<template>
  <div id="app">
    <Header />
    <router-view />

  </div>
</template>

<script>
import Header from '@/components/Header.vue'
export default {
  name: 'App',
  components: { Header }

}
</script>

<style scoped>

#app {
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

</style>