<script>
export default {
  data() {
    return {
      videoSrc: "../video_site/Los_Angeles_Laker.mp4",
    };
  },
};
</script>

<template>
  <div class="home">
    <div class="container col-lg-9">
      <div
        id="carouselExampleAutoplaying"
        class="carousel slide"
        data-bs-ride="carousel"
      >
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img
              src="../image_site/Lakers.jpg"
              class="d-block w-100"
              alt="Lakers"
              id="carousel_img"
            />
          </div>
          <div class="carousel-item">
            <img
              src="../image_site/Lebron.jpeg"
              id="carousel_img"
              class="d-block w-100"
              alt="Lebron James qui dunk"
            />
          </div>
          <div class="carousel-item">
            <img
              src="../image_site/Lebron_dribble.jpg"
              class="d-block w-100"
              alt="Lebron James qui dribble"
              id="carousel_img"
            />
          </div>
        </div>
        <button
          class="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleAutoplaying"
          data-bs-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button
          class="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleAutoplaying"
          data-bs-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  </div>
</template>

<style>
#carouselExampleAutoplaying {
  min-height: 100vh;
  display: flex;
  align-items: center;
}

#carousel_img {
  filter: blur(3px);
  height: 35em;
}
.carousel-caption {
  background: rgba(255, 255, 255, 0.4);
  border-radius: 20px;
}
</style>
