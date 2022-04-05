import { createRouter, createWebHistory } from "vue-router";

import HomeView from "../views/HomeView.vue";
import AlcoholView from "../views/AlcoholView.vue";
import AboutView from "../views/AboutView.vue";
import PartyView from "../views/PartyView.vue";
import GameView from "../views/GameView.vue";

/* 
* Routes
* - Main
* - Age
* - Credits
* - Alcohol prevention
* - Party waiting
* - Mini game frontend
*/

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/about",
      name: "about",
      component: AboutView,
    },
    {
      path: "/alcohol-prevention",
      name: "alcohol-prevention",
      component: AlcoholView,
    },
    {
      path: "/party/waiting-room",
      name: "waiting-room",
      component: PartyView,
    },
    {
      path: "/party/game/:id",
      name: "game-view",
      component: GameView,
    }    
  ],
});

export default router;
