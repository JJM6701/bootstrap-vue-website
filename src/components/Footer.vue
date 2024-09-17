<template>
  <footer class="bg-light py-4">
    <div class="container">
      <div class="row align-items-center">
        <!-- Logo Section -->
        <div class="col-md-3 text-center text-md-start mb-3 mb-md-0">
          <a href="index.html">
            <img src="../assets/logo.png" alt="Logo" class="img-fluid" />
          </a>
        </div>

        <!-- Navigation Links -->
        <div class="col-md-6 text-center mb-3 mb-md-0">
          <ul class="list-inline mb-0">
            <li class="list-inline-item mx-3">
              <a
                href="pages/services.html"
                class="text-dark fw-bold text-decoration-none"
              >
                Services
              </a>
            </li>
            <li class="list-inline-item mx-3">
              <a
                href="pages/studies.html"
                class="text-dark fw-bold text-decoration-none"
              >
                Case Studies
              </a>
            </li>
            <li class="list-inline-item mx-3">
              <a
                href="pages/about.html"
                class="text-dark fw-bold text-decoration-none"
              >
                About
              </a>
            </li>
            <li class="list-inline-item mx-3">
              <a
                href="pages/contact.html"
                class="text-dark fw-bold text-decoration-none"
              >
                Contact
              </a>
            </li>
          </ul>
        </div>

        <!-- Social Media Links -->
        <div class="col-md-3 text-center text-md-end">
          <a href="#" class="text-dark mx-2"><i class="bi bi-facebook"></i></a>
          <a href="#" class="text-dark mx-2"><i class="bi bi-linkedin"></i></a>
          <a href="#" class="text-dark mx-2"><i class="bi bi-instagram"></i></a>
        </div>
      </div>
    </div>
  </footer>
</template>

<style scoped>
img {
  max-width: 100px;
  border-radius: 4px;
}

.text-dark {
  color: #343a40;
}

a.text-dark:hover {
  color: #007bff;
}

.bi {
  font-size: 1.5rem;
  transition: color 0.3s;
}

.bi:hover {
  color: #007bff;
}
</style>
