<template>
  

    <nav class="navbar navbar-expand-lg ">
        <div class="container-fluid ">
          <router-link class="navbar-brand" to="/"><img src="https://i.postimg.cc/sgYMcTBf/Screenshot-2023-07-03-115606.png" alt=""></router-link>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav justify-content-center">
              <li class="nav-item ">
             <router-link to="/">Home</router-link>
              </li> 
              <li class="nav-item" id="nav-link">
                <router-link to="/about">About</router-link>
              </li> 
              <li class="nav-item " >
                <router-link to="/testimonial" >Testimonial</router-link>
              </li> 
              <li class="nav-item" id="nav-link">
               <router-link to="/projects">Projects</router-link>
              </li> 
              <li class="nav-item dropdown">
                <router-link to="/resume" class="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="#" role="button" aria-expanded="false">
                  Resume
                </router-link>
                <ul class="dropdown-menu">
                  <li><router-link to="/resume" class="dropdown-item" href="#">Skills</router-link></li>
                  <li><router-link to="/resume" class="dropdown-item" href="#">Education</router-link></li>
                </ul>
              </li>
               
               <li class="nav-item" id="nav-link">
                <router-link to="/contact" >Contact</router-link>
               </li> 
            </ul>
          </div>
        </div>
      </nav>



</template>

<script>
    export default {
        
    }
</script>

<style scoped>



#nav-link a{

  color:#FF6700;
}

a{
  color:#FF3381;
  text-decoration: none;
}

a:hover{
  color:#FF6700;
}

#nav-link a:hover{
  color:#FF3381;
}




.navbar-nav{
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2rem;
}

</style>