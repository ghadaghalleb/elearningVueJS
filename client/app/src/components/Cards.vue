<template>
<div>
<h1 class="text-dark mt-5">Certificats Professionnels </h1>
<h2 class="text-dark ">Soyez opérationnel pour une carrière convoitée </h2>
<h3 class="text-dark  ">Percez dans un nouveau secteur comme les technologies de l'information ou la science des données. Aucune expérience préalable n'est requise pour commencer.

</h3>  
    <div class="d-flex justify-content-around m-4" >   
      <div class="card" style="width: 18rem;"   >
  <img class="card-img-top"  src= '../assets/1.jpg' alt="Card image cap">
  <div class="card-body">
    <h5 class="card-title">Google UX <br> design </h5>
    <p class="card-text">google <br> Certificat Professionnel </p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
        </div>
  <!-- 2 -->

        <div class="card" style="width: 18rem;"   >
  <img class="card-img-top"  src= '../assets/1.jpg' alt="Card image cap">
  <div class="card-body">
    <h5 class="card-title">Meta Marketing <br> Analytics  </h5>
    <p class="card-text">Meta <br> Certificat Professionnel </p> 
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
        </div>

        <!-- 3 -->
        
                <div class="card" style="width: 18rem;"   >
  <img class="card-img-top"  src= '../assets/1.jpg' alt="Card image cap">
  <div class="card-body">
    <h5 class="card-title">IBM Data <br>Engineering  </h5>
     <p class="card-text">IBM <br> Certificat Professionnel </p>
     <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
        </div>

        <!-- 4 -->
        
                <div class="card" style="width: 18rem;"   >
  <img class="card-img-top"  src= '../assets/1.jpg' alt="Card image cap">
  <div class="card-body">
    <h5 class="card-title">Google Project Management  </h5>
    <p class="card-text">google <br> Certificat Professionnel </p>
     <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
        </div>

    </div>
    </div>
</template>





<script>
export default {
        name: 'CardsA',
  props: {
    msg: String
  }  
}
</script>

<style scoped>

.h1,h1 {
  padding-left: 70px;
}
.h2,h2 {
  padding-left: 70px;
  font-size: 1.5rem;

}
.h3,h3 {
   padding-left: 70px;
   font-size: 1rem;

}



</style>