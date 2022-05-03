<template >
  <div class="about">
    <div class="about-about" style="padding: 40px">
      <h1>Sobre Mim</h1>
      <div class="texto" v-for="texto in textos" :key="texto.id">
        <h2>
           {{texto.description}}
        </h2>
        <img :src="texto.image" class="card-img-top">
      </div>
    </div>
  </div>
</template>
<script>
import Card from "@/components/Card.vue";
export default {
  name: "AboutView",
  name: "about",
  components: {
    Card,
  },
  data() {
    return {
      textos: [
        {
          id: 1,
          description: "Sou Aluno da Quinta fase de Sistemas Para Internet na Faculdade Bom Jesus Ielusc, \
          Unidade Centro, aqui estou estudando sobre desenvolvimento Web e Mobile. \
          Meu objetivo aqui neste projeto é produzir um portfólio com tudo o que foi mostrado nas aulas utilizando o vue.js. \
          Tenho 20 anos e ainda estou a procura de meu primeiro emprego na área de sistemas. \
          Estou aqui para conquistar uma melhor experiência e colocar em prática tudo que aprendi por meio desse projeto de Portfólio. ",
          image: "https://tm.ibxk.com.br/2021/08/10/10181814794027.jpg?ims=1120x420",
        },
      ],
      
    };
  },
  methods: {
      teste(){
          
      }
  }
};
</script>

<style scoped>
.texto h2 {
  padding: 30px;
  text-align: justify;
}
</style>