<script >
import Logo from "../components/icons/logo.vue";
import Logomobile from "../components/icons/logo-mobile.vue";
import LogomobileBlanc from "../components/icons/logo-mobile-blanc.vue";
import Menu from "@/components/icons/menu.vue";
import Croix from "@/components/icons/croix.vue"

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
    Logomobile,
    LogomobileBlanc
  }
}
</script>

<template>

<!-- HEADER ORDI-->
    <div class="Header-ordi">
        <div style="display: flex; justify-content: space-between;">
            <div style="width: 40%;">
              <router-link style="text-decoration: none;" to="/">
                <Logo/>
              </router-link>
            </div>
            <div style="display: flex; width: 60%; justify-content: space-around;">
              <div class="soulignage">
                <router-link to="/pilote" class="lien">
                    <h3 class="text-header">Le pilote</h3>
                </router-link>
              </div>
              <div class="soulignage">
                <router-link to="/voiture" class="lien">
                    <h3 class="text-header">La voiture</h3>
                </router-link>
              </div>
              <div class="soulignage">
                <router-link to="/sponsors" class="lien">
                    <h3 class="text-header">Les sponsors</h3>
                </router-link>
              </div>
            </div>
        </div>
    </div>

<!-- HEADER MOBILE-->
    <div class="Header-mobile">
  <!--Header ouvert-->
      <div style="display: flex; justify-content: space-between; align-items: start;">
        <div>
          <router-link class="lien" to="/">
            <Logomobile/>
          </router-link>
        </div>
        <div class="place-bouton">
          <button class="bouton " style="  z-index: 50;" aria-controls="menu" :aria-expanded="menuOuvert" @click="menuOuvert = !menuOuvert " 
              :style="[menuOuvert ? '' : '',]">
                  <Menu />
          </button> 
        </div>
      </div>

  <!--Header fermé-->
        <div style="position: fixed; inset: 0px; transform: translateX(1050px); z-index: 50; transition-duration: 1000ms;" 
        :style="['background-color:black; color:white', menuOuvert ? 'transform: translateX(0px);' : '',]">
                <ul @click="menuOuvert = !menuOuvert ">
                  <div style="display: flex; justify-content: space-between; align-items: start;">
                    <div style="margin-right:40px; margin-top:10px;">
                      <router-link class="lien" to="/">
                        <LogomobileBlanc/>
                      </router-link>
                    </div>
                      <div class="place-bouton">
                        <button class="bouton" style="margin-right:40px; margin-top:10px; z-index: 50;" aria-controls="menu" :aria-expanded="menuOuvert" 
                            :style="[menuOuvert ? 'visibility:visible' : '',]">
                            <Croix />
                            <span class="sr-only">Menu</span>
                        </button> 
                      </div>
                  </div>

                  <router-link to="/pilote" class="lien">
                    <h3 class="text-header" style="color:white; margin-top:50px">Le pilote</h3>
                  </router-link>
                  <router-link to="/voiture" class="lien">
                    <h3 class="text-header" style="color:white; margin-top:50px; margin-bottom: 50px;">La voiture</h3>
                  </router-link>
                  <router-link to="/sponsors" class="lien">
                    <h3 class="text-header" style="color:white">Les sponsors</h3>
                  </router-link>
                </ul>
        </div>
    </div>
      <Suspense>
    <router-view />
  </Suspense>
   
</template>

<style>

@media screen and (min-width: 500px) {
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

.Header-ordi{
  margin-right: 80px;
  margin-left: 80px;
  margin-top: 30px;
  margin-bottom: 30px;
}

.Header-mobile{
  margin-right: 15px;
  margin-left: 15px;
  margin-top: 30px;
  margin-bottom: 30px;
}

.bouton{
    background: none;
    border:none;
}

.place-bouton{
  display: flex;
  justify-content: end;
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

.text-header {
  text-decoration: none;
  background: linear-gradient(to top, rgba(0, 0, 0, 0.7) 0%, rgba(0, 0, 0, 0.7) 10%, transparent 10.01%) no-repeat left bottom / 0 100%;
  transition: background-size .5s;
}

.text-header:hover {
  background-size: 100% 100%;
}

</style>