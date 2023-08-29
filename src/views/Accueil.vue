<script setup>
import Header from "../components/Header.vue";
import DossierSponsors from "../components/Dossier-sponsors.vue";
import Footer from "../components/Footer.vue"

</script>

<template>

    <!--Header-->
    <Header class="Header-ordi"/>

    <!--Tagline-->
    <h2 class="titre citation Marge" style="display:flex ; justify-content: center; font-style: italic;">« Le rallye est plus qu’une passion... »</h2>

    <!--Rectangle noir présentateur-->
    <div style=" background-color: black; padding-top:40px; padding-bottom:40px;">
        <div class="BlocPresentation">
            <img class="image" src="/Clement_Couleur 1.jpg" alt="Image Clément Albini"/>
            <div class="espacement">
                <h3 class="titre citation titre-centre" style="color: white;">Lorem Ipsum</h3>
                <p class="text" style="color:white"> Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte. Il n'a pas fait que survivre cinq siècles, mais s'est aussi adapté à la bureautique informatique, sans que son contenu n'en soit modifié. Il a été popularisé dans les années 1960 grâce à la vente de feuilles Letraset contenant des passages du Lorem Ipsum, et, plus récemment, par son inclusion dans des applications de mise en page de texte, comme Aldus PageMaker.</p>
            </div>
        </div>
    </div>

    <!--Onglets-->
    <div class="bloc-onglets">

      <!--Bloc pilote noir et blanc-->
      <div class="onglet">
        <router-link class="onglet-lien" to="/pilote">
          <div class="onglet-image-div">
            <div class="onglet-pilote-image"></div>
          </div>
          <h3 class="titre onglet-titre">Le pilote</h3>
        </router-link>
      </div>

      <!--Bloc voiture-->
      <div class="onglet">
        <router-link class="onglet-lien" to="/voiture">
          <div class="onglet-image-div">
            <div class="onglet-voiture-image"></div>
          </div>
          <h3 class="titre onglet-titre">La voiture</h3>
        </router-link>
      </div>

      <!--Bloc sponsors-->
      <div class="onglet">
        <router-link class="onglet-lien" to="/sponsors">
           <div class="onglet-image-div">
            <div class="onglet-sponsors-image"></div>
          </div>
          <h3 class="titre onglet-titre">Les sponsors</h3>
        </router-link>
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

@media screen and (min-width: 200px) {
  .citation{
    font-size:22px;
  }

  .Marge{
    margin-bottom: 50px;
  }

  .titre-centre{
    display: flex;
    justify-content: center;
  }

  .BlocPresentation{
    display: flex;
    flex-direction: column;
    align-items: center;
}

  .image{
      width:80%
  }

  .espacement{
    width: 90%;
  }

  .onglet-image{
    width: 70%;
  }

  .onglet-image-div{
    display: flex;
    justify-content: center;
  }

  .onglet-titre{
    display: flex;
    justify-content: center;
  }
}

@media screen and (min-width: 600px) {
  .citation{
    font-size:35px;
  }

  .image{
    width:40%
}

  .espacement{
    width: 80%;
}

.onglet-image{
    width: 60%;
  }

  .bloc-onglets{
  margin-top: 50px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
}
}

@media screen and (min-width: 1024px) {
  .citation{
    font-size:40px;
  }

  .titre-centre{
    display: flex;
    justify-content: start;
  }

  .Marge{
    margin-bottom: 80px;
  }

.image{
    width:35%
}

.espacement{
  width: 35%;
} 

.BlocPresentation{
    display: flex;
    flex-direction:row;
    justify-content: space-evenly;
    align-items: center;
}

.onglet-image{
  width: 80%;
}

.onglet-image-div{
  display: flex;
  justify-content: center;
}

.onglet-titre{
  display: flex;
  justify-content: center;
}
}

@media screen and (min-width: 1200px) {
  .image{
    width:25%
}

.onglet-image{
  width: 60%;
}
}

.onglet-lien{
  text-decoration: none;
  color:black
}

.onglet{
  margin-top:50px
}

.onglet-pilote-image{
      width: 300px;
      height: 300px;
      background: url("/onglet-pilote.jpg") no-repeat;
}

.onglet-pilote-image:hover {
      background: url("/onglet-pilote-couleurs.jpg") no-repeat;
    }

.onglet-voiture-image{
      width: 300px;
      height: 300px;
      background: url("/onglet-voiture.jpg") no-repeat;
}

.onglet-voiture-image:hover {
      background: url("/onglet-voiture-couleurs.jpg") no-repeat;
    }

.onglet-sponsors-image{
      width: 300px;
      height: 300px;
      background: url("/onglet-sponsors.jpg") no-repeat;
}

.onglet-sponsors-image:hover {
      background: url("/onglet-sponsors-couleurs.jpg") no-repeat;
    }

</style>