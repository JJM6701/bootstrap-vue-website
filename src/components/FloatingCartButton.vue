<template>
  <div class="floating-cart-button">
    <RouterLink to="/cart" class="btn btn-danger position-relative">
      <i class="bi bi-cart-fill"></i>
      <span
        v-if="itemCount > 0"
        class="badge position-absolute top-0 start-100 translate-middle bg-warning text-dark"
      >
        {{ itemCount }}
      </span>
    </RouterLink>
  </div>
</template>

<script setup>
import { computed } from "vue";
import { useCartStore } from "../stores/cartStore";

const cartStore = useCartStore();

const itemCount = computed(() => cartStore.itemCount);
</script>

<style scoped>
.floating-cart-button {
  position: fixed;
  bottom: 20px;
  right: 20px;
  z-index: 1000;
}

.floating-cart-button .btn {
  width: 60px;
  height: 60px;
  border-radius: 50%;
  font-size: 24px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.floating-cart-button .badge {
  font-size: 12px;
  padding: 7px 10px;
  border-radius: 100%;
}
</style>
