<template>
<div>
  <navbar/>
  <communaute/>

</div>

</template>


<script>

import communaute from '../communaute.vue'
import navbar from '../navbar.vue'

export default {
   name: 'App',
  components:
   {
     communaute,
    navbar
      
   }
 }

</script>