var filterBtn = document.querySelector(".js-filter-btn");
var filter = document.querySelector(".filter__wrap");

if (filterBtn !== null) {
  filterBtn.addEventListener("click", function() {
    this.classList.toggle("catalog__filter-btn--active");
    filter.classList.toggle("filter__wrap--showed");
  });

  document.addEventListener("click", function(ev) {
    if (
      !ev.target.matches(".catalog__filter-btn, .filter__wrap, .filter__wrap *")
    ) {
      filterBtn.classList.remove("catalog__filter-btn--active");
      filter.classList.remove("filter__wrap--showed");
    }
  });
}
