<template >
  <div class="about">
    <div class="about-about" style="padding: 40px">
      <div>
        <h1>Educação :</h1>
        <a class="btn btn-primary">
          <router-link
            class="text-light text-decoration-none"
            v-bind:to="url()"
          >
            Cadastrar Escolaridade
          </router-link>
        </a>
      </div>
       <div class="nome" v-for="escola in escolas" :key="escola.id">
        <h4> Nome: {{ escola.nome }}</h4>
        <h4> Período: {{ escola.periodo }} ano(s)</h4>
        <h6 style="color: #E3052E"> Status: {{ escola.status }}</h6>
        <h6> -------------------------------------------------</h6>
      </div> 
      <div class="nome" v-for="escolaridade in escolaridade" :key="escolaridade.id">
        <h4> Nome: {{ escolaridade.nome }}</h4>
        <h4> Período: {{ escolaridade.periodo }} ano(s)</h4>
        <h6 style="color: #E3052E"> Status: {{ escolaridade.status }}</h6>
        <h6> -------------------------------------------------</h6>
      </div>
    </div>
  </div>
</template>
<script>
import Card from "@/components/Card.vue";
import form1 from '@/components/FormEscola.vue';
export default {
  name: "EducationView",
  name: "about",
  components: {
    Card,
    form1,
    props: {
    escolaridade: {
      type: Array,
      required: true,
    },
  },
  },
  data() {
    return {
      escolas: [
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
     url() {
      return "/cad-escolaridade";
    },
  },
};
</script>

<style scoped>
.nome h4 {
  padding: 10px;
  text-align: justify;
}
</style>