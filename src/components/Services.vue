<template>
  <section class="bg-transparent">
    <div class="container" style="margin-top: -50px">
      <div class="card shadow-sm p-4">
        <!-- Service Buttons -->
        <div class="d-flex mb-3 gap-2">
          <button
            class="btn btn-light text-secondary fw-bold fs-3 flex-grow-1 py-2 py-md-3"
            data-bs-target="#serviceCarousel"
            data-bs-slide-to="0"
          >
            Google Ads
          </button>
          <button
            class="btn btn-light text-secondary fw-bold fs-3 flex-grow-1 py-2 py-md-3"
            data-bs-target="#serviceCarousel"
            data-bs-slide-to="1"
          >
            SEO
          </button>
          <button
            class="btn btn-light text-secondary fw-bold fs-3 flex-grow-1 py-2 py-md-3"
            data-bs-target="#serviceCarousel"
            data-bs-slide-to="2"
          >
            Social Media
          </button>
        </div>

        <!-- Carousel -->
        <div
          id="serviceCarousel"
          class="carousel slide"
          data-bs-ride="carousel"
        >
          <div class="carousel-inner py-2 px-4">
            <!-- Service 1 -->
            <div class="carousel-item active">
              <div class="row align-items-center">
                <div
                  class="col-md-6 d-flex flex-column justify-content-center align-items-start px-2"
                >
                  <h4 class="display-4 mb-3 fw-bold">Google Ads</h4>
                  <p class="text-secondary fs-5 mb-4">
                    Maximize your business reach with Google Ads. Drive traffic,
                    boost conversions, and get ahead of your competitors.
                  </p>
                  <RouterLink
                    to="/services/google-ads"
                    class="btn btn-danger fw-bold py-3"
                  >
                    Our Packages
                  </RouterLink>
                </div>
                <div class="col-md-6">
                  <img
                    src="../assets/googleads.png"
                    class="img-fluid rounded my-5"
                    alt="Service 1 Image"
                  />
                </div>
              </div>
            </div>

            <!-- Service 2 -->
            <div class="carousel-item">
              <div class="row align-items-center">
                <div
                  class="col-md-6 d-flex flex-column justify-content-center align-items-start px-2"
                >
                  <h4 class="display-4 mb-3 fw-bold">SEO</h4>
                  <p class="text-secondary fs-5 mb-4">
                    Maximize your business reach with Google Ads. Drive traffic,
                    boost conversions, and get ahead of your competitors.
                  </p>
                  <RouterLink
                    to="/services/seo"
                    class="btn btn-danger fw-bold py-3"
                  >
                    Our Packages
                  </RouterLink>
                </div>
                <div class="col-md-6">
                  <img
                    src="../assets/seo.png"
                    class="img-fluid rounded my-5"
                    alt="Service 2 Image"
                  />
                </div>
              </div>
            </div>

            <!-- Service 3 -->
            <div class="carousel-item">
              <div class="row align-items-center">
                <div
                  class="col-md-6 d-flex flex-column justify-content-center align-items-start px-2"
                >
                  <h4 class="display-4 mb-3 fw-bold">Social Media</h4>
                  <p class="text-secondary fs-5 mb-4">
                    Maximize your business reach with Google Ads. Drive traffic,
                    boost conversions, and get ahead of your competitors.
                  </p>
                  <RouterLink
                    to="/services/social-media"
                    class="btn btn-danger fw-bold py-3"
                  >
                    Our Packages
                  </RouterLink>
                </div>
                <div class="col-md-6">
                  <img
                    src="../assets/socialmedia.png"
                    class="img-fluid rounded my-5"
                    alt="Service 3 Image"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.services-section {
  background-color: #f8f9fa;
}

.services-section .card {
  background-color: #ffffff;
  border-radius: 0.5rem;
  border: none;
}

.services-section .btn {
  width: 150px;
  border-radius: 0.375rem;
  text-transform: uppercase;
}

.services-section .carousel-item {
  padding: 30px 0;
}

.services-section h4 {
  font-weight: bold;
  margin-bottom: 15px;
}

.services-section p {
  font-size: 1rem;
  color: #6c757d;
}
</style>
