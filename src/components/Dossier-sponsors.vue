<template>
    <div class="taille MargeT" style="background-color: black;">
        <h3 style="	text-align: center;" class="titre titre-2 couleur">Envie de devenir mon sponsor ?</h3>
        <p class="text couleur">Vous aussi participez à l’aventure et devenez mon sponsor !</p> 
        <a style="text-decoration: none; padding:40px;" href="/CV_JulieAlbini.pdf" download>
            <div style="background-color: white; display: flex; justify-content: center;">
                <p class="bouton">Mon dossier de sponsoring</p>
            </div>
        </a>
    </div>   
</template>

<style>

@media screen and (min-width: 200px) {
    .taille{
        width: 60%;
        padding: 40px;
    }

    .MargeT{
        margin-top: 50px;
    }

    .titre-2{
        font-size: 25px;
    }

    .bouton{
        font-family: Raleway;
        font-weight: 200;
        color:black;
        font-size: 18px;
    }
}

@media screen and (min-width: 600px) {
    .taille{
        width: 40%;
    }
}

@media screen and (min-width: 1024px) {
    .taille{
        width: 30%;
        padding: 60px;
    }

    .MargeT{
        margin-top: 100px;
    }

    .bouton{
        font-size: 20px;
    }

    .titre-2{
        font-size: 30px;
    }
}

@media screen and (min-width: 1200px) {
    .taille{
        width: 27%;
    }

    .bouton{
        font-size: 22px;
    }

    .titre-2{
        font-size: 35px;
    }
}

.couleur{
    color:white;
}

</style>