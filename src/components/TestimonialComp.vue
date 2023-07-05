<template>
    <div class="container-fluid">
        <div class="col-2 d-flex justify-content-space-between" v-for="testimonial in testimonials" :key="testimonial.id">

        <div class="card" style="width: 10rem;">
            <img :src="testimonial.URL" class="card-img-top " :alt="testimonial.Title">
            <div class="card-body">
              <p class="card-text"> {{testimonial.Title}} {{testimonial.Content}}</p>
            </div>
          </div>
         </div>
    </div>
</template>

<script>
    export default {
        computed:{
            testimonials(){
                return this.$store.state.testimonials
            }
        },
        mounted(){
            this.$store.dispatch('fetchTestimonial')
        }
    }
</script>

<style scoped>



</style>