<template>
<div>
  <navbar/>
  <community/>
  <!-- <avis/>  -->
  <contactmes/>

  <Footer/> 

 

</div>

</template>


<script>


import navbar from '../navbar.vue'
import Contactmes from '../contactmes.vue'
import Footer from '../Footer.vue'
import Community from '../Community.vue'
// import Avis from '../avis.vue'


export default {
   name: 'App',
  components:
   {
      navbar,
      Contactmes,
      Footer,
      Community
      // Avis  
   }
 }

</script>