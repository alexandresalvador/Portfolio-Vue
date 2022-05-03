<template>
 <div class="d-flex">
    <div v-if="exibirTrabalhos" class="card mb-5 mr-1" >
      <img :src="trabalho.photo" class="card-img-top" />
      <div class="card-body d-flex flex-column justify-content-evenly">
        <h5 class="card-title">
          {{ trabalho.name }}
        </h5>
        <p class="card-text">
          {{ trabalho.description }}
        </p>
        <div class="row justify-content-between">
          <div class="col-5">
            <a class="btn btn-primary">
              @onclick
            </a>
          </div>
        </div>
      </div>
    </div>
    

    
  </div>
    

</template>

<script>
export default {
  name: "Card",
  props: {
    trabalho: {
      type: Object,
      required: true,
    },
  },
  computed: {
    exibirTrabalhos() {
      return (
        this.$route.name === "Jobs" 
      );
    },

  },
  methods: {

  },
};
</script>

<style scoped>

img {
  max-height: 450px;
  min-height: 450px;
}
</style>