<template>
  <div class="container mt-5 container-style">
    <form @submit.prevent="handleSubmit">
      <div class="row mb-3">
        <div class="col">
          <label for="name" class="form-label">Name:</label>
          <input
            type="text"
            id="name"
            v-model="formData.name"
            required
            class="form-control"
          />
        </div>
        <div class="col">
          <label for="email" class="form-label">Email:</label>
          <input
            type="email"
            id="email"
            v-model="formData.email"
            required
            class="form-control"
          />
        </div>
      </div>

      <div class="form-check mb-3">
        <input
          class="form-check-input"
          type="checkbox"
          id="terms"
          v-model="formData.termsAccepted"
          required
        />
        <label class="form-check-label" for="terms">
          Accept Terms and Conditions
        </label>
        <div class="mt-1 checked-text">
          {{ formData.termsAccepted ? "Checked" : "Unchecked" }}
        </div>
      </div>

      <div class="mb-3">
        <label class="form-label">Gender:</label>
        <div>
          <div class="form-check">
            <input
              class="form-check-input"
              type="radio"
              name="gender"
              id="genderMale"
              value="Male"
              v-model="formData.gender"
              required
            />
            <label class="form-check-label" for="genderMale"> Male </label>
          </div>
          <div class="form-check">
            <input
              class="form-check-input"
              type="radio"
              name="gender"
              id="genderFemale"
              value="Female"
              v-model="formData.gender"
              required
            />
            <label class="form-check-label" for="genderFemale"> Female </label>
          </div>
          <div class="form-check">
            <input
              class="form-check-input"
              type="radio"
              name="gender"
              id="genderOther"
              value="Other"
              v-model="formData.gender"
              required
            />
            <label class="form-check-label" for="genderOther"> Other </label>
          </div>
        </div>
        <div class="mt-1 selected-text">
          Selected Gender: {{ formData.gender }}
        </div>
      </div>

      <div class="mb-3">
        <label for="country" class="form-label">Country:</label>
        <select
          id="country"
          v-model="formData.country"
          required
          class="form-select"
        >
          <option disabled value="">Please select one</option>
          <option v-for="option in countries" :key="option" :value="option">
            {{ option }}
          </option>
        </select>
        <div class="mt-1 selected-text">
          Selected Country: {{ formData.country }}
        </div>
      </div>

      <div class="mb-3">
        <label for="age" class="form-label">Age:</label>
        <input
          type="number"
          id="age"
          v-model.number="formData.age"
          required
          class="form-control"
        />
        <div class="mt-1 selected-text">Age: {{ formData.age }}</div>
      </div>

      <button type="submit" class="btn btn-danger">Submit</button>

      <div v-if="formSubmitted" class="alert alert-success mt-3" role="alert">
        Form submitted successfully!
      </div>
    </form>
  </div>
</template>

<script setup>
import { ref } from "vue";

const formData = ref({
  name: "",
  email: "",
  termsAccepted: false,
  gender: "",
  country: "",
  age: null,
});

const countries = ["USA", "Canada", "Australia", "UK", "Germany"];

const formSubmitted = ref(false);

const handleSubmit = () => {
  formSubmitted.value = true;
  console.log("Form data submitted:", formData.value);
};
</script>

<style scoped>
.checked-text {
  font-style: italic;
  color: #6c757d;
}

.selected-text {
  font-weight: bold;
  color: #495057;
}
</style>
