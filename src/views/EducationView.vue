<template >
  <div class="about">
    <div class="about-about" style="padding: 40px">
      <h1>Educação : </h1>
      <div class="nome" v-for="nome in nomes" :key="nome.id">
        <h2>
          - {{nome.name}}
        </h2>
      </div>
    </div>
  </div>
</template>
<script>
import Card from "@/components/Card.vue";
export default {
  name: "EducationView",
  name: "about",
  components: {
    Card,
  },
  data() {
    return {
      nomes: [
        {
          id: 1,
          name: "Escola Municipal Senador Carlos Gomes de OLiveira - (2010-2016)",
        },
         {
          id: 2,
          name: "Escola Básica Professor João Rocha - (2017-2019)",
        },
         {
          id: 3,
          name: "Senai Norte I - Analise e Desenvolvimento de Sistemas - (2019-2020)",
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
.nome h2 {
  padding: 30px;
  text-align: justify;
}
</style>