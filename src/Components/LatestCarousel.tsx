function LatestCarousel() {
  return (
    <div
      id="carouselExample"
      className="carousel slide position-relative w-75 start-50 translate-middle-x"
    >
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img
            src="./src/assets/pexels-photo-356040.webp"
            className="d-block w-100 img-fluid"
            alt="..."
          />
        </div>
        <div className="carousel-item">
          <img
            src="./src/assets/pexels-photo-3376790.webp"
            className="d-block w-100 img-fluid"
            alt="..."
          />
        </div>
        <div className="carousel-item">
          <img
            src="./src/assets/pexels-photo-668298.jpeg"
            className="d-block w-100 img-fluid"
            alt="..."
          />
        </div>
      </div>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExample"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExample"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
}

export default LatestCarousel;
