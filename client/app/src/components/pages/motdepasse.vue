<template>
<div>
    <navbar/>
    <motdepasse/>

</div>

</template>


<script>

import Motdepasse from '../motdepasse.vue'
import navbar from '../navbar.vue'

export default {
   name: 'App',
  components:
   {
    
    navbar,
      Motdepasse
   }
 }

</script>