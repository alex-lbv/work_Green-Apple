var menuBtn = document.querySelector(".js-btn-toggle");

if (menuBtn !== null && document.querySelector(".menu__cats") !== null) {
  document.addEventListener("click", function (ev) {
    if (
      !ev.target.classList.contains("menu__cats-name") &&
      !ev.target.classList.contains("menu__subcats-name") &&
      !ev.target.classList.contains("menu__btn") &&
      !ev.target.classList.contains("menu__btn-icon") &&
      !ev.target.classList.contains("menu__btn-text") &&
      !(ev.target.nodeName === 'use')
    ) {
      document
        .querySelector(".menu__cats")
        .classList.remove("menu__cats--showed");
      menuBtn.classList.remove("menu__btn--shown");
    }
  });
  menuBtn.addEventListener("click", function () {
    this.classList.toggle("menu__btn--shown");
    document
      .querySelector(".menu__cats")
      .classList.toggle("menu__cats--showed");
  });

  document.querySelector(".menu__cats").addEventListener("click", function (e) {
    if (e.target.classList.contains("menu__cats-name--dropdown")) {
      var content = e.target.nextElementSibling;

      if (content.style.maxHeight) {
        content.style.maxHeight = null;
      } else {
        content.style.maxHeight = content.scrollHeight + "px";
      }
    }
  });
}