<template>
<div>
<h1 class="text-dark text-center mt-5">RESPONSABLE FILIERE</h1>
    <div class="Bottom-bar"></div>

    <div class="d-flex justify-content-center mt-3">
      <div>
        <img src="../assets/1.jpg" width="250" class="m-3" alt="" />
        <p class="text-center">M.Hamza Youssef</p>
        <p class="text-center">hamza.youssef@itbs.tn</p>
        <p class="text-center">+216 54 593 418</p>
      </div>
      <div>
        <img
          src="../assets/1.jpg"
          width="250"
          
          class="m-3"
          alt=""
        />
        <p class="text-center">M.Med Ali Sammoud</p>
        <p class="text-center">Mohamedali.sammoud@itbs.tn</p>
        <p class="text-center">+216 26 524 036</p>
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

.Bottom-bar {
  border-style: solid;
  border-bottom-width: 5px;
  border-color: rgb(255, 192, 0);
  width: 130px;
  margin: 0px auto;
}
</style>