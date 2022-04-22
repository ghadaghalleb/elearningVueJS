<template>
<div class="bg-img">
         <div class="content">
            <header>Inscrivez-Vous ! </header>
            <form action="#">
               <div class="field">
                <input type="text" required placeholder=" Name">
               </div>
               <div class="field space">
                <input type="text" required placeholder=" Votre Email ">
               </div>
               <div class="field space">
                <input type="password"  class="pass-key" required placeholder=" saisir votre Mot de passe">
               </div>
               
               
               <div class="field space">
                  <input type="submit" value="Inscription" >
                  <b-btn variant="outline-primary" @click="addUser">Create</b-btn>

               </div>
            </form>
            <br>
            
            <div class="signup">
               Vous avez deja un compte!
               <a href="#connexion">Connexion</a>
            </div>
         </div>
  </div>

</template>

<script>
export default {
  name: 'log-in2',
  props: {
    msg: String
  },
  // user: {
  //   name: this.name,
  //   email: this.email,
  //   password: this.password,
  // }*/
  
}
//console.log(this.user)
</script> 
<style>

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
.pass{
  text-align: left;
  margin: 10px 0;
}
.pass a{
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