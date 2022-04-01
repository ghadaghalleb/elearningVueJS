<template>
  <div class="d-flex" >

<div class="header">
 <h1>Apprenez sans limites</h1>
    <h2>Développez de nouvelles compétences pour ce sentiment <br> "c'est mon année" avec des cours,
    des certificats et des diplômes d'universités <br> et d'entreprises de classe mondiale.</h2>

       <div class="d-flex justify-content-center">
    <button class="btn btn-sm  btn-primary " type="submit">login </button>              
     <button class="btn btn-sm  btn-primary" type="submit"> Inscrivez-Vous Gratuitement </button>
     
</div>

   </div >


<div>
  <img src="https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://images.ctfassets.net/wp1lcwdav1p1/6JVJEaAT8FWwiBfVl1vECY/f5c7eb90291561ae112d6c302c8fd16c/NYCampaign_HeaderImage_Paulina_918x992.png?auto=format%2Ccompress&dpr=1&w=459&h=497&q=40" class="mt-5" alt="">
</div>
   

  </div>

</template>



<script>
export default {
  name: 'log-in',
  props: {
    msg: String
  }
}
</script> 

<style scoped>


.header{
    flex-direction: column;
    background-color: rgb(255, 255, 255);
    background-size: cover;
    color: rgb(0, 0, 0);
    padding: 100px;
    padding-left: 20px;
    padding-top:  20px;
}
.header h1{
    font-family: 'Playfair Display', serif;
    font-size: 90px;
    margin-top: 100px;
    margin-left: 200px;
}
.header h2{
    margin-top: 20px;
    margin-left: 200px;
    font-size: 20px;
    border-bottom: 2px solid #fff;
}
.header button{
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
.header button:hover{
background-color: rgb(255, 255, 255);
border: 1px solid blue;
border-radius: 1.2rem;
color: blue;
}

img, svg {
    max-width: 459px;
    max-height: 497px;
    margin-left: auto;
    margin-right: auto;
    width: 100%;
    padding-right: 70px;
    padding-top: 70px;

}



</style>