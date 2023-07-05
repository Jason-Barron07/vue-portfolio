<template>
    <div class="conatiner-fluid justify-content-center gap-5" >
        <div class="row " v-for="education in education" :key="education.Id">
        <div class="card ">
            <h4 class="display-4">{{education.Year}}</h4>
            <div class="card-body">
                <p>
                {{education.Content}}
                </p>
            </div>
        </div>
    </div>
    </div>

</template>

<script>
    export default {
        computed:{
            education(){
                return this.$store.state.education
            }
        },
        mounted(){
            this.$store.dispatch('fetchEducation')
        }
    }
</script>

<style scoped>
.container-fluid{
    width:10rem;
}
.card{
    background-color:#FF6700;
    width:10rem;
    padding:10px;
   
}
.row {
   width:300px;
    box-shadow: 10px 5px 5px #FF3381;
    border-radius:0.5em;
   
}
</style>