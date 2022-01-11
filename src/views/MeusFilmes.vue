<template>
  <div id="meus-filmes">
    <h1>Favoritos</h1>
    <transition mode="out-in">
    <span v-show="filmes.length <= 0">Você não possui nenhum filme favoritado.</span
    >
    </transition>

    <ul v-show="filmes.length > 0">
      <li v-for="filme in filmes" :key="filme.id">
        <span><i class="fas fa-star"></i>{{ filme.nome }}</span>
        <div>
          <router-link tag="button" :to="`/filme/${filme.id}`"
            >Ver detalhes</router-link
          >
          <button @click="excluir(filme.id)">Remover</button>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      filmes: [],
    };
  },
  created() {
    const minhaLista = localStorage.getItem('favoritos');
    this.filmes = JSON.parse(minhaLista);
  },
  methods: {
    excluir(id) {
      let filtroFilmes = this.filmes.filter((filme) => {
        return (filme.id !== id);
      });
      return this.filmes = filtroFilmes;
    }
  },
  watch: {
    filmes() {
      localStorage.setItem('favoritos', JSON.stringify(this.filmes));
    }
  }
};
</script>

<style scoped>
#meus-filmes {
  display: flex;
  flex-direction: column;
  width: 100%;
  justify-content: center;
  align-items: center;
  margin-top: 60px;
}

i {
  margin-right: 7px;
  font-size: 16px;
}

span {
  display: flex;
  align-items: center;
}

ul {
  padding: 0;
}

ul li {
  padding: 0;
  list-style: none;
  min-width: 700px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 20px 0;
}

span {
  font-size: 22px;
}

button {
  margin-left: 10px;
  border-radius: 5px;
  cursor: pointer;
  border: 0;
  padding: 12px;
  font-size: 18px;
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


</style>
