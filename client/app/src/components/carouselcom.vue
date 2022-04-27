<template>
<div id="carouselExampleInterval" class="carousel slide " data-bs-ride="carousel">

<div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
    
  </div>

  <div class="carousel-inner carousel-fade ">
    <div class="carousel-item active" data-bs-interval="2000">
      <img src="../assets/ghadacarousell.png" class=" d-block   " style="width:100%;height:500px" alt="...">
      <div class="carousel-caption  d-none d-md-block  ">
        <h3 class="text-start">GHADA GHALLEB</h3>
        <p class="text-start" >étudiante en première année cycle ingénieur à l’Ecole
                <br> Supérieure Privée des Technologies d’Information 
                et de Management de nabeul.</p>
        <div class="text-start">
            <a href="https://www.linkedin.com/in/ghada-ghalleb-62b2b4223/" class="btn btn-sm  btn-primary text-start" >
        linkedin </a>
        </div>
    </div>
      </div>
    <div class="carousel-item" data-bs-interval="2000">
      <img src="../assets/nourcarousell.png" class="d-block  " style="width:100%;height:500px" alt="...">
      <div class="carousel-caption d-none d-md-block">
        <h3 class="text-start">NOUR AFFES</h3>
        <p class="text-start">étudiante en première année cycle ingénieur à l’Ecole
                <br> Supérieure Privée des Technologies d’Information 
               et de Management de nabeul .</p>
        <div class="text-start">
          <a href="https://www.linkedin.com/in/nour-affes-104009216/" class="btn btn-sm  btn-primary text-start" >linkedin </a>
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

.h3{
  font-size: 20px;
  font-weight: bold;
  margin: 10px 0 5px 0;
  color: #fff;
}

.p {
  font-style: italic;
  margin: 0 auto 15px auto;
  color: #eee;
}


.img{
opacity:1;
 filter:alpha(opacity=100);  /* For IE8 and earlier  */
}

.Bottom-bar{
  margin-bottom: 10px;
}


.btn-primary{
  padding: 3px 50px;
  margin-top: 10px;
  margin-left: 10px;
  color:rgb(255, 255, 255);
  border:none;
  margin-bottom: 40px;
  outline:none;
  font-size: 15px;  
  font-family: 'Playfair Display', serif;
  cursor: pointer;
  border-radius: 1rem;

}

.btn-primary:hover{
background-color: rgb(255, 255, 255);
border: 1px solid rgb(35, 35, 36);
border-radius: 1rem;
color: rgb(8, 8, 8);
}
.carousel-caption {
    top: 30%;
    bottom: auto;
} 

</style> 