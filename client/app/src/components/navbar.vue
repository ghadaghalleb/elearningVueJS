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
                  <a class="nav-link" href="#actualités">Actualités<span class="sr-only">(current)</span></a>
                </li>
              <li class="nav-item">
                <a class="nav-link" href="#cours">Cours</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#certifications">Certifications</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#communauté">Communauté  </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#avis">Avis</a>
              </li>
             
            </ul>
          </div>
        
        </nav>
      </ul>


      <form class=" p-2">
        <button class="btn btn1-sm btn-outline-pimary" href="#login" type="submit">login </button>         
      </form>
       
      <button class="btn btn-sm btn-outline-primary btn-primary" href="#login" type="submit">
           Inscrivez-Vous <br>
            Gratuitement 
      </button>

     

           
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
    font-weight: 700;
    color: rgba(0,0,0,.7);
}



.navbar {
  background-color: #ffffff;
    padding-top: .1rem;
    padding-bottom: .1rem;
}

.btn.btn1-sm.btn-outline-primary {
 background-color: blue;
  color: #000670;
  border-color: #00047a;
  display: inline-block;
  font-weight: 500;
  padding: .25rem .8rem;
  line-height: 1;
  border-radius: 1.2rem;
}

.btn-outline-primary{

  color: #ffffff;
  border-color: blue;
  display: inline-block;
  font-weight: 500;
  padding: .25rem .8rem;
  line-height: 1;
  border-radius: 1.2rem;

}


.nav-link {
    display: block;
    padding: 15px

}

.btn-outline-primary:hover{
background-color: white;
border: 1px solid blue;
border-radius: 1.2rem;
color: blue;
}

.form-control{
border-radius: 1.2rem;

}

</style>

