<template>
    <div >

     
 <div id="about"  class="about">
         <div class="container">
            <div class="row d_flex">
               <div class="col-md-7">
                  <div class="titlepage">
                     <h2>Google UX Design Certificate</h2>
                     <span></span>
                     <p>Lancez-vous dans le domaine en plein essor de la conception de l'expérience utilisateur (UX)  
                       <br> avec un certificat professionnel développé par Google. 
                       <br> Apprenez les bases de la conception UX, y compris l'empathie avec les utilisateurs, 
                       <br> la construction de structures filaires et de prototypes et
                       <br> la réalisation de recherches pour tester vos conceptions.</p>     
                       <a class="read_more" href="#Pay">Lire la suite<i class="fa fa-arrow-right" aria-hidden="true"></i></a>
                  </div>
               </div>
               <div class="col-md-5">
                  <div class="about_img">
                     <figure>
                       <img src="https://storage.googleapis.com/grow-with-goog-publish-prod-media/images/uxdesign.scale-100.png"
                      alt="#"/>
                      </figure>
                  </div>
               </div>
            </div>
         </div>
      </div>
    



    </div>


</template>




<script>
export default {
  name: 'cert-if',
  props: {
    msg: String
  }
}
</script> 

<style>

    
.about {
    background-color: rgb(255, 255, 255);
    background-repeat: no-repeat;
    background-size: 100% 100%;
    padding: 90px 0;
}

.container {
    width: 100%;
    padding-right: 15px;
    padding-left: 15px;
    margin-right: auto;
    margin-left: auto;
}
.container {
    max-width: 540px;
}
.container {
    max-width: 720px;
}
.container {
    max-width: 960px;
}
.container {
    max-width: 1140px;
}

.d_flex {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
}
.row {
    display: -ms-flexbox;
    display: flex;
    -ms-flex-wrap: wrap;
    flex-wrap: wrap;
    margin-right: -15px;
    margin-left: -15px;
}

.col-md-7 {
    -ms-flex: 0 0 58.333333%;
    flex: 0 0 58.333333%;
    max-width: 58.333333%;
}

.about .titlepage {
    text-align: left;
    padding: 0;
}

.titlepage {
    text-align: center;
    padding-bottom: 60px;
}

.titlepage span {
    background: rgb(30,144,255);
    display: block;
    height: 10px;
    width: 90px;
}

.about .titlepage p {
    color: #292e39;
    font-size: 17px;
    line-height: 35px;
    font-weight: 500;
    padding: 20px 0px 35px 0px;
}

.titlepage h2 {
    font-size: 45px;
    color: rgb(0, 57, 113);
    line-height: 50px;
    font-weight: bold;
    padding: 0;
}

p {
    margin: 0px;
    font-weight: 00;
    font-size: 15px;
    line-height: 24px;
}

p {
    margin-top: 0;
    margin-bottom: 1rem;
}
.col-md-5 {
    -ms-flex: 0 0 41.666667%;
    flex: 0 0 41.666667%;
    max-width: 41.666667%;
    position: relative;
    width: 100%;
    min-height: 1px;
    padding-right: 15px;
    padding-left: 15px;
}

.read_more {
    font-size: 17px;
    background-color: transparent;
    color: #666565;
    padding: 8px 0px;
    width: 100%;
    max-width: 190px;
    text-align: center;
    display: inline-block;
    border-radius: 30px;
    border:rgb(30,144,255) solid 3px;
    transition: ease-in all 0.5s;
}
.read_more:hover {
    background: rgb(30,144,255);
    color: #fff !important;
    transition: ease-in all 0.5s;
}


a:not([href]):not([tabindex]) {
   
    text-decoration: none;
}







</style>