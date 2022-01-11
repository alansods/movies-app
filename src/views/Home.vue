<template>
  <div id="home">
    <div class="lista-filmes">
      <article class="filme" v-for="filme in filmes" :key="filme.id">
        <strong>{{filme.nome}}</strong>
        <img :src="filme.foto" :alt="filme.nome">
        <router-link :to="`/filme/${filme.id}`">Acessar</router-link>
      </article>
    </div>
  </div>
</template>

<script>
import api from '@/service/api'

export default {
  data() {
    return {
      filmes: []
    }
  },
  async created() {
    const response = await api.get('?api=filmes')
    this.filmes = response.data
  }
}
</script>

<style scoped>

      #home{
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        width: 800px;
    }

    .lista-filmes{
        margin:15px;
    }

    .lista-filmes article{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        background-color: #FFF;
        margin: 15px;
        padding: 15px; 
        border-radius: 5px;
    }

    .lista-filmes strong{
        padding-bottom: 15px;
        font-size: 20px;
    }

    img{
      max-height: 350px;
      width: 900px;  
    }

    .lista-filmes article a{
        text-decoration: none;
        color: #FFF;
        font-size: 25px;
        background-color: brown;
        width: 100%;
        height: 40px;
        margin-top: -30px;
        text-align: center;
        border-bottom-left-radius: 5px;
        border-bottom-right-radius: 5px; 
    }

</style>