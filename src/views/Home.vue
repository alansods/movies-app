<template>
  <div id="home">
    <div class="loading" v-show="loading">
      <Loading />
    </div>
      <div v-show="!loading">
        <h1>Lista de Filmes</h1>
        <div class="lista-filmes">
          <div v-for="filme in filmes" :key="filme.id">
            <router-link :to="`/filme/${filme.id}`">
              <article class="filme">
                <strong>{{ filme.nome }}</strong>
                <img :src="filme.foto" :alt="filme.nome" />
                <div class="btn-acessar">Acessar</div>
              </article>
            </router-link>
          </div>
        </div>
      </div>
  </div>
</template>

<script>
import api from "@/service/api";
import Loading from "@/components/Loading.vue";

export default {
  components: { Loading },
  data() {
    return {
      filmes: [],
      loading: true,
    };
  },
  async created() {
    const response = await api.get("?api=filmes");
    this.filmes = response.data;
    this.loading = false;
  },
};
</script>

<style scoped>
a {
  text-decoration: none;
}

h1 {
  text-align: center;
}

#home {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  margin-top: 60px;
}

.loading {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}

.lista-filmes {
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
  border-radius: 10px;
  box-shadow: rgba(0, 0, 0, 0.45) 0px 20px 20px -20px;
  transition: all 0.2s ease;
  margin: 20px;
}

.lista-filmes article:hover {
  transform: scale(1.05);
  box-shadow: rgba(0, 0, 0, 0.45) 0px 30px 20px -20px;
}

.lista-filmes strong {
  font-size: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 50px;
  color: var(--text-color);
  text-decoration: none;
}

img {
  max-height: 500px;
  max-width: 330px;
}

.lista-filmes article .btn-acessar {
  text-decoration: none;
  color: #fff;
  font-size: 18px;
  background-color: var(--main-color);
  width: 100%;
  height: 35px;
  margin-top: -25px;
  text-align: center;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.lista-filmes article:hover .btn-acessar {
  background-color: var(--main-color-hover);
}
</style>
