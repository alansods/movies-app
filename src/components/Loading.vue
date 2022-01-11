<template>
  <div id="loading">
    <h3>Carregando</h3>
    <div class="loading">
      <span></span>
      <span></span>
      <span></span>
      <span></span>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>

#loading {
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  margin-top: 40px;
  flex-direction: column;
  color: brown;
  font-size: 20px;
}

.loading span {
  display: inline-block;
  width: 20px;
  height: 20px;
  border-radius: 10px;
  background: brown;
  margin: 4px;
  animation: dots 0.2s cubic-bezier(0.6, 0.1, 1, 0.4) infinite alternate;
}

.loading span:nth-child(1) {
  animation-delay: 0.1s;
}

.loading span:nth-child(2) {
  animation-delay: 0.2s;
}

.loading span:nth-child(3) {
  animation-delay: 0.3s;
}

.loading span:nth-child(4) {
  animation-delay: 0.4s;
}

@keyframes dots {
  from {
    transform: translate3d(0, 0, 0);
  }
  to {
    transform: translate3d(0, 30px, 0);
  }
}
</style>
