<template>
  <div class="card">
    <nav class="navbar navbar-light" style="background-color: #DFE6ED; mb-2">
      <div class="container-fluid">
        <img
          class="card-img-top"
          src="https://avatars.githubusercontent.com/u/62520840?v=4"
          alt=""
          style="width: 10rem" 
        />
        <div class="card-body">
          <h1 class="card-title">Alexandre Salvador</h1>
          <p class="card-text">Estudante na Área de Sistemas</p>
        </div>

        <div>
          <ul class="list-group">
            <li class="list-group-item list-group-item-dark">
              <div class="contact-info">
                <p class="contact-title">Email:</p>
                <a href="" class="contact-link">alexandre.salvador01@gmail.com</a>
                <p></p>
                <p class="contact-title">Aniversário:</p>
                <a href="" class="contact-link">17/09</a>
              </div>
            </li>
          </ul>
        </div>
        <div>
          <ul class="list-group">
            <li class="list-group-item list-group-item-dark">
              <div class="contact-info">
                <p class="contact-title">Telefone:</p>
                <a href="" class="contact-link">(47)9 9195-2941</a>
                 <p></p>
                <p class="contact-title">Residência:</p>
                <a href="" class="contact-link">Joinville, SC</a>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  name: "navbar",
};
</script>


<style scoped>

.card-img-top{
 padding: 10px;
border-radius: 50%;
}
</style>
