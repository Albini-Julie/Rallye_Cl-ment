<script>
import Logo from "../components/icons/logo.vue";
import Menu from "../components/icons/menu.vue";
import Croix from "../components/icons/croix.vue"

export default {
  data: function () {
    return {
      menuOuvert: false,
    };
  },
  components: {
    Menu,
    Croix,
    Logo,
  }
}
</script>

<template>

<!-- HEADER ORDI-->
    <div class="Header-ordi">
        <div style="display: flex; justify-content: space-between;">
            <div style="width: 40%;">
                <Logo/>
            </div>
            <div style="display: flex; width: 60%; justify-content: space-around;">
                <router-link to="/pilote" class="lien">
                    <h3 class="text-header">Le pilote</h3>
                </router-link>
                <router-link to="/voiture" class="lien">
                    <h3 class="text-header">La voiture</h3>
                </router-link>
                <router-link to="/sponsors" class="lien">
                    <h3 class="text-header">La voiture</h3>
                </router-link>
            </div>
        </div>
    </div>

<!-- HEADER MOBILE-->
    <div class="Header-mobile">
        <button class="bouton " style="  z-index: 50;" aria-controls="menu" :aria-expanded="menuOuvert" @click="menuOuvert = !menuOuvert " 
            :style="[menuOuvert ? '' : '',]">
                <Menu />
        </button> 

        <div style="position: fixed; inset: 0px; transform: translateX(1050px); z-index: 50; transition-duration: 1000ms;" 
        :style="['background-color:black; color:white', menuOuvert ? 'transform: translateX(0px);' : '',]">
                <ul @click="menuOuvert = !menuOuvert ">
                        <button class="bouton" style=" z-index: 50;" aria-controls="menu" :aria-expanded="menuOuvert" 
                            :style="[menuOuvert ? 'visibility:visible' : '',]">
                            <Croix />
                            <span class="sr-only">Menu</span>
                        </button> 
                </ul>
        </div>
    </div>
      <Suspense>
    <router-view />
  </Suspense>
   
</template>

<style>

@media screen and (min-width: 500) {
  .Header-mobile{
    display: block;
  }
}

.Header-ordi{
    display: none;
  }

@media screen and (min-width: 1024px) {
  .Header-ordi{
    display: block;
  }
  
  .Header-mobile{
    display: none;
  }
}

.bouton{
    background: none;
    border:none;
}

.Header{
    background-color: black;
    color: white;
}

.text-header{
    font-family: Raleway;
    font-weight: 200;
    color: black;
    font-size: 25px;
}

.lien{
    text-decoration: none;
}

.sr-only{
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    white-space: nowrap;
    border-width: 0;
}

</style>