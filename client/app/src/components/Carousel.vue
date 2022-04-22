<template>

<div id="carouselExampleInterval" class="carousel slide " data-bs-ride="carousel">

<div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>

  <div class="carousel-inner carousel-fade ">
    <div class="carousel-item active" data-bs-interval="2000">
      <img src="data:image/png;base64,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" class=" d-block   " style="width:100%;height:600px" alt="...">
      
      

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