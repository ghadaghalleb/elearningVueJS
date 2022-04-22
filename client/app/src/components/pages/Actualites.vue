<template>
<div>
    <navbar />
  
  <Footer />
</div>

</template>


<script>



import navbar from '../navbar.vue'
import Footer from '../Footer.vue'



 export default {
   name: 'App',
  components:
   {
     navbar,
     Footer
      
   }
 }

</script>
