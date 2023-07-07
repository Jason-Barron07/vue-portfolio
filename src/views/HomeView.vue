<!-- <template>
    <HomeImage/>
  
</template>

<script>
import HomeImage from '@/components/HomeComp.vue'

export default {
  components:{
    HomeImage
  }
}
</script> -->
<template>
  <div class="landing-2">
    <div class="landing">
      <h1 class="animate__animated animate__fadeInDown animate__delay-1s 1s">
        My name is Jason Barron
      </h1>
      <p class="animate__animated animate__fadeInDown animate__delay-2s 2s">
        I am an Aspiring software Developer 
       
      </p>
      <div class="animate__animated animate__bounceIn animate__delay-3s 3s">
        <router-link class="Abtn" to="/about"
          ><button class="Abtn">Read More</button></router-link
        >
      </div>
    </div>
  </div>
</template>
<script>
export default {};
</script>
<style scoped>
p {
  font-size: x-large;
  color:#fff;
  background-color:#FF6700;
}
.Abtn:hover {
  background-color:#FF6700 ;
  border: 1px solid #FF3381;
}
h1 {
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 32px;
  color:#fff;
  background-color:#FF3381;
  border-radius:0.5em;
}
p {
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 30px;
  border-radius:0.5em;
  
  
}
.Abtn {
  background-color:#FF3381 ;
  border: #FF6700;
  border-radius: 5px;
  height: 3rem;
  color:#fff;
}
.landing {
  height: 61vh;
  border-radius: 5px;
  
}
.landing-2{
  margin-top: 2rem;
  margin-bottom: 2rem;
}

</style>
