<template>
    <div class="container-fluid animate__animated animate__shakeY">
        <div class="image">
        <img src="https://i.postimg.cc/vHD5qZ0D/1338355.webp" alt="landing page picture" >
        </div>
        <h1>I am an aspiring software developer</h1>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style scoped>

    img{
        max-width: 80%;
        box-shadow: 10px 5px 5px #FF6700;
    }

    @media screen and (max-width:800px){
        
         body{
            width: 100vh;
        
        }
        
        img{
            box-shadow:none;
            width: 400px;
        }

        .image img{
         
            width:100%
        }
    }

</style>