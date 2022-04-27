<template>
  <nav class="navbar navbar-expand-lg fixed-top navbar-light  "  >


  <div class="container-fluid">
    
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav  me-auto mb-2 mb-lg-0 ">
        <nav class="navbar navbar-expand-lg  ">
          <a class="navbar-brand" href="#">LEARN.</a>
           <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
           </button>
           
           <div class="col-xs-11 text-right menu-1">
           <ul class="navbar-nav">
                <li class="nav-item active">
                  <a class="nav-link" href="#Actualites">Actualités<span class="sr-only">(current)</span></a>
                </li>
              <li class="nav-item">
                <a class="nav-link" href="#cours">Cours</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#certifications">Certifications</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#communaute">Communauté  </a>
              </li>
 
            </ul>
          </div>
        
        </nav>
      </ul>


      <form class=" p-2">
       <router-link to="/connexion" class="router">  
        <div button class="btn btn1-sm " href="#connexion" type="submit"> login  </div>
        </router-link>    
      </form>
       
 
           
    </div>
  </div>

   
</nav>

</template>


<script>
export default {
  name: 'nav-bar',
  props: {
    msg: String
  }
}


</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->




<style scoped>

.nav-link:hover {
    font-weight: 900;
    color: rgb(255, 255, 255);
}


.navbar {
   background-color:none ;
    padding-top: .1rem;
    padding-bottom: .1rem;
}

.btn.btn1-sm{
 background-color: #ffffff;
  color: #0a0a0a;
  border:white;
  display: inline-block;
  font-weight: 700;
  padding: .5rem .8rem;
  line-height: 1;
  border-radius: 1.2rem;
}


.nav-link {
    display: block;
    padding: 15px

}


.form-control{
border-radius: 1.2rem;

}

</style>

