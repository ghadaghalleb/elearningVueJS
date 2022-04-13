<template>
<div>
<div class="comm"  > 
  <h1 class="text-center" >Provenant de la communauté Coursera </h1>
    <div class="d-flex justify-content-center">

      <div>
        <img src="../assets/ghada.jpg" width="250" class="m-4" alt="" />
        <h2 class="text-center">GHADA GHALLEB</h2>
        <h6 class="text-center">Ghadaghalleb07@gmail.com</h6>
      
      </div>

      <div>
        <img
          src="../assets/nour.jpg" width="240" class="m-4" alt="" />
        <h2 class="text-center">NOUR AFFES</h2>
        <h6 class="text-center">Nouraffes000@itbs.tn</h6>
      
      </div>

    </div>
</div>
</div>
</template>

<script>
export default {
  name: 'Comm-unity',
  props: {
    msg: String
  }
}
</script>

<style>

.h2,h2 {
  font-family: "Source Sans Pro", Arial, sans-serif;
  line-height: 26px;
  font-weight: 300;
  color: rgb(56, 45, 139);
  font-size: 1.5rem;
}


.comm{
    margin-top: 200px;
}
</style>