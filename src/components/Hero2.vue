<template>
  <section class="social-media-section text-center">
    <div class="container d-flex flex-column align-items-center gap-3">
      <h1 class="social-media-title m-5 text-center text-dark fw-bold">
        {{ title }}
      </h1>
    </div>
  </section>
</template>

<style scoped>
.social-media-section {
  background-color: #f7c6c7;
  padding-top: 100px;
}

.social-media-section .container {
  min-height: 40vh;
}

.social-media-title {
  font-size: 64px;
}
</style>

<script setup>
import { defineProps } from "vue";

const props = defineProps({
  title: {
    type: String,
    required: true,
  },
});
</script>
