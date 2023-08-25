import { createRouter, createWebHistory } from 'vue-router'
import AccueilView from '../views/Accueil.vue'
import PiloteView from '../views/Pilote.vue'
import VoitureView from '../views/Voiture.vue'
import SponsorsView from '../views/Sponsors.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {path: '/', name: 'accueil', component: AccueilView},
    {path: '/pilote', name: 'pilote', component: PiloteView},
    {path: '/voiture', name: 'voiture', component: VoitureView},
    {path: '/sponsors', name: 'sponsors', component: SponsorsView},
  ]
})

export default router
