<template>
  <br/>
    <div class="container">
        <div class="row justify-content-center gap-5">
        <div class="card" v-for="testimonial in testimonials" style="width: 16rem;" :key="testimonial.id">
        <div class="profile">
            <img :src="testimonial.URL" id="img" class="card-img-top" :alt="testimonials.Title" loading="lazy">
        </div>
            <div class="card-body">
                <h4 class="card-head">
                    {{ testimonials.Title }}
                </h4>
                <p class="card-text">
                    {{ testimonial.Content }}
                </p>
            </div>
            </div>
        </div>
    </div>
    <br/>
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