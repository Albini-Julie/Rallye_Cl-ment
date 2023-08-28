<script setup>
import Header from "../components/Header.vue"
</script>

<template>

    <!--Header-->
    <Header class="Header-ordi"/>

    <!--Tagline-->
    <h2 class="titre citation Marge" style="margin-bottom: 50px; display:flex ; justify-content: center; font-style: italic;">« Le rallye est plus qu’une passion... »</h2>

    <!--Rectangle noir présentateur-->
    <div style=" background-color: black; padding-top:40px; padding-bottom:40px;">
        <div class="BlocPresentation">
            <img class="image" src="/Clement_Couleur 1.jpg" alt="Image Clément Albini"/>
            <div class="TextPresentation">
                <h3 class="titre citation titre-centre" style="color: white;">Lorem Ipsum</h3>
                <p class="text" style="color:white"> Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte. Il n'a pas fait que survivre cinq siècles, mais s'est aussi adapté à la bureautique informatique, sans que son contenu n'en soit modifié. Il a été popularisé dans les années 1960 grâce à la vente de feuilles Letraset contenant des passages du Lorem Ipsum, et, plus récemment, par son inclusion dans des applications de mise en page de texte, comme Aldus PageMaker.</p>
            </div>
        </div>
    </div>




</template>

<style>

@media screen and (min-width: 200px) {
  .citation{
    font-size:22px;
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
    width:60%
}

.TextPresentation{
  width: 90%;
}
}

@media screen and (min-width: 600px) {
  .citation{
    font-size:35px;
  }

  .image{
    width:40%
}

  .TextPresentation{
    width: 80%;
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

.TextPresentation{
  width: 35%;
} 

.BlocPresentation{
    display: flex;
    flex-direction:row;
    justify-content: space-evenly;
    align-items: center;
}
}

@media screen and (min-width: 1200px) {
  .image{
    width:25%
}
}


</style>