import { defineStore } from "pinia";

export const useCartStore = defineStore("cart", {
  state: () => ({
    items: [],
  }),

  actions: {
    addItem(item) {
      const existingItem = this.items.find((i) => i.planName === item.planName);
      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        this.items.push({ ...item, quantity: 1 });
      }
    },
    removeItem(planName) {
      this.items = this.items.filter((item) => item.planName !== planName);
    },
    clearCart() {
      this.items = [];
    },
  },

  getters: {
    itemCount: (state) =>
      state.items.reduce((count, item) => count + item.quantity, 0),
    cartTotal: (state) =>
      state.items.reduce(
        (total, item) => total + parseFloat(item.price) * item.quantity,
        0
      ),
  },
});
