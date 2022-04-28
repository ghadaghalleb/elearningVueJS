<template>   
<div class="container-fluid pt-5">
        <div class="container">
            <div class="text-center pb-2">
                <p class="section-title px-5"><span class="px-2">Get In Touch</span></p>
                <h1 class="mb-4">Contact Us For Any Query</h1>
            </div>
            <div class="row">
                <div class="col-lg-7 mb-5">
                    <div class="contact-form">
                        <div id="success"></div>
                        <form name="sentMessage" id="contactForm" novalidate="novalidate">
                            <div class="control-group">
                                <input type="text" class="form-control" id="name" placeholder="votre Nom " required="required" data-validation-required-message="Please enter your name" />
                                <p class="help-block text-danger"></p>
                            </div>
                            <div class="control-group">
                                <input type="email" class="form-control" id="email" placeholder="Votre Email" required="required" data-validation-required-message="Please enter your email" />
                                <p class="help-block text-danger"></p>
                            </div>
                            <div class="control-group">
                                <input type="text" class="form-control" id="subject" placeholder="Sujet" required="required" data-validation-required-message="Please enter a subject" />
                                <p class="help-block text-danger"></p>
                            </div>
                            <div class="control-group">
                                <textarea class="form-control" rows="6" id="message" placeholder="Message" required="required" data-validation-required-message="Please enter your message"></textarea>
                                <p class="help-block text-danger"></p>
                            </div>
                            <div>
                                <button class="btn btn-primary py-2 px-4" type="submit" id="sendMessageButton">Envoyer </button>
                            </div>
                        </form>
                    </div>
                </div>
                <div class="col-lg-5 mb-5">
                    <p>Des questions? Retour? Envoyez votre paragraphe. à nous! Aidez-nous à vous aider à lire plus de contenu de qualité gratuitement sans nuire aux éditeurs</p>
                    <div class="d-flex">
                        <i class="fa fa-map-marker-alt d-inline-flex align-items-center justify-content-center bg-primary text-secondary rounded-circle" style="width: 45px; height: 45px;"></i>
                        <div class="pl-3">
                            <h5>Address</h5>
                            <p>123 Nabeul, Tunis</p>
                        </div>
                    </div>
                    <div class="d-flex">
                        <i class="fa fa-envelope d-inline-flex align-items-center justify-content-center bg-primary text-secondary rounded-circle" style="width: 45px; height: 45px;"></i>
                        <div class="pl-3">
                            <h5>Email</h5>
                            <p>LEARN@gmail.com</p>
                        </div>
                    </div>
                    <div class="d-flex">
                        <i class="fa fa-phone-alt d-inline-flex align-items-center justify-content-center bg-primary text-secondary rounded-circle" style="width: 45px; height: 45px;"></i>
                        <div class="pl-3">
                            <h5>Phone</h5>
                            <p>+216 26 520 246 </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

</template>

<script>
export default {
  name: 'cont-act',
  props: {
    msg: String
  }
}
</script>



<style scoped>


/* 
.col-md-push-1 {
    left: 8.33333%;
    position: relative;
    min-height: 1px;
    padding-left: 15px;
    padding-right: 15px;
}

body {
    font-family: "Work Sans", Arial, sans-serif;
    font-weight: 400;
    font-size: 16px;
    line-height: 1.7;
    color: #828282;
    background: #fff;
}


h2, h3, h4, h5, h6, figure {
    color: #000;
    font-family: "Work Sans", Arial, sans-serif;
    font-weight: 400;
    margin: 0 0 20px 0;
    line-height: 1.1;
}

h3, .h3 {
    font-size: 24px;
}


.row {
    margin-left: -15px;
    margin-right: -15px;
}

.form-group {
    margin-bottom: 15px;
} 


.js .animate-box {
    opacity: 0;
}

.col-md-6 {
    width: 50%;
    float:left; 
    position: relative;
    min-height: 1px;
    padding-left: 15px;
    padding-right: 15px;
}




.container {
    margin-top:100px ;
    width: 1170px;
    margin-bottom: 100px ;
}


/* ::::::::::::::::::::::::: */
/* .fh5co-contact{
   
  padding: 7em 0;
  clear: both;
  padding: 3em 0;
}


.fh5co-contact-info ul {
  padding: 0;
  margin: 0;
}
.fh5co-contact-info ul li {
    padding: 0 0 0 20px;
    margin: 0 0 10px 0;
    list-style: none;
    position: relative;
} */ 
/* .fh5co-contact-info ul li:before {
  color: #EA9215;
  position: absolute;
  left: 0;
  top: .05em;
  font-family: 'icomoon';
  speak: none; 
  font-style: normal;
  font-weight: normal;
  font-variant: normal;
  text-transform: none;
  line-height: 1;
  /* Better Font Rendering =========== */
  /* -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale; */

 /* .fh5co-contact-info ul li.address:before {
  font-size: 30px;
  content: "\e9d1";
}
.fh5co-contact-info ul li.phone:before {
  font-size: 23px;
  content: "\e9f4";
}
.fh5co-contact-info ul li.email:before {
  font-size: 23px;
  content: "\e9da";
}
.fh5co-contact-info ul li.url:before {
  font-size: 23px;
  content: "\e9af";
}  */


</style>