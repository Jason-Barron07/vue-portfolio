<template>
    <div class="container ">
        <div class="row justify-content-center gap-5">
        <div class="card animate__animated animate__backInUp " v-for="skills in skills" style="width: 16rem;" :key="skills.Id">
        <div class="profile">
            <img :src="skills.Image" id="img" class="card-img-top" :alt="skills.Title" loading="lazy">
        </div>
            <div class="card-body">
                <h4 class="card-head">
                    {{ skills.Title }}
                </h4>
                <p class="card-text">
                    {{ skills.Content}}
                </p>
            </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        skills(){
            return this.$store.state.skills
        },

        mounted(){
            this.$store.dispatch('fetchSkills')
        }
    }
</script>

<style scoped>

</style>