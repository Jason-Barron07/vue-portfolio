<template>

    <div>
        <h1>
            <u>Skills</u>
        </h1>
    </div>

    <div class="container ">
        <div class="row justify-content-center gap-5">
        <div class="card animate__animated animate__backInUp " v-for="skill in skills" style="width: 20rem;" :key="skill.Id">
        <div class="profile">
            <img :src="skill.Image" id="img" class="card-img-top" :alt="skill.Title" loading="lazy">
        </div>
            <div class="card-body">
                <h4 class="card-head">
                    {{ skill.Title }}
                </h4>
                <p class="card-text">
                    {{ skill.Content}}
                </p>
            </div>
            </div>
        </div>
    </div>
    <br/>
    
</template>

<script>
    export default {
        computed: {
            skills(){
                return this.$store.state.skills
            }
        },
         mounted(){
                this.$store.dispatch('fetchSkills')
            }
        
    }
</script>

<style scoped>



</style>