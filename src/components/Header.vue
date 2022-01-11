<template>
  <header id="header">

    <router-link to="/" exact><i class="fas fa-home"></i></router-link>
    <router-link to="/salvos" exact tag="button" class="meus-filmes">Meus Filmes</router-link>

  </header>
</template>

<script>
export default {

}
</script>

<style scoped>

#header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 60px;
  background: var(--main-color);
  position: fixed;
  top: 0;
  left: 0;
  z-index: 999;

}

#header a {
  text-decoration: none;
  font-size: 28px;
  cursor: pointer;
  color: #fff;
  transition: all 0.2s ease;
  margin-left: 30px;
  text-align: center;
  user-select: none;
}

button {
  cursor: pointer;
  border: 0;
  outline: none;
  background: #fff;
  font-weight: bold;
  padding: 10px 15px;
  border-radius: 3px;
  text-transform: uppercase;
  color: var(--main-color);
  transition: all 0.2s ease;
  margin-right: 30px;
  user-select: none;
}

button:hover {
  transform: scale(1.05);
}

button:active, a:active {
  transform: scale(0.95);
}

a:active {
  transform: scale(0.85);
}



</style>