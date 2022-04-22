<template>
<div>
    <navbar />
    <cours />
    <cours1/> 
    <cours2/> 
    <cours3/>
    <Footer />
</div>

</template>


<script>

import cours from '../cours.vue'
import cours1 from '../cours1.vue'
import cours2 from '../cours2.vue'
import cours3 from '../cours3.vue'
import navbar from '../navbar.vue'
import Footer from '../Footer.vue'




 export default {
   name: 'App',
  components:
   {
       navbar,
       cours,
       cours1,
       cours2,
       cours3,
       Footer
      
   }
 }

</script>