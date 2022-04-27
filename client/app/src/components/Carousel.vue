<template>

<div id="carouselExampleInterval" class="carousel slide " data-bs-ride="carousel">

<div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>

  <div class="carousel-inner carousel-fade ">
    <div class="carousel-item active" data-bs-interval="2000">
      <img src="../assets/2.jpg" class=" d-block   " style="width:100%;height:600px" alt="...">
      
      

      <div class="carousel-caption  d-none d-md-block  ">

        <h2 class="text-start">Le Digital Learning : cet ado qu’on adore !</h2>
        <h3 class="text-start" >Le Digital Learning a tout pour lui, il est plein de promesses, mais il lui reste encore beaucoup de défis à relever ! Il a bien grandi ces dix dernières années : de Powerpoint 97 à l’intégration d’algorithmes d’IA, il se trouve à présent aux portes du...</h3>
        <div class="text-start">
        <button class="btn btn-sm  btn-primary text-start" type="submit"> SUITE  </button>
        </div>
    

    </div>
      </div>
    <div class="carousel-item" data-bs-interval="2000">
      <img src="../assets/2.jpg" class="d-block  " style="width:100%;height:600px" alt="...">
      <div class="carousel-caption d-none d-md-block">
        <h2 class="text-start">L'art 3D simplifié : dessiner et peindre avec Procreate 5</h2>
        <h3 class="text-start">Explore a groundbreaking new toolset with digital artist and Procreate expert Stéphane Bourez.</h3>
        <div class="text-start">
        <button class="btn btn-sm  btn-primary text-start" type="submit"> Regardez  </button>
        </div>      </div>
    </div>
    <div class="carousel-item" data-bs-interval="2000">
      <img src="../assets/3.jpg" class="d-block"  style="width:100%;height:600px" alt="...">
      <div class="carousel-caption d-none d-md-block">
        <h2 class="text-start">L'art 3D simplifié : dessiner et peindre avec Procreate 5</h2>
        <h3 class="text-start">Explore a groundbreaking new toolset with digital artist and Procreate expert Stéphane Bourez.</h3>
        <div class="text-start">
        <button class="btn btn-sm  btn-primary text-start" type="submit"> Regardez  </button>
        </div>
              </div>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>



</template>





<script>
export default {
  name: 'carou-seL',
  props: {
    msg: String
  }
}
</script>

<style scoped>
.h1,h1{
  padding-left: 70px;

}

.img{
opacity:1;
filter:alpha(opacity=100); /* For IE8 and earlier */
}

.Bottom-bar{
  margin-bottom: 10px;
}


.btn-primary{
  padding: 3px 50px;
  margin-top: 20px;
  margin-left: 10px;
  color:rgb(255, 255, 255);
  border:none;
  margin-bottom: 40px;
  outline:none;
  font-size: 20px;  
  font-family: 'Playfair Display', serif;
  cursor: pointer;
  border-radius: 1.2rem;

}

.btn-primary:hover{
background-color: rgb(255, 255, 255);
border: 1px solid blue;
border-radius: 1.2rem;
color: blue;
}
.carousel-caption {
    top: 30%;
    bottom: auto;
}

</style> 