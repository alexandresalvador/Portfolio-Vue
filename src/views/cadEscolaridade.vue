<template>
    <div class="about">
      <div class="about-about" style="padding: 40px">
        <header>
          <h1>Cadastre uma nova escolaridade:</h1>
        </header>

        <div class="label"></div>
        <FormEscola />
        <router-link
                class="btn btn-dark"
                to="educacao"
              >
                Voltar
        </router-link>
      </div>
    </div>
</template>


<script>
import FormEscola from "@/components/FormEscola.vue";
export default {
  name: "cadEscolaridade",
  components: {
    FormEscola,
  },
};
</script>


<style scoped>


</style>
