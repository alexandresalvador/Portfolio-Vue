<template>
  <form>
    <div class="form-group">
      <label for="exampleFormControlInput1">Trabalho: </label>
      <input
        type="text"
        class="form-control"
        id="exampleFormControlInput1"
        v-model="trabalho"
        placeholder="Insira o nome do seu trabalho"
      />
    </div>
    <div class="form-group col-md-6">
      <label for="exampleFormControlTextarea1">Descrição: </label>
      <textarea
        class="form-control"
        id="exampleFormControlTextarea1"
        rows="3"
        v-model="descricao"
        placeholder="Sua descrição"
      ></textarea>
    </div>
    <div class="form-group">
      <div class="mb-3">
        <label for="formFile" class="form-label" 
          >Escolha uma foto</label
        >
        <input 
        class="form-control" 
        type="file" accept="image/" 
        id="formFile"
        />
      </div>
    </div>

    <div class="row justify-content-center">
      <div class="col-8 d-flex justify-content-between">
        <button
          @click="click"
          id="salvar"
          type="button"
          class="btn btn-primary"
        >
          <a class="text-light text-decoration-none" href="/trabalho">Salvar</a>
        </button>
        <button type="button" class="btn btn-secondary" @click="limpaForm">
          Cancelar
        </button>
      </div>
    </div>
    <div class="row justify-content-center mt-4">
      <div class="col-8">
        <p>Trabalho: {{ trabalho }}</p>
        <p>Descrição: {{ descricao }}</p>
      </div>
    </div>
  </form>
</template>

<script>
export default {
  name: "form2",
  data() {
      
    return {
      trabalho: "",
      descricao: "",
      //photo: null,
    };
  },
  methods: {
    salvaLocal() {
      // pegando os dados que o usuário inseriu no form...
      const data = {
        trabalho: this.trabalho,
        descricao: this.descricao,
      };
      // tratar o meu dado para salvar no localstorage....
      JSON.stringify(data);
      // preciso fazer o PARSER dos meus dados....
      localStorage.setItem("data", data);
      // salvar no meu localStorage...
      console.log("enviar dados");
      // redirecionar o usuãrio para a tela de education
      // this.$router("/EducationView");
    },

    salvaDados() {
      let dadosdoTrabalho = new Array();
      if (localStorage.hasOwnProperty("dadosdoTrabalho")) {
        dadosdoTrabalho = JSON.parse(localStorage.getItem("dadosdoTrabalho"));
      }
      const dadosSalvar = {
        id: Math.floor(Math.random() * 1000),
        trabalho: this.trabalho,
        descricao: this.descricao,
      };
      dadosdoTrabalho.push(dadosSalvar);
      localStorage.setItem("dadosdoTrabalho", JSON.stringify(dadosdoTrabalho));
    },

    limpaForm() {
      trabalho: this.trabalho = "";
      descricao: this.descricao = "";
    },
    click() {
      this.salvaDados();
      this.limpaForm();
    },
  },
};
</script>

<style scoped>
.form-group {
  padding: 10px;
}
</style>