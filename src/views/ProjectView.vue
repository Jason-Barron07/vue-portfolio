<template>
    <div class="container">
      <CardComp />
    </div>
</template>

<script>

import CardComp from '@/components/CardComp.vue'
export default {
     components:{
      CardComp
     }
    }

</script>

<style  scoped>
*{
  background: rgb(255,51,129);
background: linear-gradient(90deg, rgba(255,51,129,1) 35%, rgba(255,103,0,1) 100%);
  margin-bottom: 30px;
  border-radius:0.5em;
}

</style>