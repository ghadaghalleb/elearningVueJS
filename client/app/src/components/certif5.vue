<template>
    <div>
          <!-- mobile -->
      <div id="mobile"  class="mobile">
         <div class="container">
            <div class="row d_flex">
               <div class="col-md-5">
                  <div class="mobile_img">
                     <figure><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/IBM_logo.svg/640px-IBM_logo.svg.png" alt="#"/></figure>
                  </div>
               </div>
               <div class="col-md-7">
                  <div class="titlepage">
                     <h2>IBM Data Engineering </h2>
                     <span></span>
                            <p>This Professional Certificate is for anyone who wants to develop job-ready skills,   
                         <br> tools,  and a portfolio for an entry-level data engineer position. 
                         <br> Throughout the self-paced online courses,
                         <br> you will immerse yourself in the role of a data engineer
                         <br> and acquire the essential skills you need to work with a range of
                         <br>  tools and databases to design, deploy,
                         <br> and manage structured and unstructured data.  .</p>           
                          <a class="read_more"  href="#IBM Data Engineering">Read More <i class="fa fa-arrow-right" aria-hidden="true"></i></a>
                  </div>
               </div>
            </div>
         </div>
      </div>
      <!-- end mobile -->

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


<style scoped>


.mobile {
    background-color:rgb(30,144,255);
    background-repeat: no-repeat;
    background-size: 100% 100%;
    padding: 90px 0;
}

body {
    color: #666666;
    font-size: 14px;
    font-family: 'Poppins', sans-serif;
    line-height: 1.80857;
    font-weight: normal;
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

.col-md-7 {
    -ms-flex: 0 0 58.333333%;
    flex: 0 0 58.333333%;
    max-width: 58.333333%;
    position: relative;
    width: 100%;
    min-height: 1px;
    padding-right: 15px;
    padding-left: 15px;

}


.mobile .titlepage {
    text-align: right;
    padding: 0;
}

.titlepage h2 {
    font-size: 45px;
    color: rgb(255, 255, 255);
    line-height: 50px;
    font-weight: bold;
    padding: 0;
}


.titlepage span {
    background: rgb(0, 57, 113);
    display: block;
    height: 10px;
    width: 90px;
    margin-left: 650px;
}
.mobile .titlepage p {
    color: #fff;
    font-size: 17px;
    line-height: 35px;
    font-weight: 500;
    padding: 20px 0px 35px 0px;
}

p {
    margin: 0px;
    font-weight: 500;
    font-size: 15px;
    line-height: 24px;
    margin-top: 0;
    margin-bottom: 1rem;

}


.mobile .titlepage .read_more {
    border: #fff solid 3px;
    color: #fff;
}
.read_more:hover {
    background: rgb(0, 57, 113);
    color: #fff !important;
    transition: ease-in all 0.5s;
}
a:hover {
    color: #0056b3;
    text-decoration: underline;
}



</style>