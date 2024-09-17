<script setup>
import { ref } from "vue";

const name = ref("");
const email = ref("");
const question = ref("");

const errors = ref({
  name: "",
  email: "",
  question: "",
});

const validateForm = () => {
  errors.value.name = "";
  errors.value.email = "";
  errors.value.question = "";

  if (!name.value) errors.value.name = "Name is required";
  if (!email.value || !/\S+@\S+\.\S+/.test(email.value))
    errors.value.email = "Valid email is required";
  if (!question.value) errors.value.question = "Question is required";

  if (!errors.value.name && !errors.value.email && !errors.value.question) {
    alert("Form submitted!");

    name.value = "";
    email.value = "";
    question.value = "";
  }
};
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
            <form @submit.prevent="validateForm">
              <div class="row">
                <div class="col-md-6 mb-4">
                  <input
                    type="text"
                    class="form-control p-3"
                    v-model="name"
                    placeholder="Name"
                  />
                  <div id="nameMsg" v-if="errors.name" class="text-danger">
                    {{ errors.name }}
                  </div>
                </div>
                <div class="col-md-6 mb-4">
                  <input
                    type="email"
                    class="form-control p-3"
                    v-model="email"
                    placeholder="Email"
                  />
                  <div id="emailMsg" v-if="errors.email" class="text-danger">
                    {{ errors.email }}
                  </div>
                </div>
              </div>
              <div class="mb-4">
                <textarea
                  class="form-control p-3"
                  v-model="question"
                  rows="3"
                  placeholder="Question"
                ></textarea>
                <div
                  id="questionMsg"
                  v-if="errors.question"
                  class="text-danger"
                >
                  {{ errors.question }}
                </div>
              </div>
              <button type="submit" class="btn btn-danger p-3 fw-bold">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.contact-section {
  padding: 5rem 0;
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
