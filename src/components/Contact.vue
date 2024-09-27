<script setup>
import ContactForm from "./ContactForm.vue";
</script>

<template>
  <section class="contact-section">
    <div class="container">
      <div class="row">
        <!-- Contact Details -->
        <div class="col-md-6 mb-4 mb-md-0 mt-5">
          <h3 class="mb-4 fw-bold fs-2">Contact Us</h3>
          <p class="mb-2 fw-bold fs-5 text-danger">Address:</p>
          <p class="text-dark fs-5 fw-bold mb-3">
            123 The Lane, Sydney, Australia
          </p>

          <p class="mb-2 fw-bold fs-5 text-danger">Phone:</p>
          <p class="text-dark fs-5 fw-bold mb-3">0412345678</p>

          <p class="mb-2 fw-bold fs-5 text-danger">Email:</p>
          <p class="text-dark fs-5 fw-bold mb-3">contact@nextlead.com.au</p>
        </div>

        <!-- Contact Form -->
        <div class="col-md-6">
          <div class="p-5 bg-light contact-form">
            <h3 class="mb-4 fw-bold fs-2">Ask Us A Question</h3>
            <ContactForm />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.contact-section {
  padding: 2rem;
  background-color: #f7c6c7;
}

.contact-form {
  border-radius: 10px;
}

.form-control {
  border: 0;
}

.btn {
  margin-top: 20px;
}
</style>
