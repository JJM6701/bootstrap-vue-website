<template>
  <section class="pricing-section py-5 bg-transparent">
    <div class="container">
      <div class="row g-4">
        <div
          v-for="(option, index) in pricingOptions"
          :key="index"
          class="col-md-4"
        >
          <div class="pricing-card p-4 text-center shadow-sm rounded bg-white">
            <h3 class="mb-4 fs-1 fw-bold">${{ option.price }}</h3>
            <p class="mb-4 fw-bold">{{ option.planName }}</p>
            <ul class="list-unstyled mb-4">
              <li
                v-for="(feature, i) in option.features"
                :key="i"
                class="rounded bg-light p-4 fw-bold mb-2"
              >
                {{ feature }}
              </li>
            </ul>
            <button
              @click="addToCart(option)"
              class="btn btn-danger fw-bold px-4"
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { defineProps } from "vue";
import { useCartStore } from "../stores/cartStore";

const props = defineProps({
  pricingOptions: {
    type: Array,
    required: true,
  },
});

const cartStore = useCartStore();

const addToCart = (option) => {
  cartStore.addItem(option);
};
</script>

<style scoped>
.pricing-section {
  margin-top: -150px;
}

.pricing-card {
  background-color: white;
  border-radius: 0.5rem;
  padding: 1.5rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.bg-light {
  background-color: #f8f9fa;
}

.rounded {
  border-radius: 0.375rem;
}

.btn {
  margin-top: 10px;
}
</style>
