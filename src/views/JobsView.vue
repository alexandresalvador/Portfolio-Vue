<template >
  <div class="about">
    <div class="about-about" style="padding: 40px">
      <div>
         <h1>Meus trabalhos: </h1>
        <a class="btn btn-primary">
          <router-link
            class="text-light text-decoration-none"
            v-bind:to="url()"
          >
            Cadastrar Trabalhos
          </router-link>
        </a>
      </div>
      <div class="trabalho" v-for="trabalho in trabalhos" :key="trabalho.id">
        <h2>
         <Card :trabalho="trabalho" />
        </h2>
      </div>
    </div>
  </div>
</template>
<script>
import Card from "@/components/Card.vue";
import form2 from '@/components/FormTrabalho.vue';
export default {
  name: "JobsView",
  name: "jobs",
  components: {
    Card,
    form2,
  },
  data() {
    return {
      trabalhos: [
        {
          id: 1,
          name: "Projeto 1",
          description: "Este é o projeto 1",
          photo:
            "https://codewithsadee.github.io/vcard-personal-portfolio/assets/images/project-1.jpg",
        },
      ],
      
    };
  },
  methods: {
       url() {
      return "/cad-trabalho";
    },
  }
};
</script>

<style scoped>
.trabalho h2 {
  padding: 30px;
  text-align: justify;
}
</style>