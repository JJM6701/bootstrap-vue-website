<template>
  <section class="statistics-section">
    <div class="container text-center">
      <div class="d-flex gap-4 mb-5 flex-wrap">
        <!-- Statistic 1 -->
        <div class="stat-box flex-grow-1 rounded py-4 shadow-sm border">
          <h1 class="text-danger fw-bold">2581</h1>
          <p class="fw-bold fs-5">New Monthly Visitors</p>
          <p class="fw-bold text-secondary">Organic from Google</p>
        </div>
        <!-- Statistic 2 -->
        <div class="stat-box flex-grow-1 rounded py-4 shadow-sm border">
          <h1 class="text-danger fw-bold">15428</h1>
          <p class="fw-bold fs-5">New Indexed Keywords</p>
          <p class="fw-bold text-secondary">Google</p>
        </div>
        <!-- Statistic 3 -->
        <div class="stat-box flex-grow-1 rounded py-4 shadow-sm border">
          <h1 class="text-danger fw-bold">2265</h1>
          <p class="fw-bold fs-5">New Keywords in TOP 10</p>
          <p class="fw-bold text-secondary">Google First Page</p>
        </div>
        <!-- Statistic 4 -->
        <div class="stat-box flex-grow-1 rounded py-4 shadow-sm border">
          <h1 class="text-danger fw-bold">114</h1>
          <p class="fw-bold fs-5">% Keywords Increase</p>
          <p class="fw-bold text-secondary">Google Indexed Keywords</p>
        </div>
      </div>
      <RouterLink to="/case-studies" class="btn btn-danger fw-bold p-3">
        Case Studies
      </RouterLink>
    </div>
  </section>
</template>

<style scoped>
.statistics-section {
  padding-top: 100px;
  margin-bottom: 100px;
}

.stat-box {
  background-color: white;
}

.btn {
  margin-top: 20px;
}
</style>
