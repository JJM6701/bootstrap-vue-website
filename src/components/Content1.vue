<template>
  <section class="page-hero py-5">
    <div class="container">
      <div class="row align-items-center">
        <!-- Text Section -->
        <div
          class="col-md-6 d-flex flex-column justify-content-center align-items-start px-5"
        >
          <h4 class="display-5 mb-3 fw-bold">Next Lead</h4>
          <p class="text-secondary fs-5 mb-4">
            At Next Lead, we specialise in driving effective marketing
            strategies that fuel business growth. With a focus on data-driven
            insights and innovative techniques, we help companies generate
            high-quality leads and boost conversions.
          </p>
          <RouterLink to="/contact" class="btn btn-danger fw-bold"
            >Contact Us</RouterLink
          >
        </div>

        <!-- Image Section -->
        <div class="col-md-6 my-5">
          <img
            src="../assets/team.jpg"
            class="img-fluid w-80 h-80 object-fit-cover rounded"
            alt="Our Team"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.page-hero {
  background-color: #fff;
}

.object-fit-cover {
  object-fit: cover;
}
</style>
