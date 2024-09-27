<script setup>
import Navbar from "./components/Navbar.vue";
import Footer from "./components/Footer.vue";
import FloatingCartButton from "./components/FloatingCartButton.vue";
</script>

<template>
  <Navbar />
  <router-view></router-view>
  <FloatingCartButton />
  <Footer />
</template>

<style scoped></style>
