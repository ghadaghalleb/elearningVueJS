

<template>
  <section class="baniere" id="baniere">
    
      <div class="baniere-text">
        <h1>LEARN.</h1>
        <p>Le bon prof, au bon moment </p>
      </div>
      <div class="baniere_btn">
        <a href="#connexion"> <span></span> Démarrer</a>
        <!-- <a href="About"> <span></span> Savoir Plus </a> -->
      </div>
  </section>
</template>


<script>
export default {
  name: 'ho-me',
  props: {
    msg: String
  }
}
</script> 

<style>



*{
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  font-family: 'Poppins', sans-serif;
  scroll-behavior: smooth;
}


.baniere{
  background: linear-gradient(rgba(0, 0, 0, 0.5), #6a98bd), url(https://img.freepik.com/photos-gratuite/reunion-brainstorming-travail-equipe-nouveau-projet-demarrage-milieu-travail_2034-1617.jpg?w=1380) center/cover no-repeat;
  height: 100vh;
}



.baniere-text{
  text-align: center;
  color: #fff;
  padding-top: 300px;
}

.baniere-text h1{
  font-size: 130px;
  font-family: 'Lobster', cursive;
}

.baniere-text p{
  font-size: 20px;
  font-style: italic;
}

.baniere_btn{
  text-align: center;
  margin-top: 20px;
}

.baniere_btn a{
  width: 150px;
  text-decoration: none;
  display: inline-block;
  margin: 0 10px;
  padding: 12px 0;
  color: #fff;
  border: 1px solid #fff;
  position: relative;
  z-index: 1;
  transition: color 0.6s ease-in;
}
.baniere_btn a span{
    width: 0;
    height: 100%;
    background: #fff;
    position: absolute;
    top: 0;
    left: 0;
    z-index: -1;
    transition: 0.6s ease-in;
}
.baniere_btn a:hover span{
    width: 100%;
}

.baniere_btn a:hover{
    color: #000;
}
</style>

