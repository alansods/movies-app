<template>
  <div id="filme">
    <div class="loading" v-show="loading">
      <Loading />
    </div>

      <div class="container" v-show="!loading">
        <h1>Filme</h1>
        <h2>{{ filme.nome }}</h2>
        <img :src="filme.foto" alt="filme.nome" />
        <h3>Sinopse</h3>
        <p>{{ filme.sinopse }}</p>
        <div class="botoes">
          <router-link tag="button" to="/" class="voltar"><i class="fas fa-caret-left"></i>Voltar</router-link>
          <div class="container-butons">
            <button class="btn-favoritar" @click="salvarFilme"><i class="fas fa-star"></i>Favoritar</button>
            <button class="btn-trailer"><a :href="`https://www.youtube.com/results?search_query=${filme.nome}+trailer`" target="_blank"><i class="fas fa-video"></i>Trailer</a></button>
          </div>
        </div>
      </div>
  </div>
</template>

<script>
import api from "@/service/api";
import Loading from "@/components/Loading.vue";

export default {
  props: ["id"],
  components: { Loading },
  data() {
    return {
      filme: {},
      loading: true,
    };
  },
  methods: {
    salvarFilme() {
      const minhaLista = localStorage.getItem('favoritos');
      let filmes = JSON.parse(minhaLista) || [];

      //Se o filme clicado já estiver favoritado retorna true
      const hasFilme = filmes.some((filme) => filme.id === this.filme.id)
      if(hasFilme) {
        alert("Este filme já está na sua lista de favoritos!")
        return
      }

      filmes.push(this.filme);
      localStorage.setItem('favoritos', JSON.stringify(filmes));
    }
  },
  async created() {
    const response = await api.get(`?api=filmes/${this.id}`);
    this.filme = response.data;
    this.loading = false;
  },
};
</script>

<style scoped>

.loading {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}

#filme {
  margin-top: 60px;
}

h1 {
  text-align: center;
}

h2 {
  color: #fff;
  margin-bottom: 0px;
  background: var(--main-color);
  padding: 18px 30px;
  border-top-left-radius: 15px;
  border-top-right-radius: 15px;
}

h3 {
  font-size: 22px;
  margin-bottom: 0;
}

i {
  margin-right: 7px;
  font-size: 16px;
}

.container {
  display: flex;
  flex-direction: column;
  max-width: 750px;
}

.container img {
  width: 100%;
  border-bottom-left-radius: 15px;
  border-bottom-right-radius: 15px;
}

.botoes {
  display: flex;
  justify-content: space-between;
}

.container-butons {
  display: flex;
}

.btn-favoritar {
  margin-right: 15px;
  display: flex;
  align-items: center;
}

.btn-trailer {
  display: flex;
  align-items: center;
}

.voltar {
  display: flex;
  align-items: center;
  margin-right: 15px;
}

.voltar i {
  font-size: 28px;
}

button {
  border-radius: 5px;
  margin-top: 50px;
  cursor: pointer;
  border: 0;
  padding: 12px;
  font-size: 20px;
  transition: all 0.2s ease;
  outline: none;
  user-select: none;
  color: var(--text-color);
}

button:hover {
  background: var(--main-color);
  color: #fff;
  transform: scale(1.05);

}

button:hover a{
  color: #fff;
}

a {
  text-decoration: none;
  color: var(--text-color);
  transition: all 0.5s;
  user-select: none;
}

button:active {
  transform: scale(0.95);
}
</style>
