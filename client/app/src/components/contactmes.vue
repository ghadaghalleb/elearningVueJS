<template>   

<div id="fh5co-contact">
		<div class="container">
			<div class="row">
				<div class="col-md-5 col-md-push-1 ">
					
					<div class="fh5co-contact-info">
					
						<ul>
							<li class="address">Tunis , Nabeul </li>
							<li class="phone">+ 123 456 7899 </li>
							<li class="email">Learn@yoursite.com </li>
							
						</ul>
					</div>

				</div>
				<div class="col-md-6 ">
					<form action="#">
						<div class="row form-group">
							<div class="col-md-6">
								<!-- <label for="fname">First Name</label> -->
								<input type="text" id="fname" class="form-control" placeholder="Votre Nom">
							</div>
							<div class="col-md-6">
								<!-- <label for="lname">Last Name</label> -->
								<input type="text" id="lname" class="form-control" placeholder="Votre Prénom">
							</div>
						</div>

						<div class="row form-group">
							<div class="col-md-12">
								<!-- <label for="email">Email</label> -->
								<input type="text" id="email" class="form-control" placeholder="Votre email ">
							</div>
						</div>

						<div class="row form-group">
							<div class="col-md-12">
								<!-- <label for="subject">Subject</label> -->
								<input type="text" id="subject" class="form-control" placeholder="Votre sujet ">
							</div>
						</div>

						<div class="row form-group">
							<div class="col-md-12">
								<!-- <label for="message">Message</label> -->
								<textarea name="message" id="message" cols="30" rows="10" class="form-control" placeholder="Votre Message s'il vous plais !"></textarea>
							</div>
						</div>
						<div class="form-group">
							<input type="submit" value="Send Message" class="btn btn-primary">
						</div>

					</form>		
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
.fh5co-contact{
   
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
}
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