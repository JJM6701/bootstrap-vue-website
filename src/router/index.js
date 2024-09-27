import { createRouter, createWebHistory } from "vue-router";
import IndexView from "../pages/IndexView.vue";
import ContactView from "../pages/ContactView.vue";
import AboutView from "../pages/AboutView.vue";
import StudiesView from "../pages/StudiesView.vue";
import ServicesView from "../pages/ServicesView.vue";
import SEOView from "../pages/SEOView.vue";
import SocialMediaView from "../pages/SocialMediaView.vue";
import GoogleAdsView from "../pages/GoogleAdsView.vue";
import Cart from "../components/Cart.vue";

// Define routes
const routes = [
  { path: "/", component: IndexView },
  { path: "/contact", component: ContactView },
  { path: "/about", component: AboutView },
  { path: "/case-studies", component: StudiesView },
  { path: "/services", component: ServicesView },
  { path: "/services/seo", component: SEOView },
  { path: "/services/social-media", component: SocialMediaView },
  { path: "/services/google-ads", component: GoogleAdsView },
  { path: "/cart", component: Cart },
  { path: "/:pathMatch(.*)*", redirect: "/" },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
