<template>
<div>
    <navbar/>
    <inscrit/>

</div>

</template>


<script>

import inscrit from '../inscrit.vue'
import navbar from '../navbar.vue'

export default {
   name: 'App',
  components:
   {
    
    navbar,
    inscrit
   }
 }

</script>