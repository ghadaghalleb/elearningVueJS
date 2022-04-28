<template>
    <div class="container-fluid py-5">
        <div class="container">
            <div class="row align-items-center">
                <div class="col-lg-5">
                    <img class="img-fluid rounded mb-5 mb-lg-0" src="../assets/about1.jpg" alt="">
                </div>
                <div class="col-lg-7">
                    <p class="section-title pr-5"><span class="pr-2">Learn  </span></p>
                    <h1 class="mb-4">" Et la confiance garantie... "</h1>
                    <p>Faites avancer votre voyage créatif sans mettre la vie en attente. 
                        Les courts cours en ligne de LEARN vous aident à trouver l'inspiration qui correspond à votre routine.</p>
                    <div class="row pt-2 pb-4">
                        <div class="col-6 col-md-4">
                            <img class="img-fluid rounded" src="data:image/jpeg;base64,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" alt="">
                        </div>
                        <div class="col-6 col-md-8">
                            <ul class="list-inline m-0">
                                <li class="py-2 border-top border-bottom"><i class="fa fa-check  mr-3"></i>Plus de flexibilité et de praticité .</li>
                                <li class="py-2 border-bottom"><i class="fa fa-check  mr-3"></i>Meilleure rétention des connaissances .</li>
                                <li class="py-2 border-bottom"><i class="fa fa-check  mr-3"></i>Facilité de mise à jour .</li>
                            </ul>
                        </div>
                    </div>
                    <a href="" class="btn btn-primary mt-2 py-2 px-4">A propos</a>
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


.section-title::before {
    position: absolute;
    content: "";
    top: 10px;
    left: 10;
    width: 100%;
    margin-left: 70px;
    height: 3px;
    background: #17a2b8;
}

.py-5 {
    margin-top: 10px;
    padding-top: 3rem!important;
    padding-bottom: 3rem!important;
}

.col-lg-7 {
    flex: 0 0 58.33333%;
    max-width: 58.33333%;
    position: relative;
    width: 100%;
    padding-right: 15px;
    padding-left: 15px;
}


.section-title {
    position: relative;
    display: inline-block;
    letter-spacing: 1px;
    text-transform: uppercase;
    color: #17a2b8;
    font-weight: bold;
  
}

svg:not(:host).svg-inline--fa, svg:not(:root).svg-inline--fa {
    color: #17a2b8;
    font-size: 1.2rem;
    overflow: visible;
    box-sizing: content-box;
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


body {
    margin: 0;
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.5;
    color: #666666;
    text-align: left;
    background-color: #fff;
}

svg:not(:host).svg-inline--fa[data-v-c226fde6], svg:not(:root).svg-inline--fa[data-v-c226fde6] {
    color: #17a2b8;
    font-size: 1.2rem;
    margin-right: 10px;
    overflow: visible;
    box-sizing: content-box;
}




</style>