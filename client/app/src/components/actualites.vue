<template>
  <div class="containere">
    <div class="card"  >
       <img src="https://img.freepik.com/vecteurs-libre/collaboration-creative-developpement-programme-cooperation-reussie-brainstorming-coworking-travail-equipe-efficace-collegues-discutant-tache_335657-2091.jpg?t=st=1650927062~exp=1650927662~hmac=7a19876a06c2bff50dcdac0b627520ac0df24dc39df5b028b4210d8e43a5dfe1&w=740" class="card-img-top" alt="Accroche HTML">
      <div class="content">
			<h2>01</h2>
			<h3><br> FREELANCER</h3>
			<p>Les 10 compétences technologiques qu'un freelancer doit connaître...</p>
			<a href="https://www.zdnet.fr/pratique/les-10-competences-technologiques-qu-un-freelancer-doit-conna-tre-39935885.htm">Lire la suite</a></div>
    
    </div>

	<div class="card">
    <img src="https://img.freepik.com/vecteurs-libre/creation-sites-web-production-maintenance-sites-web-graphique-web-conception-interface-site-web-reactif-icone-coloree-genie-logiciel-developpement_335657-345.jpg?t=st=1650926947~exp=1650927547~hmac=e264a46f3aa8e53b75029fa27f957b7e068fb062538d26f3a8254a3079501694&w=740" class="card-img-top" alt="Accroche HTML">
		<div class="content">
			<h2>02</h2>
			<h3><br> TENDANCE</h3>
			<p>Les 8 langages de programmation les plus utilisés en 2022...</p>
			<a href="https://www.codeur.com/blog/top-langages-de-programmation/">Lire la suite</a>
		</div>
	</div>
	<div class="card">
    <img src="https://img.freepik.com/vecteurs-libre/securite-generale-donnees-protection-informations-personnelles-controle-acces-aux-bases-donnees-cyber-confidentialite-gadgets-synchronises-regulation-appareils-multiplateformes-illustration-metaphore-concept-isole-vecteur_335657-2832.jpg?w=740" class="card-img-top" alt="Accroche HTML">
		<div class="content">
			<h2>03</h2>
			<h3>WORDPRESS</h3>
			<p>10 plugins de sécurité incontournables pour WordPress...</p>
			<a href="https://www.codeur.com/blog/plugins-securite-wordpress/">Lire la suite</a>
		</div>
	</div>






</div>

</template>


<script>
export default {
    name: 'ac-tu',
    props: {
    msg: String
  }  
}
</script>

<style>

.btn1 {
  font-size: 20px;
  text-decoration: none;
  color: rgb(20, 0, 199);

}
.btn1:hover{
  text-decoration: underline;
}
.azerty{
  margin-left: 72px;
}





@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@200;300;400;500;600;700;800;900&display=swap");
*{margin: 0; padding: 0; box-sizing: border-box; font-family: "Poppins", sans-serif;}

.containere{
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  min-width: 1200px;
}
.card-img, .card-img-top {
    border-top-left-radius: calc(0.25rem - 1px);
    border-top-right-radius: calc(0.25rem - 1px);
    width: 250px;
    height: 300px;
    margin-left: 0px;
    margin-top: 0px;
    margin-right: 0px;
}
.containere .card{
  margin-left: 30px;
  margin-right: 30px;
  position: relative;
  padding: 20px;
  margin-top: 100px;
  margin-bottom: 100px;
  height: 400px;
  width: 280px;
  background: rgb(255 255 255 / 10%);
  border-top:1px solid rgba(255, 255, 255, 0.3);
  border-left: 1px solid rgba(255, 255, 255, 0.3);
  border-radius: 10px;
  z-index: 1;
  box-shadow: 20px 20px 50px rgba(0, 0, 0, 0.5);
}
.containere .card .content{
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 100%;
  color: rgb(10, 9, 41);
  text-align: center;
  transform: translateY(100px);
  opacity: 0;
  transition: 0.5s;
}
.containere .card:hover .content{
  transform: translateY(0px); opacity: 1;
}
/* titre */
.containere .card .content h2{
  position: absolute;
  top: -40px;
  right: 0;
  color: rgb(15 6 114);
  font-size: 8em;
}
.containere .card .content h3{font-size: 1.8em; margin: 5px;}
/* button */
.containere .card .content a{
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(45deg,  rgb(15 6 114), #4b4df7);
  color: rgb(255 255 255);
  text-decoration: none;
  border-radius: 10px;
  height: 40px;
  width: 160px;
  margin: 15px;
} 
</style>