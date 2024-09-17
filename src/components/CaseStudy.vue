<template>
  <section class="study-section py-5">
    <div class="container">
      <div class="row align-items-stretch">
        <!-- Content Section -->
        <div class="col-md-8 mb-4 mb-md-0 d-flex flex-column">
          <h2 class="mb-4">{{ title }}</h2>
          <p class="fs-5">{{ content }}</p>

          <!-- Accordion -->
          <div class="accordion mb-4" id="accordionExample">
            <!-- Challenges Dropdown -->
            <div class="accordion-item">
              <h2 class="accordion-header" id="headingOne">
                <button
                  class="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseOne"
                  aria-expanded="true"
                  aria-controls="collapseOne"
                >
                  Challenges
                </button>
              </h2>
              <div
                id="collapseOne"
                class="accordion-collapse collapse"
                aria-labelledby="headingOne"
                data-bs-parent="#accordionExample"
              >
                <div class="accordion-body">
                  <ul class="text-secondary fs-5 mb-0">
                    <li v-for="(challenge, index) in challenges" :key="index">
                      {{ challenge }}
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <!-- Solutions Dropdown -->
            <div class="accordion-item">
              <h2 class="accordion-header" id="headingTwo">
                <button
                  class="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseTwo"
                  aria-expanded="false"
                  aria-controls="collapseTwo"
                >
                  Solution
                </button>
              </h2>
              <div
                id="collapseTwo"
                class="accordion-collapse collapse"
                aria-labelledby="headingTwo"
                data-bs-parent="#accordionExample"
              >
                <div class="accordion-body">
                  <ul class="text-secondary fs-5 mb-0">
                    <li v-for="(sol, index) in solution" :key="index">
                      {{ sol }}
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <!-- Case Study Image -->
          <img :src="image" class="img-fluid rounded" alt="Study Image" />
        </div>

        <!-- Stats Section -->
        <div class="col-md-4 d-flex">
          <div
            class="bg-light rounded p-4 w-100 d-flex flex-column justify-content-center align-items-center"
          >
            <!-- Stat Cards -->
            <div
              v-for="(stat, index) in stats"
              :key="index"
              class="card bg-danger text-white p-4 mb-3 w-100"
            >
              <h5 class="card-title fw-bold fs-3">{{ stat.title }}</h5>
              <p class="card-text text-light fs-6">{{ stat.description }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
defineProps({
  title: {
    type: String,
    required: true,
  },
  content: {
    type: String,
    required: true,
  },
  challenges: {
    type: Array,
    required: true,
  },
  solution: {
    type: Array,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  stats: {
    type: Array,
    required: true,
  },
});
</script>

<style scoped>
.study-section {
  background-color: #f8f9fa;
}

.img-fluid {
  margin-top: 20px;
}

.accordion-button {
  background-color: #dc3545;
  color: white;
}

.accordion-button.collapsed {
  background-color: white;
  color: #212529;
}

.accordion-body {
  background-color: #f8f9fa;
}

.card {
  border: none;
  border-radius: 0.75rem;
}

.card-title {
  font-size: 1.75rem;
}

.card-text {
  font-size: 1rem;
}
</style>
