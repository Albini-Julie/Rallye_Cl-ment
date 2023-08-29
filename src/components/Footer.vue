<script setup>
import Logo from "../components/icons/Logo-blanc.vue";
import insta from "../components/icons/insta.vue"
</script>

<template>
    <div style="background-color: black; padding-top:60px;">
        <div class="footer">
            <!--Logo-->
            <div>
                <Logo/>
            </div>
            <!--contact-->
            <div class="RS">
                <p class="text couleur">06 - 07 - 96 - 27 - 01</p>
                <p class="text couleur">clement-albini@orange.fr</p>
                <a href="https://www.instagram.com/care_rallye/">
                    <div style="display: flex; justify-content: start; align-items: center; gap:20px">
                        <insta/>
                        <p class="text couleur">Care_rallye</p>
                    </div>
                </a>
            </div>
        </div>
        <!--Copyrights et administration-->
        <div class="bloc-copyright">
            <div class="Copyright">
                <p class="text" style="color:white; font-family: Raleway; font-style: italic;">Réalisation privée - Copyright © Clément Albini</p>
                <p class="text admin" style="color:white;">Connexion administrateur</p>
            </div>
        </div>
    </div>
</template>

<style>

.couleur{
    color:white;
}

@media screen and (min-width: 200px) {
    .footer{
    display: flex;
    flex-direction: column;
    align-items: center;
    }

    .admin{
        display: flex;
        justify-content: center;
    }

    .RS{
        display: flex;
        align-items: center;
        flex-direction: column;
        margin-top: 20px;
    }

    .bloc-copyright{
        display: flex; 
        justify-content: center;
        margin-top:20px
    }
}

@media screen and (min-width: 600px) {
    .footer{
    display: flex; 
    align-items: start;
    flex-direction: row;
    justify-content: center;
    gap: 80px; 
    }

    .RS{
        display: flex;
        align-items: start;
        flex-direction: column;
        margin-top: 0px;
    }
}

@media screen and (min-width: 1024px) {
    .footer{
    gap: 150px; 
    }

    .bloc-copyright{
        display: flex; 
        justify-content: end;
    }

    .Copyright{
        display: flex; 
        width: 60%; 
        justify-content: 
        space-between; 
        padding-right:30px;
    }
}

</style>