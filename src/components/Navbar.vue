<template>
  <div class="card">
    <nav class="navbar navbar-light" style="mb-2">
      <div class="container-fluid">
        <img
          class="card-img-top"
          src="https://avatars.githubusercontent.com/u/62520840?v=4"
          alt=""
          style="width: 10rem" 
        />
        <div class="card-body">
          <h1 class="mt-4">{{ nomeInteiro }}</h1>
          <p class="card-text">Estudante na Área de Sistemas</p>
        </div>

        <div>
          <ul class="list-group">
            <li class="list-group-item list-group-item">
              <div class="contact-info">
                <p class="contact-title">Email:</p>
                <p class="contact-link"> {{ this.navbar.email }}</p>
                <p></p>
                <p class="contact-title">GitHub:</p>
                <a href="https://github.com/alexandresalvador" class="contact-link">{{ this.navbar.github }}</a>
              </div>
            </li>
          </ul>
        </div>
        <div>
          <ul class="list-group">
            <li class="list-group-item list-group-item">
              <div class="contact-info">
                <p class="contact-title" >Telefone:</p>
                <a class="contact-link" v-bind:href="ligaTelefone">{{ this.navbar.telefone }}</a>
                 <p></p>
                <p class="contact-title">Bairro:</p>
                <a href="https://www.google.com.br/maps/place/Aventureiro,+Joinville+-+SC/@-26.2449809,-48.8289643,14z/data=!3m1!4b1!4m5!3m4!1s0x94deae0d6a0a25a1:0xa474c128c4ac9c37!8m2!3d-26.2536056!4d-48.8191438" 
                class="contact-link">{{ this.navbar.bairro }}</a>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  name: "navbar",
  data() {
    return {
      navbar: {
        nome: "Alexandre",
        sobrenome: "Salvador",
        email: "alexandre.salvador01@gmail.com",
        telefone: "(47)9 9195-2941",
        bairro: "Aventureiro, Jlle",
        github: "alexandresalvador",
      },
    };
  },
    computed: {
    nomeInteiro() {
      return this.navbar.nome + " " + this.navbar.sobrenome;
    },
    ligaTelefone() {
      return "tel:" + this.navbar.telefone;
    },
  },
};
</script>


<style scoped>

.card-img-top{
 padding: 10px;
border-radius: 50%;
}
</style>
