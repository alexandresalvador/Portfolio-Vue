<template>
  <div id="home">
    <nav class="navbar navbar-light" style="padding: 40px">
      <div class="container-fluid">
        <img
          class="card-img-top"
          src="https://faculdade.ielusc.br/wp-content/themes/ielusc/assets/images/logo-footer.png"
          alt=""
          style="width: 10rem"
        />
      </div>
    </nav>
    <div id="home2">
      <nav class="navbar navbar-light" style="padding: 40px">
        <div class="home-body" v-for="titulo in titulos" :key="titulo.id">
          <h1 class="home-title"> {{titulo.texto}}</h1>
          <p class="home-text"> {{titulo.paragrafo}}</p>
          <img :src="titulo.image" class="card-img-top" >
        </div>
      </nav>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "HomeView",
  data() {
    return {
      titulos: [
        {
          id: 1,
          texto: "Olá seja Bem-Vindo!",
          paragrafo: "Você pode adicionar novas escolaridades e novos trabalhos com as 2 novas funções deste portfólio!",
          image: "https://media.istockphoto.com/photos/minimal-work-space-creative-flat-lay-photo-of-workspace-desk-top-view-picture-id1220573371?b=1&k=20&m=1220573371&s=170667a&w=0&h=dyT6F0wNP1NdDdvvTd95RVrR8qHwbEU8bqLxpDpSejw=",
        },
      ],
    };
  },
};
</script>

<style scoped>

</style>