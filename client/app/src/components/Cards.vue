<template>
<div class="container-fluid ">
        <div class="container">
            <div class="text-center pb-2">
                <p class="section-title px-5"><span class="px-2">Certificats Professionnels</span></p>
                <h1 class="mb-4">Soyez opérationnel pour une carrière convoitée</h1>
            </div>
            <div class="row pb-3">
                <div class="col-lg-4 mb-4">
                    <div class="card border-0 shadow-sm mb-2">
                        <img class="card-img-top mb-2" src="../assets/ux.png" alt="">
                        <div class="card-body bg-light text-center p-4">
                            <h4 class="">Google UX design </h4>
                           
                            <p>Lancez-vous dans le domaine en plein essor de la conception de l'expérience utilisateur (UX)  
                       <br> avec un certificat professionnel développé par Google.</p>
                            <a href="" class="btn btn-primary px-4 mx-auto my-2">Read More</a>
                        </div>
                    </div>
                </div>
                <div class="col-lg-4 mb-4">
                    <div class="card border-0 shadow-sm mb-2">
                        <img class="card-img-top mb-2" src="../assets/data.png" alt="">
                        <div class="card-body bg-light text-center p-4">
                            <h4 class="">Meta Marketing Analytics</h4>
                            <p> Vous apprendrez également comment utiliser les méta-expériences pour évaluer l'efficacité de votre campagne publicitaire.</p>
                            <a href="" class="btn btn-primary px-4 mx-auto my-2">Read More</a>
                        </div>
                    </div>
                </div>
                <div class="col-lg-4 mb-4">
                    <div class="card border-0 shadow-sm mb-2">
                        <img class="card-img-top mb-2" src="../assets/ibm.png" alt="">
                        <div class="card-body bg-light text-center p-4">
                            <h4 class="">IBM Data Engineering </h4>
                            
                            <p>Découvrez comment gérer des projets de manière efficace et efficiente, 
                         <br> en utilisant des méthodes traditionnelles et agiles.</p>
                            <a href="" class="btn btn-primary px-4 mx-auto my-2">Read More</a>
                        </div>
                    </div>
                </div>
                
            </div>
        </div>
    </div> 
</template>





<script>
export default {
        name: 'CardsA',
  props: {
    msg: String
  }  
}
</script>

<style scoped>


.btn-primary {
   
    color: #fff;
    background-color: #17a2b8;
    border-color: #17a2b8;
}

.btn-primary:hover {
    color: #fff;
    background-color: #002b31;
    border-color: #002b31;
}



</style>