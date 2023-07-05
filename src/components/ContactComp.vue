<template>
    <div class="container">
        <div class="row ">
    <div class="col-md-8 p-5">
        <h2>Get In Touch</h2>
        <form class="row g-3 contactForm mt-4" action="https://formspree.io/f/xdoronvn" method="POST">
          <div class="col-md-6">
            <label for="fname" class="form-label">First Name</label>
            <input type="text" class="form-control" id="fname" name="fname">
          </div>
          <div class="col-md-6">
            <label for="lname" class="form-label">Last Name</label>
            <input type="text" class="form-control" id="lname" name="lname">
          </div>
          <div class="col-12">
            <label for="inputAddress" class="form-label">Subject</label>
            <input type="text" class="form-control" id="inputAddress">
          </div>
          <div class="col-12">
            <label for="inputAddress2" class="form-label">Email</label>
            <input type="text" class="form-control" id="inputAddress2" >
          </div>
          <div class="col-md-6">
            <label for="inputCity" class="form-label">City</label>
            <input type="text" class="form-control" id="inputCity">
          </div>
          <div class="col-md-6">
            <label for="inputCity" class="form-label">Contact Number</label>
            <input type="text" class="form-control" id="inputCity">
          </div>
          <div class="col-12">
            <button type="submit" class="btn btn-primary" value="Submit">Submit</button>
          </div>
        </form>
      </div>
      </div>
      </div>

      <br/>
      
</template>

<script>
    export default {
        
    }
</script>

<style scoped>

.row{
    background: linear-gradient(90deg, rgba(255,51,129,1) 35%, rgba(255,103,0,1) 100%);
    border-radius:0.5em;
}

.container .row{
    display:flex;
    justify-content: center;
    align-items: center;
    color:#fff;
}


</style>