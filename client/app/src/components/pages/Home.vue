<template>
<div>

  <navbar />
  <home/> 
  <About/>
  <classes />
  <registre/>
  <Cards />
  <!-- <Collab/>
  -->
  <Community/>
 <chatbot/> 
  <Footer />
 </div>

</template>


<script>

import home from '../home.vue'
// import Collab from '../Collab.vue'
import navbar from '../navbar.vue'
import Cards from '../Cards.vue'
import classes from '../classes.vue'
import Community from '../Community.vue'
import About from '../About.vue'
import Footer from '../Footer.vue'
import Registre from '../registre.vue'
import chatbot from '../chatbot.vue'




 export default {
   name: 'App',
  components:
   {
     navbar,
    //  Collab,
     home,
     About,
     chatbot,
     Cards,
     classes,

     Community,
     Footer,
      Registre
      
   }
 }

</script>


