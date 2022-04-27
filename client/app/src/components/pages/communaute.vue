<template>
<div>
  <navbar/>
  <carouselcom/>
  <contactmes/>

  <Footer/> 

 

</div>

</template>


<script>


import navbar from '../navbar.vue'
import carouselcom from '../carouselcom.vue'
import Contactmes from '../contactmes.vue'
import Footer from '../Footer.vue'


export default {
   name: 'App',
  components:
   {
     carouselcom,
      navbar,
      Contactmes,
      Footer  
   }
 }

</script>