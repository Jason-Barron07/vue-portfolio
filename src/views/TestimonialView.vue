<template>
    <div>
        <Testimonials/>
    </div>
</template>

<script>

import Testimonials from '@/components/TestimonialComp.vue'
    export default {
        components:{
            Testimonials
        }
    }
</script>

<style scoped>
*{
    background: rgb(255,51,129);
  background: linear-gradient(90deg, rgba(255,51,129,1) 35%, rgba(255,103,0,1) 100%);
    margin-bottom: 30px;
  }
</style>