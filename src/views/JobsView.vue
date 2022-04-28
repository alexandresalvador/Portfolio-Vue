<template >
  <div class="about">
    <div class="about-about" style="padding: 40px">
      <h1>Meus trabalhos: </h1>
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
export default {
  name: "JobsView",
  name: "jobs",
  components: {
    Card,
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
      teste(){
          
      }
  }
};
</script>

<style scoped>
.trabalho h2 {
  padding: 30px;
  text-align: justify;
}
</style>