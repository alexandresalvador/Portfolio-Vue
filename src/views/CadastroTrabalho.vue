<template>
    <div class="about">
      <div class="about-about" style="padding: 40px">
        <header>
          <h1>Cadastre um novo trabalho:</h1>
        </header>

        <div class="label"></div>
        <FormTrabalho />
        <router-link
                class="btn btn-dark"
                to="trabalho"
              >
                Voltar
        </router-link>
      </div>
    </div>
</template>


<script>
import FormTrabalho from "@/components/FormTrabalho.vue";
export default {
  name: "CadastroTrabalho",
  components: {
    FormTrabalho,
  },
};
</script>


<style scoped>


</style>
