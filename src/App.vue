<template>
  <div id="app">
    <navbar />
    <nav>
      <router-link to="/">Home</router-link> |
      <router-link to="/about">Sobre</router-link> |
      <router-link to="/educacao">Escolaridade</router-link> |
      <router-link to="/trabalho">Trabalhos</router-link> |
      <router-link to="/contato">Contato</router-link> 
    </nav>
    <router-view/>
  </div>

</template>
<script>
import navbar from '@/components/Navbar.vue';
import card from '@/components/Card.vue';

export default {
  components: {
    navbar,
    card,
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
