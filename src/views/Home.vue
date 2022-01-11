<template>
  <div id="home">
    <div class="lista-filmes">
      <article class="filme" v-for="filme in filmes" :key="filme.id">
        <strong>{{ filme.nome }}</strong>
        <img :src="filme.foto" :alt="filme.nome" />
        <router-link :to="`/filme/${filme.id}`">Acessar</router-link>
      </article>
    </div>
  </div>
</template>

<script>
import api from "@/service/api";

export default {
  data() {
    return {
      filmes: [],
    };
  },
  async created() {
    const response = await api.get("?api=filmes");
    this.filmes = response.data;
  },
};
</script>

<style scoped>
#home {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  width: 100%px;
}

.lista-filmes {
  margin-top: 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}

.lista-filmes article {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #fff;
  margin: 15px;
  border-radius: 10px;
  box-shadow: rgba(0, 0, 0, 0.45) 0px 25px 20px -20px;
  transition: all .2s;
}

.lista-filmes article:hover {
  transform: scale(1.05);
}

.lista-filmes strong {
  font-size: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 50px;
}

img {
  max-height: 500px;
  width: 400px;
}

.lista-filmes article a {
  text-decoration: none;
  color: #fff;
  font-size: 18px;
  background-color: brown;
  width: 100%;
  height: 40px;
  margin-top: -25px;
  text-align: center;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.lista-filmes article a:hover {
  background-color:rgb(224, 59, 59) ;
}
</style>
