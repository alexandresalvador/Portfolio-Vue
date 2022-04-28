<template>
  <form>
    <div class="form-group">
      <label for="exampleFormControlInput1">Nome: </label>
      <input
        type="text"
        class="form-control"
        id="exampleFormControlInput1"
        placeholder="Insira seu nome completo"
      />
    </div>
    <div class="form-group">
      <label for="exampleFormControlInput1">Email: </label>
      <input
        type="email"
        class="form-control"
        id="exampleFormControlInput1"
        placeholder="name@example.com"
      />
    </div>
    <div class="form-group">
      <textarea
        class="form-control"
        id="exampleFormControlTextarea1"
        rows="3"
        placeholder="Sua mensagem"
      ></textarea>
    </div>
    <button type="button" class="btn btn-success">Enviar</button>
  </form>
</template>

<script>
export default {
  name: "form",
};
</script>

<style scoped>
.form-group {
  padding: 10px;
}
</style>