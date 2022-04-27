<template>
<div>
    <navbar/>
    <payement/>

</div>

</template>


<script>

import payement from '../payement.vue'
import navbar from '../navbar.vue'

export default {
   name: 'App',
  components:
   {
    
    navbar,
      payement
   }
 }

</script>