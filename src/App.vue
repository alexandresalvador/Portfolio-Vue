<template>
  <div id="app">
    <navbar />
    <nav>
      <router-link to="/">Home</router-link> |
      <router-link to="/about">Sobre</router-link> |
      <router-link to="/educacao">Escolaridade</router-link> |
      <router-link to="/trabalho">Trabalhos</router-link> 
    </nav>
    <router-view :escolaridade="escolaridades"/>
  </div>

</template>
<script>
import navbar from '@/components/Navbar.vue';
import card from '@/components/Card.vue';
import form1 from '@/components/FormEscola.vue';

export default {
  components: {
    navbar,
    card,
    form1,
  },
  data() {
    return {
      escolaridades: [
        {
          id: 1,
          nome: "Escola Municipal Senador Carlos Gomes de Oliveira",
          periodo: "6",
          status: "Concluido",
        },
        {
          id: 2,
          nome: "Escola Básica Professor João Rocha",
          periodo: "3",
          status: "Concluido",
        },
        {
          id: 3,
          nome: "Senai Norte I - Analise e Desenvolvimento de Sistemas",
          periodo: "1,5",
          status: "Incompleto",
        },
      ],
    };
  },
  methods: {
    exibeLocalStorage() {
      let escolaStorage = JSON.parse(localStorage.getItem("dadosEscolaridade"));
      this.escolaridades = this.escolaridades.concat(escolaStorage);
      console.log(this.escolaridades);
    },
  },
  beforeMount() {
    if (localStorage.getItem("dadosEscolaridade")) {
      this.exibeLocalStorage();
    }
  },
};
</script>
<style scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
 margin: 5px;
  color: #2c3e50;
}

nav {
  padding: 30px;
  float: right;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
