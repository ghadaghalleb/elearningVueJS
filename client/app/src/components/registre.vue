<template>
 <div class="container-fluid ">
        <div class="container">
            <div class="row align-items-center">
                <div class="col-lg-7 mb-5 mb-lg-0">
                    <p class="section-title pr-5"><span class="pr-2">Réserver Maintenant</span></p>
                    <h1 class="mb-4">Nous sommes à votre service. </h1>
                    <p>Ne tardez pas à vous inscrire le plus rapidement possible pour réserver votre place. 
                         <br> Veuillez vous inscrire en utilisant ce formulaire.</p>
                    <ul class="list-inline m-0">
                        <li class="py-2"><i class="fa fa-check text-success mr-3"></i>Processus de paiement en un clic.</li>
                        <li class="py-2"><i class="fa fa-check text-success mr-3"></i>Suivi et rapports puissants.</li>
                        <li class="py-2"><i class="fa fa-check text-success mr-3"></i>Aperçu en direct de vos cours en ligne.</li>
                    </ul>
                    <a href="#cours" class="btn btn-primary mt-4 py-2 px-4">Réserver</a>
                </div>
                <div class="col-lg-5">
                    <div class="card border-0">
                        <div class="card-header bg-secondary text-center p-4">
                            <h1 class="text-white m-0">Réserver</h1>
                        </div>
                        <div class="card-body rounded-bottom bg-primary p-5">
                            <form>
                                <div class="form-group">
                                    <input type="text" class="form-control border-0 p-4" placeholder="Votre Nom et Prenom" required="required" />
                                </div>
                                <div class="form-group">
                                    <input type="email" class="form-control border-0 p-4" placeholder="Votre Email" required="required" />
                                </div>
                                <div class="form-group">
                                    <select class="custom-select border-0 px-4" style="height: 47px;">
                                        <option selected>choisisez votre cours</option>
                                        <option value="1">Cour 1</option>
                                        <option value="2">Cour 2</option>
                                        <option value="3">Cour 3</option>
                                    </select>
                                </div>
                                <div>
                                    <button class="btn btn-secondary btn-block border-0 py-3" type="submit">Acheter maintenant </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>


 <script>
export default {
        name: 'regi-stre',
  props: {
    msg: String
  }  
}
</script>

<style scoped>

select {
    height: 40px;
    width: 100%;
    word-wrap: normal;
    border-radius: 0.3rem;
}


.bg-secondary {
    background-color: #00394f !important;
}

.p-5 {
    padding: 3rem !important;
}
.rounded-bottom {
    border-bottom-right-radius: 5px !important;
    border-bottom-left-radius: 5px !important;
}
.bg-primary {
    background-color: #17a2b8 !important;
}
.card-body {
    flex: 1 1 auto;
    min-height: 1px;
}
.form-group {
    margin-bottom: 1rem;
}
    
.btn:not(:disabled):not(.disabled) {
    cursor: pointer;
}

.pb-3, .py-3 {
    padding-bottom: 1rem !important;
     padding-top: 1rem !important;
}


.btn-secondary {
    border-radius: 0.3rem;
    color: #fff;
    background-color: #00394f;
    border-color: #00394f;
}
.btn {
    display: inline-block;
    font-weight: 400;
    color: #666666;
    text-align: center;
    vertical-align: middle;
    user-select: none;
    background-color: transparent;
    border: 1px solid transparent;
    padding: 0.375rem 0.75rem;
    font-size: 1rem;
    line-height: 1.5;
    border-radius: 30px;
    transition: color 0.15s
}


.text-success {
    color: #00394f !important;
}
.btn-primary {
    color: #fff;
    background-color: #17a2b8;
    border-color: #17a2b8;
}
.mt-4, .my-4 {
    margin-top: 1.5rem !important;
}

.pt-2, .py-2 {
    padding-top: 0.5rem !important;
    padding-bottom: 0.5rem !important;
}
.pr-4, .px-4 {
    padding-right: 1.5rem !important;
    padding-left: 1.5rem !important;
}


.container{
    margin-top: 50px;
}

.pr-2{
    position: relative;
    display: inline-block;
    letter-spacing: 1px;
    text-transform: uppercase;
    color: #17a2b8;
    font-weight: bold;
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


.text-center {
    text-align: center !important;
}



.col-lg-5 {
    flex: 0 0 41.66667%;
    max-width: 41.66667%;
    position: relative;
    width: 100%;
    padding-right: 15px;
    padding-left: 15px;
}

.border-0 {
    border: 0 !important;
}
.card {
    position: relative;
    display: flex;
    flex-direction: column;
    min-width: 0;
    word-wrap: break-word;
    background-color: #fff;
    background-clip: border-box;
    border: 1px solid rgba(0, 0, 0, 0.125);
    border-radius: 5px;
}
.card-header:first-child {
    border-radius: 4px 4px 0 0;
}
.text-center {
    text-align: center !important;
}
.p-4 {
    padding: 1.5rem !important;
}
.bg-secondary {
    background-color: #00394f !important;
}

.text-success[data-v-649a808e] {
    color: #00394f !important;
    margin-right: 10px;
}

.btn-primary:hover {
    color: #fff;
    background-color: #00394f;
    border-color: #00394f;
}
.btn-secondary[data-v-649a808e] {
    border-radius: 0.3rem;
    color: #fff;
    background-color: #00394f;
    border-color: #00394f;
}
.btn-secondary:hover{
background-color: #3d6168 ;
color:#fafafa ;

}





</style>




<style >


h1, .h1 {
    font-size: calc(1.375rem + 1.5vw);
    font-family: "Handlee";
    font-weight: bold;
    line-height: 1.2;
}


</style>