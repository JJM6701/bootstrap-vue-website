<template>
  <div class="cart-page container py-5">
    <h2 class="mb-5">Your Shopping Cart</h2>
    <div v-if="cartItems.length === 0">
      <p>Your cart is empty.</p>
    </div>
    <div v-else>
      <table class="table table-bordered">
        <thead>
          <tr>
            <th>Plan Name</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Total</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in cartItems" :key="item.planName">
            <td>{{ item.planName }}</td>
            <td>${{ item.price }}</td>
            <td>{{ item.quantity }}</td>
            <td>${{ (item.price * item.quantity).toFixed(2) }}</td>
            <td>
              <button @click="removeItem(item.planName)" class="btn btn-danger">
                Remove
              </button>
            </td>
          </tr>
        </tbody>
      </table>
      <div class="cart-summary text-end">
        <p><strong>Total Items:</strong> {{ itemCount }}</p>
        <p><strong>Total Price:</strong> ${{ cartTotal.toFixed(2) }}</p>
        <button @click="clearCart" class="btn btn-warning">Clear Cart</button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from "vue";
import { useCartStore } from "../stores/cartStore";

const cartStore = useCartStore();

const cartItems = computed(() => cartStore.items);
const itemCount = computed(() => cartStore.itemCount);
const cartTotal = computed(() => cartStore.cartTotal);

const removeItem = (planName) => cartStore.removeItem(planName);
const clearCart = () => cartStore.clearCart();
</script>

<style scoped>
.cart-page {
  margin-top: 20px;
}

.cart-summary {
  margin-top: 20px;
}
</style>
