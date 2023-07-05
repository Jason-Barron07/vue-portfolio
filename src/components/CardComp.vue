<template>
    <br/>
    <div class="container">
        <div class="row justify-content-center gap-5">
            <div class="card p-0" v-for="projects in projects" style="width: 15rem;" :key="projects.id">
                <img :src="projects.Image" id="img" class="card-img-top" :alt="projects.Title" loading="lazy">
                <div class="card-body">
                    <h5 class="card-head">
                        {{projects.Title}}
                    </h5>
                    <a :href="projects.URL" target="_blank"><button class="btn">Go live</button></a>
                  </div>
                </div>
            </div>
        </div>

        <br/>
        
</template>

<script>
    export default {
        computed:{
            projects(){
                return this.$store.state.projects
            }
        },
        mounted(){
            this.$store.dispatch('fetchProjects')
        }
    }
</script>

<style scoped>
button{
    color:#fff;
    background-color:#FF3381;
    border:solid 2px #FF6700;
    border-radius: 0.5em;
}
</style>