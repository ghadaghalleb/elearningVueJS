<template>
<div class="bg-img">
         <div class="content">
            <header>Mot de passe oublié </header>
            <p>Saisir l'adresse e-mail que vous utilisez sur Coursera. Nous vous enverrons un lien pour réinitialiser votre mot de passe.</p>
            <form action="#">
               <div class="field">
                <input type="text" required placeholder=" Entrer votre E-mail">
               </div>
               
               
               <div class="field space">
                  <input type="submit" value="Réinitialiser">
               </div>

            </form>
            <br>
    
            <div class="signup">
               Retour à
               <a href="#login">Connexion</a>
            </div>
         </div>
  </div>

</template>

<script>
export default {
  name: 'md-p',
  props: {
    msg: String
  }
}
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

.content header{
  color: white;
    font-size: 30px;
    font-weight: 400;
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
  color: #bdc5cd;
  width: 40px;
  line-height: 40px;
}
.field input{
  height: 100%;
  width: 100%;
  background: transparent;
  border: 2px solid ;
  border-radius: 12px;
  outline: none;
  color: #ede2e2;
  font-size: 16px;
  font-family: 'Poppins',sans-serif;
}
.space{
  margin-top: 16px;
}
h3{
 font-size: 1rem;
 padding-left: 20px;
 font-family: Georgia, 'Times New Roman', Times, serif;
 text-align: center;
}



</style>