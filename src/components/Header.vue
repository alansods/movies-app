<template>
  <header id="header">

    <router-link to="/" exact>Home</router-link>
    <router-link to="/salvos" exact tag="button" class="meus-filmes">Salvos</router-link>

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
  justify-content: space-around;
  width: 100%;
  height: 60px;
  background: brown;
}

#header a {
  text-decoration: none;
  font-size: 30px;
  cursor: pointer;
  color: #fff;
}

button {
  cursor: pointer;
  border: 0;
  outline: none;
  background: #fff;
  font-weight: bold;
  padding: 5px 15px;
  border-radius: 5px;
  text-transform: uppercase;
}

</style>