<template>
  

 <div class="container-fluid bg-secondary text-white mt-5 py-5 px-sm-3 px-md-5">
        <div class="row pt-5">
            <div class="col-lg-3 col-md-6 mb-5">
                <a href="" class="navbar-brand font-weight-bold text-primary m-0 mb-4 p-0" style="font-size: 40px; line-height: 40px;">
                    <i class="flaticon-043-teddy-bear"></i>
                    <span class="text-white">LEARN</span>
                </a>
                <p>Plus qu'un simple logiciel.Notre priorité #1 est votre réussite. 
                  <br> Passez à l'étape suivante pour atteindre vos objectifs personnels et professionnels avec LEARN.</p>
                <div class="d-flex justify-content-start mt-4">
                    <a class="btn btn-outline-primary rounded-circle text-center mr-2 px-0"
                        style="width: 38px; height: 38px;" href="#"><i class="fab fa-twitter"></i></a>
                    <a class="btn btn-outline-primary rounded-circle text-center mr-2 px-0"
                        style="width: 38px; height: 38px;" href="#"><i class="fab fa-facebook-f"></i></a>
                    <a class="btn btn-outline-primary rounded-circle text-center mr-2 px-0"
                        style="width: 38px; height: 38px;" href="#"><i class="fab fa-linkedin-in"></i></a>
                    <a class="btn btn-outline-primary rounded-circle text-center mr-2 px-0"
                        style="width: 38px; height: 38px;" href="#"><i class="fab fa-instagram"></i></a>
                </div>
            </div>
            <div class="col-lg-3 col-md-6 mb-5">
                <h3 class="text mb-4">Contact</h3>
                <div class="d-flex">
                    <h4 class="fa fa-map-marker-alt text-primary"></h4>
                    <div class="pl-3">
                        <h5 class="text-white">Address</h5>
                        <p>123 Nabeul , Tunis</p>
                    </div>
                </div>
                <div class="d-flex">
                    <h4 class="fa fa-envelope text-primary"></h4>
                    <div class="pl-3">
                        <h5 class="text-white">Email</h5>
                        <p>LEARN@gmail.com</p>
                    </div>
                </div>
                <div class="d-flex">
                    <h4 class="fa fa-phone-alt text-primary"></h4>
                    <div class="pl-3">
                        <h5 class="text-white">Phone</h5>
                        <p>+123 456 789 </p>
                    </div>
                </div>
            </div>
            <div class="col-lg-3 col-md-6 mb-5">
                <h3 class="text mb-4">Liens</h3>
                <div class="d-flex flex-column justify-content-start">
                    <a class="text-white mb-2" href="#"><i class="fa fa-angle-right mr-2"></i>Learn</a>
                    <a class="text-white mb-2" href="#"><i class="fa fa-angle-right mr-2"></i>A propos</a>
                    <a class="text-white mb-2" href="#"><i class="fa fa-angle-right mr-2"></i>Nos Cours</a>
                    <a class="text-white mb-2" href="#"><i class="fa fa-angle-right mr-2"></i>Nos Proffesseurs</a>
                    <a class="text-white mb-2" href="#"><i class="fa fa-angle-right mr-2"></i>Nos Certifications</a>
                    <a class="text-white" href="#"><i class="fa fa-angle-right mr-2"></i>Contact Us</a>
                </div>
            </div>
            <div class="col-lg-3 col-md-6 mb-5">
                <h3 class="text mb-4">Démarrer Maintenant</h3>
                <form action="">
                    <div class="form-group">
                        <input type="text" class="form-control border-0 py-4" placeholder="Votre Nom" required="required" />
                    </div>
                    <div class="form-group">
                        <input type="email" class="form-control border-0 py-4" placeholder="Votre Email"
                            required="required" />
                    </div>
                    <div>
                        <button class="btn btn-primary btn-block border-0 py-3" type="submit">Connecter </button>
                    </div>
                </form>
            </div>
        </div>
        
    </div>

</template>


<script>
export default {
  name: 'foo-ter',
  props: {
    msg: String
  }
}
</script> 


<style scoped>
.text-white {
    color: #fff !important;
}

.pl-md-5, .px-md-5 {
    padding-left: 3rem !important;
    padding-right: 3rem !important;
    padding-top: 3rem !important;
}

.mt-5, .my-5 {
    margin-top: 3rem !important; 
}

.bg-secondary {
    background-color: #00394f !important;
}

.row {
    display: flex;
    flex-wrap: wrap;
    margin-right: -15px;
    margin-left: -15px;
}

.mb-4 {
    margin-bottom: 1.5rem!important;
    color: #17a2b8 !important;
}

.py-4 {
    margin-bottom: 5px;
    padding-top: 1.5rem!important;
    padding-bottom: 1.5rem!important;
}

body {
    margin: 0;
    font-family: "Nunito", sans-serif;
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.5;
    color: #666666;
    text-align: left;
    background-color: #fff;
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