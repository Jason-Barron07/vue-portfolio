<template>

      <nav class="navbar">
        <div class="container-fluid">
          <a class="navbar-brand" href="#">
            <img
              src="https://i.postimg.cc/sgYMcTBf/Screenshot-2023-07-03-115606.png"
              id="logo"
          /></a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasNavbar"
            aria-controls="offcanvasNavbar"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div
            class="offcanvas offcanvas-end"
            tabindex="-1"
            id="offcanvasNavbar"
            aria-labelledby="offcanvasNavbarLabel"
          >
            <div class="offcanvas-header">
              <a class="offcanvas-title" id="offcanvasNavbarLabel"><img src="https://i.postimg.cc/sgYMcTBf/Screenshot-2023-07-03-115606.png" alt="logo"></a>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="offcanvas"
                aria-label="Close"
              ></button>
            </div>
            <div class="offcanvas-body">
              <ul class="navbar-nav">
                <li class="nav-item" data-bs-dismiss="offcanvas">
                  <router-link class="nav-link" to="/">Home</router-link>
                </li>
                <li class="nav-item" data-bs-dismiss="offcanvas">
                  <router-link class="nav-link" to="/about">About</router-link>
                </li>
                <li class="nav-item" data-bs-dismiss="offcanvas">
                  <router-link class="nav-link" to="/projects"
                    >Projects</router-link
                  >
                </li>
                <li class="nav-item" data-bs-dismiss="offcanvas">
                  <router-link class="nav-link" to="/resume">Resume</router-link>
                </li>
                <li class="nav-item" data-bs-dismiss="offcanvas">
                  <router-link class="nav-link" to="/testimonial"
                    >Testimonials</router-link
                  >
                </li>
                <li class="nav-item" data-bs-dismiss="offcanvas">
                  <router-link class="nav-link" to="/contact"
                    >Contact</router-link
                  >
                </li>
              </ul>
            </div>
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