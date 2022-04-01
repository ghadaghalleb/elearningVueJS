<template>
    <div>

<h1 class="text-dark mt-5">Commencez à apprendre avec des cours gratuits</h1>
<h3 class="text-dark  ">Cours en ligne gratuits issus des meilleures universités et entreprises au monde.</h3>


<div class="container mt-5">
    <div class="row">
        <div class="col-md-3 my-2">
            <div class="card p-3">
                <div class="d-flex flex-row mb-3"><img src="https://i.imgur.com/ccMhxvC.png" width="70">
                    <div class="d-flex flex-column ml-2"><span>Science des données</span><span class="text-black-50">Niveau</span><span class="ratings"><i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i></span></div>
                </div>
                <div class="d-flex justify-content-between install mt-3"><span>Installed 172 times</span><span class="text-primary">View&nbsp;<i class="fa fa-angle-right"></i></span></div>
            </div>
        </div>

        <div class="col-md-3 my-2">
            <div class="card p-3">
                <div class="d-flex flex-row mb-3"><img src="https://i.imgur.com/42SqVZd.png" width="70">
                    <div class="d-flex flex-column ml-2"><span>Business</span><span class="text-black-50">Niveau</span><span class="ratings"><i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i></span></div>
                </div>
                <div class="d-flex justify-content-between install mt-3"><span>Installed 1234 times</span><span class="text-primary">View&nbsp;<i class="fa fa-angle-right"></i></span></div>
            </div>
        </div>

        <div class="col-md-3 my-2">
            <div class="card p-3">
                <div class="d-flex flex-row mb-3"><img src="https://i.imgur.com/lXEUCY8.png" width="70">
                    <div class="d-flex flex-column ml-2"><span>Informatique</span><span class="text-black-50">Niveau </span><span class="ratings"><i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i></span></div>
                </div>
                <div class="d-flex justify-content-between install mt-3"><span>Installed 1234 times</span><span class="text-primary">View&nbsp;<i class="fa fa-angle-right"></i></span></div>
            </div>
        </div>

        <div class="col-md-3 my-2">
            <div class="card p-3">
                <div class="d-flex flex-row mb-3"><img src="https://i.imgur.com/S2In5pz.png" width="70">
                    <div class="d-flex flex-column ml-2"><span>Santé</span><span class="text-black-50">Niveau</span><span class="ratings"><i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i></span></div>
                </div>
                <div class="d-flex justify-content-between install mt-3"><span>Installed 345 times</span><span class="text-primary">View&nbsp;<i class="fa fa-angle-right"></i></span></div>
            </div>
        </div>

    </div>
</div>



    </div>




</template>






<script>
export default {
        name: 'sect-ion',
  props: {
    msg: String
  }  
}
</script>
<style scoped>


.h1,h1 {
  padding-left: 70px;
}

.h3,h3 {
   padding-left: 70px;
   font-size: 1rem;

}

body {
    background: #eee
}

.ratings i {
    color: green
}

.install span {
    font-size: 12px
}

.col-md-4 {
    margin-top: 27px
}
</style>

