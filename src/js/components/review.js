if (document.querySelector(".review__link") !== null) {
  document.querySelectorAll(".review__link").forEach(function(link) {
    link.addEventListener("click", function(e) {
      var text = this.classList.contains("review__link--opposite")
        ? "Еще"
        : "Скрыть";
      this.textContent = text;
      this.classList.toggle("review__link--opposite");
      this.parentNode.previousSibling.previousSibling.classList.toggle(
        "review__content--full"
      );
    });
  });
}
