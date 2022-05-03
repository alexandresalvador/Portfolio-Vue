<template>
  <form>
    <div class="form-group">
      <label for="exampleFormControlInput1">Escola: </label>
      <input
        type="text"
        class="form-control"
        id="exampleFormControlInput1"
        v-model="escola"
        placeholder="Insira seu nome completo"
      />
    </div>
    <div class="form-group col-md-6">
      <label for="inputNumber4">Período em anos: </label>
      <input
        type="number"
        class="form-control"
        id="inputNumber4"
        v-model="periodo"
        placeholder="Período"
        min="1"
        max="10"
      />
    </div>
    <div class="form-group">
      <label for="exampleFormControlSelect1">Status: </label>
      <select
        class="form-control"
        id="exampleFormControlSelect1"
        v-model="status"
        placeholder="Insira seu status"
      >
        <option>Concluido</option>
        <option>Incompleto</option>
        <option>Em andamento</option>
      </select>
    </div>

     <div class="row justify-content-center">
      <div class="col-8 d-flex justify-content-between">
        <button 
          @click="click"
          id="salvar"
          type="button" 
          class="btn btn-primary"> 
          <a class="text-light text-decoration-none" href="/educacao"
              >Salvar</a
            >
        </button>
        <button 
          type="button" 
          class="btn btn-secondary"
          @click="limpaForm">
          Cancelar
        </button>
      </div>
    </div>
    <div class="row justify-content-center mt-4">
      <div class="col-8">
        <p>Escola: {{ escola }}</p>
        <p>Período: {{ periodo }}</p>
        <p>Status: {{ status }}</p>
      </div>
    </div>
  </form>
</template>

<script>
export default {
  name: "form1",
  data() {
    return {
      escola: "",
      periodo: "",
      status: "",
    };
  },
  methods: {
    salvaLocal() {
      // pegando os dados que o usuário inseriu no form...
      const data = {
        escola: this.escola,
        periodo: this.periodo,
        status: this.status,
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
      let dadosEscolaridade = new Array();
      if (localStorage.hasOwnProperty("dadosEscolaridade")) {
        dadosEscolaridade = JSON.parse(localStorage.getItem("dadosEscolaridade"));
      }
      const dadosSalvar = {
        id: Math.floor(Math.random() * 1000),
        escola: this.escola,
        periodo: this.periodo,
        status: this.status,
      };
      dadosEscolaridade.push(dadosSalvar);
      localStorage.setItem("dadosEscolaridade", JSON.stringify(dadosEscolaridade));
    },

    limpaForm() {
       escola: this.escola= "";
       periodo: this.periodo= "";
       status: this.status= "";
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