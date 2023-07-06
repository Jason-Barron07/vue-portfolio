<template>
    <!-- <div class="conatiner-fluid justify-content-center gap-5" >
        <div class="row" v-for="education in education" :key="education.Id">
        <div class="card ">
            <h4 class="display-4">{{education.Year}}</h4>
            <div class="card-body">
                <p>
                {{education.Content}}
                </p>
            </div>
        </div>
    </div>
    </div> -->
    |
<div class="container">
    <div class="row justify-content-center gap-5 p-4" v-for="education in education" :key="education.Id">
    <div class="card" style="width: 16rem;">
        <div class="card-body">
          <h5 class="card-title">{{education.Year}}</h5> 
          <p class="card-text">{{education.Content}}</p>
        </div>
      </div>
      
    </div>
    |

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

*{
    font-size: 20px;
    
}

.card{
    box-shadow:10px 5px 5px #FF6700
}

</style>