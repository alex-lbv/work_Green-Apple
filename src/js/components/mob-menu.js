var mobMenuOpen = document.querySelectorAll(".js-mob-menu-open");
if (mobMenuOpen !== null) {
  mobMenuOpen.forEach(function(openBtn) {
    openBtn.addEventListener("click", function() {
      if (window.innerWidth < 1179) {
        this.classList.toggle("js-mob-menu-open--shown");
        this.nextSibling.nextSibling.classList.toggle("js-mob-menu--shown");
      }
    });
  });
}
