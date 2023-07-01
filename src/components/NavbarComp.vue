<template>
    <div>
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
        <div class="container-fluid">
          <routerlink class="navbar-brand" to="/">Navbar</routerlink>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNavDropdown">
            <ul class="navbar-nav">
              <li class="nav-item">
                <routerlink to="/">Home</routerlink>
              </li>
              <li class="nav-item">
                <routerlink  to="/about">About</routerlink>
              </li>
              <li class="nav-item">
                <routerlink  to="/testimonials">Tesimonials</routerlink>
              </li>
              <li class="nav-item">
                <routerlink class="nav-link" to="/projects">Projects</routerlink>
              </li>
              <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Resume
                </a>
                <ul class="dropdown-menu">
                  <li><router-link >Skills</router-link></li>
                  <li><router-link >Education</router-link></li>
                  <li><router-link >Work Experience</router-link></li>
                </ul>


              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style scoped>

</style>