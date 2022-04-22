<template>
<div>
    <navbar/>
    <conx/>

</div>

</template>


<script>

import conx from '../conx.vue'
import navbar from '../navbar.vue'

export default {
   name: 'App',
  components:
   {
    
    navbar,
    conx,
   }
 }

</script>