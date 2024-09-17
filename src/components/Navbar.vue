<script setup>
import { defineEmits } from "vue";

const emit = defineEmits(["page-change"]);

const changePage = (page) => {
  emit("page-change", page);
};
</script>

<template>
  <nav class="navbar navbar-expand-md px-md-4 py-3 bg-light">
    <div class="container d-flex justify-content-between align-items-center">
      <a class="navbar-brand" href="" @click.prevent="changePage('IndexView')">
        <img
          src="../assets/logo.png"
          alt="Logo"
          class="img-fluid"
          style="max-width: 100px; border-radius: 4px"
        />
      </a>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div
        class="collapse navbar-collapse justify-content-between"
        id="navbarNav"
      >
        <ul
          class="navbar-nav mx-auto fw-bold d-flex justify-content-center gap-md-4"
        >
          <li class="nav-item">
            <a
              class="nav-link"
              href="#"
              @click.prevent="changePage('ServicesView')"
            >
              Service
            </a>
          </li>
          <li class="nav-item">
            <a
              class="nav-link"
              href="#"
              @click.prevent="changePage('AboutView')"
            >
              About
            </a>
          </li>
          <li class="nav-item">
            <a
              class="nav-link"
              href="#"
              @click.prevent="changePage('StudiesView')"
            >
              Case Studies
            </a>
          </li>
        </ul>
        <ul
          class="navbar-nav d-flex align-items-center gap-md-4 gap-2 mt-2 mt-md-0"
        >
          <li class="nav-item">
            <a class="nav-link" href="#">
              <i
                class="bi bi-search"
                style="text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.158)"
              ></i>
            </a>
          </li>
          <li class="nav-item">
            <a
              class="btn btn-danger fs-6 fw-bold px-4"
              href="#"
              style="border-radius: 20px"
              @click.prevent="changePage('ContactView')"
            >
              Contact Us
            </a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<style scoped>
.navbar-brand img {
  max-width: 100px;
  border-radius: 4px;
}

.navbar-nav {
  flex-direction: row;
  gap: 50px;
}

.navbar-nav.mx-auto {
  justify-content: center;
  flex-grow: 1;
}

.nav-link {
  padding-right: 4rem;
  padding-left: 4rem;
}

.d-flex .btn {
  border-radius: 20px;
}

@media (max-width: 768px) {
  .navbar-nav {
    flex-direction: column;
    align-items: flex-start;
  }

  .nav-link {
    padding-right: 0;
    padding-bottom: 0.5rem;
  }

  .d-flex {
    flex-direction: column;
    align-items: flex-start;
  }
}

nav {
  padding: 15px;
}
</style>
