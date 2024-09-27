<template>
  <section class="content-section py-5">
    <div class="container">
      <div class="row align-items-center column-reverse">
        <div class="col-md-6 my-5">
          <img
            src="../assets/stats.jpg"
            class="img-fluid w-80 h-80 object-fit-cover rounded"
            alt="Tailored Marketing Image"
          />
        </div>
        <div
          class="col-md-6 d-flex flex-column justify-content-center align-items-start px-5"
        >
          <h4 class="display-6 mb-3 fw-bold">Tailored Marketing</h4>
          <p class="text-secondary fs-5 mb-4">
            With years of experience across various industries, we're committed
            to delivering exceptional service and outcomes that exceed
            expectations. Whether it’s SEO, paid advertising, or social media
            management, Next Lead is your trusted partner in navigating the
            ever-evolving digital marketing landscape.
          </p>
          <RouterLink to="/services" class="btn btn-danger fw-bold">
            Our Packages
          </RouterLink>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.object-fit-cover {
  object-fit: cover;
}

@media (max-width: 575.98px) {
  .column-reverse {
    flex-direction: column-reverse !important;
  }
}
</style>
