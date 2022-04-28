<template>
 <div class="container-fluid pt-2">
        <div class="container">
            <div class="text-center pb-2">
                <p class="section-title pr-5"><span class="pr-2">Nos cours disponibles</span></p>
                <h1 class="mb-4">Pour vous aider à développer votre activité et votre carrière. </h1>
            </div>
            <div class="row">
                <div class="col-lg-4 mb-5">
                    <div class="card border-0 bg-light shadow-sm pb-2">
                        <img class="card-img-top mb-2" src="https://cdn.futura-sciences.com/buildsv6/images/wide1920/a/b/4/ab4448d657_50171605_machine-learning-engineer1.jpg" alt="">
                        <div class="card-body text-center">
                            <h4 class="card-title">Machine learning</h4>
                            <p class="card-text">Le Machine Learning est un domaine de l’IA qui vise à donner 
                                          aux machines la capacité d’apprendre. </p>
                        </div>
                        <div class="card-footer bg-transparent py-4 px-5">
                            <div class="row border-bottom">
                                <div class="col-6 py-1 text-right border-right"><strong>Capacité</strong></div>
                                <div class="col-6 py-1">15 places</div>
                            </div>
                            <div class="row border-bottom">
                                <div class="col-6 py-1 text-right border-right"><strong>l'heure de classe</strong></div>
                                <div class="col-6 py-1">08:00 - 10:00</div>
                            </div>
                            <div class="row">
                                <div class="col-6 py-1 text-right border-right"><strong>Prix</strong></div>
                                <div class="col-6 py-1">290DT / mois</div>
                            </div>
                        </div>
                        <a href="" class="btn btn-primary px-4 mx-auto mb-4">Inscrivez-vous</a>
                    </div>
                </div>
                <div class="col-lg-4 mb-5">
                    <div class="card border-0 bg-light shadow-sm pb-2">
                        <img class="card-img-top mb-2" src="https://fr.bitdegree.org/tutos/wp-content/uploads/2018/11/What-Is-A-Full-Stack-Developer-and-Everything-You-Need-to-Know-to-Start.jpg" alt="">
                        <div class="card-body text-center">
                            <h4 class="card-title">Fullstack JS</h4>
                            <p class="card-text">Cette formation a pour objectif de former des professionnels du web JavaScript «prêt à l'emploi».</p>
                        </div>
                        <div class="card-footer bg-transparent py-4 px-5">
                            <div class="row border-bottom">
                                <div class="col-6 py-1 text-right border-right"><strong>Capacité</strong></div>
                                <div class="col-6 py-1">20 places</div>
                            </div>
                            <div class="row border-bottom">
                                <div class="col-6 py-1 text-right border-right"><strong>l'heure de classe</strong></div>
                                <div class="col-6 py-1">08:00 - 10:00</div>
                            </div>
                            <div class="row">
                                <div class="col-6 py-1 text-right border-right"><strong>Prix</strong></div>
                                <div class="col-6 py-1">300 DT / mois</div>
                            </div>
                        </div>
                        <a href="" class="btn btn-primary px-4 mx-auto mb-4">Inscrivez-vous</a>
                    </div>
                </div>
                <div class="col-lg-4 mb-5">
                    <div class="card border-0 bg-light shadow-sm pb-2">
                        <img class="card-img-top mb-2" src="https://www.mytaskpanel.com/wp-content/uploads/2021/05/2021-05-14-1.jpg" alt="">
                        <div class="card-body text-center">
                            <h4 class="card-title">Python</h4>
                            <p class="card-text">Python est l’un des langages de programmation les plus utilisés.</p>
                        </div>
                        <div class="card-footer bg-transparent py-4 px-5">
                            <div class="row border-bottom">
                                <div class="col-6 py-1 text-right border-right"><strong>Capacité</strong></div>
                                <div class="col-6 py-1">30 places</div>
                            </div>
                            <div class="row border-bottom">
                                <div class="col-6 py-1 text-right border-right"><strong>l'heure de classe</strong></div>
                                <div class="col-6 py-1">08:00 - 10:00</div>
                            </div>
                            <div class="row">
                                <div class="col-6 py-1 text-right border-right"><strong>Prix</strong></div>
                                <div class="col-6 py-1">310 DT / mois</div>
                            </div>
                        </div>
                        <a href="" class="btn btn-primary px-4 mx-auto mb-4">Inscrivez-vous</a>
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




.section-title{
    position: relative;
    display: inline-block;
    letter-spacing: 1px;
    text-transform: uppercase;
    color: #17a2b8;
    font-weight: bold;
    margin-top: 0;
    margin-bottom: 1rem;
}


    
.h1, h1 {
    font-weight: 500;
    line-height: 1.2;
    font-size: 1.4rem;
}

.container{
        margin-top: 50px ; 
}


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

