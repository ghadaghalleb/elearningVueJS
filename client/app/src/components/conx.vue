<template>
<div class="bg-img">
         <div class="content">
            <header>Connecter Vous ! </header>
            <form action="#">
               <div class="field space">
                <input type="text" required placeholder=" Votre Email ">
               </div>
               <div class="field space">
                  <!-- <span class="fa fa-lock"></span> -->
                  <input type="password" class="pass-key" required placeholder="  Mot de passe">
                  <span class="show">SHOW</span>
               </div>
               <div class="pass">
                  <center><a href="#motdepasse">Mot de Passe oublié?</a> </center>
               </div>
               <div class="field">
                  <input type="submit" value="Connexion">
               </div>
            </form>
            <br>
            <div class="links">
               <div class="facebook">
                  <i class="fab fa-facebook-f"><span>Facebook</span></i>
               </div>
               <div class="google">
                  <i class="fab fa-google"><span>google</span></i>
               </div>
            </div>
            <div class="signup">
               Vous n'avez pas de compte!
               <a href="#inscription">Inscription</a>
            </div>
         </div>
  </div>

</template>






<script>
import axios from 'axios';

export default {
  name: 'log-in1',
  props: {
    msg: String
  },


    data() {
      return {
        form: {
          email: '',
          motdepasse: '',
        },
      }
    },
    methods: {
      onSubmit(event) {
        event.preventDefault()
        alert(JSON.stringify(this.form))
      },
      onReset(event) {
        event.preventDefault()
        // Reset our form values
        this.form.email = ''
        this.form.motdepasse = ''
        // Trick to reset/clear native browser form validation state
        this.show = false
        this.$nextTick(() => {
          this.show = true
        })
      }
    },

created(){
    axios.get('http://localhost:5000');
}

}
// const pass_field = document.querySelector('.pass-key');
//          const showBtn = document.querySelector('.show');
//          showBtn.addEventListener('click', function(){
//           if(pass_field.type === "password"){
//             pass_field.type = "text";
//             showBtn.textContent = "HIDE";
//             showBtn.style.color = "#3498db";
//           }else{
//             pass_field.type = "password";
//             showBtn.textContent = "SHOW";
//             showBtn.style.color = "#222";
//           }
//          });
</script>

<style>


/* @import url('https://fonts.googleapis.com/css?family=Montserrat:400,800'); */
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  user-select: none;
}
.bg-img{
  background: url("https://img.freepik.com/photos-gratuite/planche-mortier-diplome_53876-47088.jpg?t=st=1650384499~exp=1650385099~hmac=d85f6648f9e4d1810e4e0a125df7016d8fc3b2266eb081cf8da1d7983b4d1668&w=1060");
  height: 100vh;
  background-size: cover;
  background-position: center;
}
.bg-img:after{
  position: absolute;
  content: '';
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  background: rgba(0,0,0,0.7);
}
.content{
  position: absolute;
  top: 50%;
  left: 50%;
  z-index: 999;
  text-align: center;
  padding: 60px 32px;
  width: 370px;
  transform: translate(-50%,-50%);
  background: rgba(188, 176, 176, 0.04);
  box-shadow: -1px 4px 28px 0px rgba(0, 0, 0, 0.75);
}
.content header{
  color: white;
  font-size: 33px;
  font-weight: 600;
  margin: 0 0 35px 0;
  font-family: 'Montserrat',sans-serif;
}
.field{
  position: relative;
  height: 45px;
  width: 100%;
  display: flex;
  background: transparent;
}
.field span{
  color: #222;
  width: 40px;
  line-height: 45px;
}
.field input{
  height: 100%;
  width: 100%;
  background: transparent;
  border: 2px solid ;
  border-radius: 12px;
  outline: none;
  color: rgb(177, 166, 166);
  font-size: 16px;
  font-family: 'Poppins',sans-serif;
}
.space{
  margin-top: 16px;
}
.show{
  position: absolute;
  right: 13px;
  font-size: 13px;
  font-weight: 700;
  color: #222;
  display: none;
  cursor: pointer;
  font-family: 'Montserrat',sans-serif;
}
.pass-key:valid ~ .show{
  display: block;
}
/* .pass{
  text-align: left;
  margin: 10px 0;
} */
.pass a{
  text-align: center;
  color: white;
  text-decoration: none;
  font-family: 'Poppins',sans-serif;
}
.pass:hover a{
  text-decoration: underline;
}
.field input[type="submit"]{
  background: #3498db;
  border: 1px solid #2691d9;
  color: white;
  font-size: 18px;
  letter-spacing: 1px;
  font-weight: 600;
  cursor: pointer;
  font-family: 'Montserrat',sans-serif;
}
.field input[type="submit"]:hover{
  background: #2691d9;
}
.login{
  color: white;
  margin: 20px 0;
  font-family: 'Poppins',sans-serif;
}
.links{
  display: flex;
  cursor: pointer;
  color: white;
  margin: 0 0 20px 0;
}
.facebook,.google{
  width: 100%;
  height: 45px;
  line-height: 45px;
  margin-left: 10px;
}
.facebook{
  margin-left: 0;
  background: #4267B2;
  border: 1px solid #3e61a8;
}
.google{
  background: #929092;
  border: 1px solid #929092;
}
.facebook:hover{
  background: #3e61a8;
}
.google:hover{
  background: #ecd5e4;
}
.links i{
  font-size: 17px;
}
i span{
  margin-left: 8px;
  font-weight: 500;
  letter-spacing: 1px;
  font-size: 16px;
  font-family: 'Poppins',sans-serif;
}
.signup{
  font-size: 15px;
  color: white;
  font-family: 'Poppins',sans-serif;
}
.signup a{
  color: #3498db;
  text-decoration: none;
}
.signup a:hover{
  text-decoration: underline;
}
</style>