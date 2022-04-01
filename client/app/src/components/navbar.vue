<template>
  <nav class="navbar navbar-expand-lg fixed-top navbar-light  "     >


  <div class="container-fluid">
    <a class="navbar-brand" href="#">nom de notre site </a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">

        <!-- hedhy ll drop down mta3 explorer  -->
        <li class="nav-item dropdown  ">
          <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Explorer 
          </a>
          <ul class="dropdown-menu" aria-labelledby="navbarDropdown">    
           <li><a class="dropdown-item" href="#">Matieres </a></li>
           <li><a class="dropdown-item" href="#">Actualites </a></li>
           <li><a class="dropdown-item" href="#">Certifications</a></li>           
          </ul>
        </li>
        <!-- toufa hne ll dropdown mta3 ll explorer --> 
        </ul>

     
       
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <!-- hedhy ll drop down mta3 explorer  -->
        <li class="nav-item dropdown  ">
          <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            ressources 
          </a>
          <ul class="dropdown-menu" aria-labelledby="navbarDropdown">    
           <li><a class="dropdown-item" href="#">notre equipe</a></li>
           <li><a class="dropdown-item" href="#">avis</a></li>
           
          </ul>
        </li> 

        <form class="d-flex p-2">
        <input class=" form-control  me-2" type="search" placeholder="Search" aria-label="Search">
        <button class="btn btn-sm btn-outline-primary  btn-primary" type="submit">Search</button>
      </form>
        </ul>

        
        </div>

 
 


      <form class=" p-2">
        <button class="btn btn1-sm btn-outline-pimary " type="submit">login </button>        
        
      </form>
       
      <button class="btn btn-sm btn-outline-primary btn-primary" type="submit">
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


.dropdown-menu.show {
  width: 300px;
  display: block;
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

