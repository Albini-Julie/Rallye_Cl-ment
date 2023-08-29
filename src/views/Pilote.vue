<script setup>
import Header from "../components/Header.vue"
</script>

<template>
    <Header/>
    <div class="bloc-clement">
        <div class="bloc-clement-images">
            <img class="image-pilote" src="/pilote-1.jpg" alt="image d'un pilote de course"/>
            <img class="image-pilote" src="/pilote-2.jpg" alt="image d'un pilote de course"/>
        </div>
        <div class="bloc-clement-texte">
            <h3 class="titre titre-clement">Clément Albini</h3>
            <p class="text texte-clement" >Plusieurs variations de Lorem Ipsum peuvent être trouvées ici ou là, mais la majeure partie d'entre elles a été altérée par l'addition d'humour ou de mots aléatoires qui ne ressemblent pas une seconde à du texte standard. Si vous voulez utiliser un passage du Lorem Ipsum, vous devez être sûr qu'il n'y a rien d'embarrassant caché dans le texte. Tous les générateurs de Lorem Ipsum sur Internet tendent à reproduire le même extrait sans fin, ce qui fait de lipsum.com le seul vrai générateur de Lorem Ipsum. Iil utilise un dictionnaire de plus de 200 mots latins, en combinaison de plusieurs structures de phrases, pour générer un Lorem Ipsum irréprochable. </p>
        </div>
    </div>
</template>

<style>


@media screen and (min-width: 200px) {
    .bloc-clement{
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
        margin-left: 20px;
        margin-right: 20px;
}

    .bloc-clement-texte{
       display: flex;
       flex-direction: column;
       align-items: center;

    }

    .image-pilote{
    width: 50%;
}
    
}

@media screen and (min-width: 600px) {

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
}

@media screen and (min-width: 1024px) {
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
}

@media screen and (min-width: 1300px) {
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
}
</style>

