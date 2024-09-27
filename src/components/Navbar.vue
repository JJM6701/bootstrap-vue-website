<template>
  <nav class="navbar navbar-expand-md px-md-4 py-3 bg-light">
    <div class="container d-flex justify-content-between align-items-center">
      <RouterLink to="/" class="navbar-brand d-flex align-items-center">
        <img
          src="../assets/logo.png"
          alt="Logo"
          class="img-fluid"
          style="max-width: 100px; border-radius: 4px"
        />
      </RouterLink>

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

      <div class="collapse navbar-collapse justify-content-end" id="navbarNav">
        <ul
          class="navbar-nav mx-auto fw-bold d-flex justify-content-center gap-md-4"
        >
          <li class="nav-item">
            <RouterLink class="nav-link" to="/services">Service</RouterLink>
          </li>
          <li class="nav-item">
            <RouterLink class="nav-link" to="/about">About</RouterLink>
          </li>
          <li class="nav-item">
            <RouterLink class="nav-link" to="/case-studies"
              >Case Studies</RouterLink
            >
          </li>
        </ul>

        <ul
          class="navbar-nav d-flex align-items-center gap-md-4 gap-2 mt-2 mt-md-0"
        >
          <li class="nav-item">
            <RouterLink
              class="btn btn-danger fs-6 fw-bold px-4"
              to="/contact"
              style="border-radius: 20px"
            >
              Contact Us
            </RouterLink>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<style scoped>
.navbar-brand img {
  height: 60px;
  max-width: 100px;
  border-radius: 4px;
}

.navbar-toggler {
  height: 60px;
  width: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0;
}

@media (max-width: 992px) {
  .container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0;
  }

  .navbar-brand img {
    height: 60px;
    width: auto;
    border-radius: 4px;
  }

  .navbar-toggler {
    height: 60px;
    width: 60px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .navbar-nav {
    flex-direction: row;
    align-items: center;
  }

  .d-flex {
    flex-direction: row;
    align-items: center;
  }

  .navbar-nav .nav-link {
    padding: 20px;
  }

  .navbar-collapse {
    width: 100%;
  }

  .navbar-nav .nav-item {
    margin: auto;
  }
}

nav {
  padding: 15px;
}
</style>
