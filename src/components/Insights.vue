<template>
  <!-- Insights Section -->
  <section class="insights-section bg-transparent p-5 my-5">
    <div class="container">
      <div class="row align-items-center">
        <div class="col-md-6 mb-4 mb-md-0">
          <h2 class="mb-4">More data. More insights</h2>
          <p class="mb-4 fs-5">
            With the size of our SEO databases and speed of our backlink
            crawler, imagine what you can achieve if you have the insights your
            competitors don't.
          </p>
          <RouterLink to="/contact" class="btn btn-danger fw-bold"
            >Contact Us</RouterLink
          >
        </div>
        <div class="col-md-6">
          <div class="row g-3">
            <div class="col-6">
              <div class="p-4 text-center insight-box bg-danger rounded-3">
                <h3 class="text-white fs-1 fw-bold">25B</h3>
                <p class="text-white fw-bold">keywords</p>
              </div>
            </div>
            <div class="col-6">
              <div class="p-4 text-center insight-box bg-danger rounded-3">
                <h3 class="text-white fs-1 fw-bold">43T</h3>
                <p class="text-white fw-bold">backlinks</p>
              </div>
            </div>
            <div class="col-6">
              <div class="p-4 text-center insight-box bg-danger rounded-3">
                <h3 class="text-white fs-1 fw-bold">808M</h3>
                <p class="text-white fw-bold">domain profiles</p>
              </div>
            </div>
            <div class="col-6">
              <div class="p-4 text-center insight-box bg-danger rounded-3">
                <h3 class="text-white fs-1 fw-bold">140</h3>
                <p class="text-white fw-bold">geo databases</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.insights-section {
  margin-top: 50px;
}

.insight-box {
  padding: 1.5rem;
  text-align: center;
}

.bg-danger {
  background-color: #dc3545 !important;
}

.text-white {
  color: white !important;
}

.rounded-3 {
  border-radius: 0.75rem !important;
}
</style>
