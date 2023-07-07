<template>
  
   
<div> 
    <u>
    <h1>Education</h1>
</u>
</div>
<div class="container">
    <div class="row justify-content-center gap-5 p-5" v-for="education in education" :key="education.Id">
    <div class="card" style="width: 16rem;">
        <div class="card-body">
          <h5 class="card-title">{{education.Year}}</h5> 
          <p class="card-text">{{education.Content}}</p>
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
       },
       
       
    
       
    }
</script>

<style scoped>

.card-text{
    
    font-size:20px;
    
}

 

.card{
    box-shadow:10px 5px 5px #FF6700
}

.container{
    display:flex !important;
    flex-direction: row !important;
}

@media only screen and (max-width: 800px){
    .container{
        display: flex !important;
        flex-direction: column !important;
        width: auto;
    } 

    
}

</style>