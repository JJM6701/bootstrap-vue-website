<template>
  <section class="hero-section text-center">
    <div class="container d-flex flex-column align-items-center gap-3">
      <h1 class="hero-title mb-4 text-center fs-1">
        We Help You Get Your <br />
        <span class="text-highlight"> Next Lead </span>
      </h1>
      <p class="hero-description mb-4 text-center fw-bold">
        Drive Traffic, Boost Rankings, and Grow Your Brand <br />
        with the Experts in Marketing.
      </p>
      <RouterLink to="/contact" class="btn btn-danger fw-bold w-auto p-3">
        Get Started
      </RouterLink>
    </div>
  </section>
</template>

<style scoped>
.hero-section {
  background-color: #f7c6c7;
  padding-top: 100px;
}

.hero-section .container {
  min-height: 50vh;
}

.hero-title {
  color: rgba(0, 0, 0, 0.63);
  font-size: 3rem;
  font-weight: bold;
}

.text-highlight {
  color: white;
  text-shadow: 1px 1px 3px rgba(1, 1, 50, 0.2);
  font-size: 72px;
}

.hero-description {
  color: rgba(0, 0, 0, 0.74);
  font-size: 1.25rem;
}
</style>
