<template>
<div>
    <navbar />
  <login/> 

  <Cards />
  <Section />
  <Collab/>
  <Avis />
  <Community/>
  <Footer />
</div>

</template>


<script>

import login from '../login.vue'
import Collab from '../Collab.vue'
import navbar from '../navbar.vue'
// import Carousel from '../Carousel.vue'
import Cards from '../Cards.vue'
import Section from '../Section.vue'
import Avis from '../Avis.vue'
import Community from '../Community.vue'
import Footer from '../Footer.vue'



 export default {
   name: 'App',
  components:
   {
     navbar,
     Collab,
    //  Carousel,
     login,
     Cards,
     Section,
     Avis,
     Community,
     Footer,
      
   }
 }

</script>


