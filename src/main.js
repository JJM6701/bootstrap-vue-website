import { createApp } from "vue";
import { createPinia } from "pinia";
import App from "./App.vue";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles/styles.css";
import ContactForm from "./components/ContactForm.vue";
import router from "./router";
import "bootstrap-icons/font/bootstrap-icons.css";

const pinia = createPinia();

createApp(App).use(router).use(pinia).mount("#app");
