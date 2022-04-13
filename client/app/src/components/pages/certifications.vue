<template>
<div>
    <navbar />
    <certif1 /> 
    <certif2 /> 
    <certif3 />
    <certif4 />
    <certif5 />
    <Footer />
</div>

</template>


<script>

import navbar from '../navbar.vue'
import certif1 from '../certif1.vue'
import Certif2 from '../certif2.vue'
import Certif3 from '../certif3.vue'
import Certif4 from '../certif4.vue'
import Certif5 from '../certif5.vue'
import Footer from '../Footer.vue'





 export default {
   name: 'App',
  components:
   {
       navbar,
       certif1,
      Certif2,
      Certif3,
      Certif4,
      Certif5,
      Footer
      
   }
 }

</script>