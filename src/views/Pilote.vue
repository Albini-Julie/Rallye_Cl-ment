<script setup>
import Header from "../components/Header.vue";
import triangle from "../components/icons/triangle.vue";
import DossierSponsors from "../components/Dossier-sponsors.vue";
import Footer from "../components/Footer.vue";
</script>

<template>
    <!--Header-->
    <Header/>

    <!--Bloc de présentation-->
    <div class="bloc-clement">
        <!--Images des pilotes-->
        <div class="bloc-clement-images">
            <img class="image-pilote" src="/pilote-1.jpg" alt="image d'un pilote de course"/>
            <img class="image-pilote" src="/pilote-2.jpg" alt="image d'un pilote de course"/>
        </div>
        <!--Titres et textes-->
        <div class="bloc-clement-texte">
            <h3 class="titre titre-clement">Clément Albini</h3>
            <p class="text texte-clement" >Plusieurs variations de Lorem Ipsum peuvent être trouvées ici ou là, mais la majeure partie d'entre elles a été altérée par l'addition d'humour ou de mots aléatoires qui ne ressemblent pas une seconde à du texte standard. Si vous voulez utiliser un passage du Lorem Ipsum, vous devez être sûr qu'il n'y a rien d'embarrassant caché dans le texte. Tous les générateurs de Lorem Ipsum sur Internet tendent à reproduire le même extrait sans fin, ce qui fait de lipsum.com le seul vrai générateur de Lorem Ipsum. Iil utilise un dictionnaire de plus de 200 mots latins, en combinaison de plusieurs structures de phrases, pour générer un Lorem Ipsum irréprochable. </p>
        </div>
    </div>

    <!--Titre qualités-->
    <h4 class="titre MargeT Marge" style="display: flex; justify-content: center;">Mes 3 plus grandes qualités</h4>
    <!--Bloc qualité-->
    <div class="bloc-qualites">
        <!--Bloc Ambition-->
        <div class="bloc-ambition" style="background-color: black; padding:30px; ">
            <h5 class="titre titre-2" style="display: flex; justify-content: center; margin-top:0px">L’ambition</h5>
            <p class="text" style="color:white">On sait depuis longtemps que travailler avec du texte lisible et contenant du sens est source de distractions, et empêche de se concentrer sur la mise en page elle-même. L'avantage du Lorem Ipsum sur un texte générique comme 'Du texte. Du texte. Du texte.' est qu'il possède une distribution de lettres plus ou moins normale, et en tout cas comparable avec celle du français standard. </p>
        </div>
        <!--Bloc Persévérance-->
        <div class="bloc-perseverance" style="background-color: black; padding:30px;">
            <h5 class="titre titre-2" style="display: flex; justify-content: center; margin-top:0px">Persévérance</h5>
            <p class="text" style="color:white">Plusieurs variations de Lorem Ipsum peuvent être trouvées ici ou là, mais la majeure partie d'entre elles a été altérée par l'addition d'humour ou de mots aléatoires qui ne ressemblent pas une seconde à du texte standard. Si vous voulez utiliser un passage du Lorem Ipsum, vous devez être sûr qu'il n'y a rien d'embarrassant caché dans le texte.</p>
        </div>
        <!--Bloc Constance-->
        <div class="bloc-constance" style="background-color: black; padding:30px;" >
            <h5 class="titre titre-2" style="display: flex; justify-content: center; margin-top:0px">Constance</h5>
            <p class="text" style="color:white">L'extrait standard de Lorem Ipsum utilisé depuis le XVIè siècle est reproduit ci-dessous pour les curieux. Les sections 1.10.32 et 1.10.33 du "De Finibus Bonorum et Malorum" de Cicéron sont aussi reproduites dans leur version originale, accompagnée de la traduction anglaise de H. Rackham (1914).</p>
        </div>
    </div>

    <!--Titre projets futurs-->
    <h4 class="titre MargeT Marge" style="display: flex; justify-content: center;">Mes projets futurs</h4>
    <!--Liste des projets-->
    <div class="projets">
        <div class="projets-liste">
            <div class="projets-element">
                <triangle/>
                <p class="text">Tournoi Grand sapin - octobre 2023</p> 
            </div>
            <div class="projets-element">
                <triangle/>
                <p class="text">Tournoi Grand sapin - octobre 2023</p> 
            </div>
            <div class="projets-element">
                <triangle/>
                <p class="text">Tournoi Grand sapin - octobre 2023</p> 
            </div>
            <div class="projets-element">
                <triangle/>
                <p class="text">Tournoi Grand sapin - octobre 2023</p> 
            </div>
        </div>
        <div class="projets-image">
            <img  class="projets-image-element" src="trophees.jpg" alt="image de trophées"/>
        </div>
    </div>

    <!--Cadre dossier sponsor-->
    <div class="Marge" style="display: flex; justify-content: center;">
      <DossierSponsors/>
    </div>

    <!--Footer-->
    <Footer/>
</template>

<style>


.projets-element{
    display: flex;
    align-items: center;
    gap:20px;
    margin-bottom:20px;
}

@media screen and (min-width: 200px) {

    .titre-2{
        font-size: 25px;
        color:white;
    }

    .bloc-clement-images{
        display: flex;
        justify-content: center;
    }

    .titre-clement{
        display: flex;
        justify-content: center;
    }

    .texte-clement{
        margin-left: 15px;
        margin-right: 15px;
}

    .bloc-clement-texte{
       display: flex;
       flex-direction: column;
       align-items: center;

    }

    .image-pilote{
    width: 50%;
}

.bloc-qualites{
    display: flex;
    align-items: center;
    flex-direction: column;
    gap:30px
}

.bloc-ambition{
    width: 70%;
}

.bloc-perseverance{
    width: 70%;
}

.bloc-constance{
    width: 70%;
}

.projets{
}

.projets-image{
    width:100%;
}

.projets-image-element{
    width: 80%
}

.projets-liste{
    display: flex;
    flex-direction: column;
    align-items: center;
}

.projets-image{
    display: flex;
    justify-content: center;
}

.projets-image-element{
    width: 100%;
    margin-top: 30px;
}
    
}

@media screen and (min-width: 600px) {

    .titre-2{
        font-size: 30px;
        color:white;
    }

    .bloc-clement-images{
        display: flex;
        gap:30px;
        justify-content: center;
    }

    .titre-clement{
        display: flex;
        justify-content: center;
    }

    .texte-clement{
        width:80%;
}

    .bloc-clement-texte{
       display: flex;
       flex-direction: column;
       align-items: center;

    }

    .image-pilote{
    width: 35%;
}

.bloc-ambition{
    width: 50%;
}

.bloc-perseverance{
    width: 50%;
}

.bloc-constance{
    width: 50%;
}

.projets-image{
    display: flex;
    justify-content: center;
}

.projets-image-element{
    width: 70%;
    margin-top: 30px;
}

}

@media screen and (min-width: 800px){
    .projets{
    display: flex; 
    justify-content: space-evenly; 
    align-items: center;
}

.projets-image{
    display: flex;
    justify-content: center;
    width:50%;
}

.projets-image-element{
    width: 80%
}
}

@media screen and (min-width: 1024px) {

    .titre-2{
        font-size: 35px;
    }

    .bloc-clement{
        display: flex;
        align-items: center;
        justify-content: space-around;
    }

    .bloc-clement-images{
        display: flex;
        gap:30px;
        width: 60%;
        justify-content: center;
    }

    .bloc-clement-texte{
        width: 40%;
        display: block;
    }

    .texte-clement{
        margin-left: 0px;
        margin-right:0px;
}

    .image-pilote{
    width: 40%;
}

.titre-clement{
        display: flex;
        justify-content: start;
    }

.texte-clement{
    width:90%;
}

.bloc-qualites{
    display: flex; 
    flex-direction: row;
    justify-content: space-evenly; 
    gap:30px; 
    margin:20px
}

.bloc-ambition{
    width: 275px;
    height: 400px;
}

.bloc-perseverance{
    width: 275px;
    height: 400px;
}

.bloc-constance{
    width: 275px;
    height: 400px;
}

.projets-image{
    width:50%;
}

.projets-image-element{
    width: 80%
}

.projets{
    display: flex; 
    justify-content: space-evenly; 
    align-items: center;
}
}

@media screen and (min-width: 1300px) {

    .titre-2{
        font-size: 35px;
    }

    .bloc-clement{
        display: flex;
        align-items: center;
        justify-content: space-around;
    }

    .bloc-clement-images{
        display: flex;
        gap:30px;
        width: 60%;
        justify-content: center;
    }

    .bloc-clement-texte{
        width: 40%;
    }

    .image-pilote{
    width: 30%;
}

.texte-clement{
    width:75%;
}

.bloc-ambition{
    width: 375px;
    height: 450px;
}

.bloc-perseverance{
    width: 375px;
    height: 450px;
}

.bloc-constance{
    width: 375px;
    height: 450px;
}

.projets-image-element{
    width:80%;
}

.projets-image{
    width: 40%;
}

.projets{
    display: flex; 
    justify-content: space-evenly; 
    align-items: center;
}
}
</style>

