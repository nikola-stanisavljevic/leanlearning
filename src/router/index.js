import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../components/homeComponent.vue";
import AboutUs from "../components/aboutUsComponent.vue";
import Eduscrum from "../components/eduscrumComponent.vue";
import FAQ from "../components/faqComponent.vue";
import Login from "../components/loginComponent.vue";
import Register from "../components/registerComponent.vue";
import Dashboard from "../components/dashboardComponent.vue";
import List from "../components/listComponent.vue";
import UserProfile from "../components/userProfileComponent.vue";
import Teams from "../components/teamsComponent.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: Home
  },
  {
    path: "/aboutUs",
    name: "aboutUs",
    component: AboutUs
  },
  {
    path: "/eduscrum",
    name: "eduscrum",
    component: Eduscrum
  },
  {
    path: "/faq",
    name: "faq",
    component: FAQ
  },
  {
    path: "/login",
    name: "login",
    component: Login
  },
  {
    path: '/register',
    name: 'Register',
    component: Register
  },
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: Dashboard,
    meta: 
    {
      requiresAuth : true
    }
  },
  {
    path: "/list",
    name: "List",
    component: List
  },
  {
    path: "/teams",
    name: "Teams",
    component: Teams
  },
  {
    path: "/userProfile",
    component: UserProfile,
    name: "UserProfile"
  }
];

const router = new VueRouter({routes});

export default router;
