<template>
<div>
    <navbar />
    <cardspay/>
    <Footer />
</div>

</template>


<script>



import navbar from '../navbar.vue'
import Footer from '../Footer.vue'
import cardspay from '../cardspay.vue'



 export default {
   name: 'App',
  components:
   {
     navbar,
     Footer,
      cardspay
      
   }
 }

</script>
