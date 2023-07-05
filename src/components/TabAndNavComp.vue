<template>
    <div class="conatiner-fluid" >
      <div class="row" v-for="skill in skills" :key="skill.id">
         {{skills.Title }}
        {{ skills.Content }}
        </div>
       
    </div>
</template>

<script>
    export default {
        computed:{
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