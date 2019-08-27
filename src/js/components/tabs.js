{
  function showTab(evt, tabName) {
    var tabcontent;

    // Get all elements with class="tabs__content" and hide them
    tabcontent = document.querySelectorAll(".tabs__content");
    tabcontent.forEach(function(content) {
      content.classList.remove("tabs__content--visible");
    });

    // Show the current tab, and add an "visible" class to the button that opened the tab
    document.getElementById(tabName).classList.add("tabs__content--visible");
  }
  if(document.querySelector(".js-open-review") !== null) {
    var reviewLink = document.querySelector(".js-open-review");
    reviewLink.addEventListener("click", function() {
      document
        .querySelector(".tabs__content--visible")
        .classList.remove("tabs__content--visible");
      document.getElementById("review").classList.add("tabs__content--visible");
      document
        .querySelectorAll(".tabs__container .tabs__btn")
        .forEach(function(tab) {
          if (tab.classList.contains("tabs__btn--active"))
            tab.classList.remove("tabs__btn--active");
          if (tab.dataset.tab == "review")
            tab.classList.add("tabs__btn--active");
        });
      if (window.outerWidth < 1179) {
        tabsSwiper.slideTo(2);
      }
    });
  }
  if (document.querySelector(".tabs__container") !== null) {
    
    document
      .querySelector(".tabs__container")
      .addEventListener("click", function(e) {
        e.preventDefault();
        if (e.target.classList.contains("tabs__btn")) {
          var tabName = e.target.dataset.tab;
          showTab(e.target, tabName);

          var tablinks = document.querySelectorAll(".tabs__btn");
          tablinks.forEach(function(tab) {
            tab.classList.remove("tabs__btn--active");
          });
          e.target.classList.add("tabs__btn--active");
        }
      });
  }
}
