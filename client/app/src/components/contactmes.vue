<template>   
<div class="container-fluid pt-3">
        <div class="container">
            <div class="text-center pb-2">
                <p class="section-title px-5"><span class="px-2">Contactez-nous</span></p>
                <h1 class="mb-4">Contactez-nous pour toute question</h1>
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
                        <div class="pl-3">
                            <h5>Address</h5>
                            <p>123 Nabeul, Tunis</p>
                        </div>
                    </div>
                    <div class="d-flex">
                        <div class="pl-3">
                            <h5>Email</h5>
                            <p>LEARN@gmail.com</p>
                        </div>
                    </div>
                    <div class="d-flex">
                        
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