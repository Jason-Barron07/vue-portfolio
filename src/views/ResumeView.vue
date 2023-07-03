<template>
    <div class="container">
        <div class="row" v-for="testimonial in testimonials" :key="testimonial.id">
            <img :src="testimonial.URL" :alt="testimonial.Title">
            <p>{{testimonial.Title}}</p>
            <p>{{testimonial.Content}}</p>
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