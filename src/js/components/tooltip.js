var linkOpen = document.querySelector(".price__link");

if (linkOpen !== null) {
  linkOpen.addEventListener("click", function(ev) {
    if (
      window.innerWidth < 1179 &&
      ev.target.classList.contains("price__link")
    ) {
      this.classList.toggle("price__link--shown");
    }
  });
  document.addEventListener("click", function(ev) {
    if (!ev.target.matches(".price__link, .price__link *")) {
      linkOpen.classList.remove("price__link--shown");
    }
  });
}
