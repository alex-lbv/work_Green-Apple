var carouselTab = document.querySelectorAll(".carousel__tab");

if (carouselTab !== null) {
  carouselTab.forEach(function(tab) {
    tab.addEventListener("click", function() {
      if (this.classList.contains("carousel__tab--active")) return;
      document
        .querySelector(".carousel__tab--active")
        .classList.remove("carousel__tab--active");
      this.classList.add("carousel__tab--active");
    });
  });
}
