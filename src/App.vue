<template>
  
<NavBarComp/>
<main class="container-fluid">
<router-view />
</main>
<FooterComp/>
</template>

<script>

import NavBarComp from '@/components/NavbarComp.vue'
import FooterComp from '@/components/FooterComp.vue'

  export default {
    components:{
      NavBarComp,
      FooterComp,
      
    }
  }

</script>

<style>

</style>
