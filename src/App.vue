<script setup>
import AboutView from "./pages/AboutView.vue";
import ContactView from "./pages/ContactView.vue";
import IndexView from "./pages/IndexView.vue";
import ServicesView from "./pages/ServicesView.vue";
import Navbar from "./components/Navbar.vue";
import Footer from "./components/Footer.vue";
import StudiesView from "./pages/StudiesView.vue";
import { ref } from "vue";

const currentPage = ref("IndexView");

const handlePageChange = (page) => {
  currentPage.value = page;
};
</script>

<template>
  <Navbar @page-change="handlePageChange" />

  <IndexView v-if="currentPage === 'IndexView'" />
  <AboutView v-if="currentPage === 'AboutView'" />
  <ServicesView v-if="currentPage === 'ServicesView'" />
  <StudiesView v-if="currentPage === 'StudiesView'" />
  <ContactView v-if="currentPage === 'ContactView'" />

  <Footer />
</template>

<style scoped></style>
