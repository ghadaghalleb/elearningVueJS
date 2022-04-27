<template>
<div>
   <div class="container-fluid pt-5">
        <div class="container">
            <div class="text-center pb-2">
                <p class="section-title px-5"><span class="px-2">Our Teachers</span></p>
                <h1 class="mb-4">Meet Our Teachers</h1>
            </div>
            <div class="row">
                <div class="col-md-6 col-lg-3 text-center team mb-5">
                    <div class="position-relative overflow-hidden mb-4" style="border-radius: 100%;">
                        <img class="img-fluid w-100" src="../assets/ghada.png" alt="" >
                        <div
                            class="team-social d-flex align-items-center justify-content-center w-100 h-100 position-absolute">
                        
                            <a class="btn btn-outline-light text-center mr-2 px-0" style="width: 38px; height: 38px;"
                                href="https://www.facebook.com/profile.php?id=100004622625227"><i class="fab fa-facebook-f"></i></a>
                            <a class="btn btn-outline-light text-center px-0" style="width: 38px; height: 38px;"
                                href="https://www.linkedin.com/in/ghada-ghalleb-62b2b4223/"><i class="fab fa-linkedin-in"></i></a>
                        </div>
                    </div>
                    <h4>Ghada Ghallen</h4>
                    <i>Music Teacher</i>
                </div>
                <div class="col-md-6 col-lg-3 text-center team mb-5">
                    <div class="position-relative overflow-hidden mb-4" style="border-radius: 100%;">
                        <img class="img-fluid w-100" src="../assets/nour.png" alt="" >
                        <div
                            class="team-social d-flex align-items-center justify-content-center w-100 h-100 position-absolute">
                            <a class="btn btn-outline-light text-center mr-2 px-0" style="width: 38px; height: 38px;"
                                href="#"><i class="fab fa-facebook-f"></i></a>
                            <a class="btn btn-outline-light text-center px-0" style="width: 38px; height: 38px;"
                                href="#"><i class="fab fa-linkedin-in"></i></a>
                        </div>
                    </div>
                    <h4>Nour affes</h4>
                    <i>Language Teacher</i>
                </div>
                <div class="col-md-6 col-lg-3 text-center team mb-5">
                    <div class="position-relative overflow-hidden mb-4" style="border-radius: 100%;">
                        <img class="img-fluid w-100" src="../assets/ghada.png" alt="" >
                        <div
                            class="team-social d-flex align-items-center justify-content-center w-100 h-100 position-absolute">
                            
                            <a class="btn btn-outline-light text-center mr-2 px-0" style="width: 38px; height: 38px;"
                                href="https://www.facebook.com/profile.php?id=100004622625227"><i class="fab fa-facebook-f"></i></a>
                            <a class="btn btn-outline-light text-center px-0" style="width: 38px; height: 38px;"
                                href="https://www.linkedin.com/in/ghada-ghalleb-62b2b4223/"><i class="fab fa-linkedin-in"></i></a>
                        </div>
                    </div>
                    <h4>GHADA GHALLEB</h4>
                    <i>Dance Teacher</i>
                </div>
                <div class="col-md-6 col-lg-3 text-center team mb-5">
                    <div class="position-relative overflow-hidden mb-4" style="border-radius: 100%;">
                        <img class="img-fluid w-100" src="../assets/nour.png" alt="" >
                        <div
                            class="team-social d-flex align-items-center justify-content-center w-100 h-100 position-absolute">
                         
                            <a class="btn btn-outline-light text-center mr-2 px-0" style="width: 38px; height: 38px;"
                                href="#"><i class="fab fa-facebook-f"></i></a>
                            <a class="btn btn-outline-light text-center px-0" style="width: 38px; height: 38px;"
                                href="#"><i class="fab fa-linkedin-in"></i></a>
                        </div>
                    </div>
                    <h4>NOUR AFFES</h4>
                    <i>Art Teacher</i>
                </div>
            </div>
        </div>
    </div>
</div>
</template>

<script>
export default {
  name: 'Comm-unity',
  props: {
    msg: String
  }
}
</script>

<style>

.pt-5, .py-5 {
    padding-top: 3rem !important;
    width: 100%;
    padding-right: 15px;
    padding-left: 15px;
    margin-right: auto;
    margin-left: auto;
}

.container{
  margin-bottom: 50px;
  margin-top: 100px;
    max-width: 960px;
    width: 100%;
    padding-right: 15px;
    padding-left: 15px;
    margin-right: auto;
    margin-left: auto;
}

.pb-2, .py-2 {
    padding-bottom: 0.5rem !important;
}


.text-center {
    text-align: center !important;
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

.row {
    display: flex;
    flex-wrap: wrap;
    margin-right: -15px;
    margin-left: -15px;
}

.col-lg-3 {
    flex: 0 0 25%;
    max-width: 25%;
}

.team .team-social {
  top: 0;
  background: rgba(23, 162, 184, 0.8);
  opacity: 0;
  z-index: 1;
  transition: .5s;
}

.team:hover .team-social {
  opacity: 1;
}


</style>