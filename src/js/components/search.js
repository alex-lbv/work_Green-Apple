var search = document.querySelectorAll(".js-open-search");
var bg = document.querySelector(".bg");
var searchResult = document.querySelector(".search__result");

if (search !== null) {
  var isActivated = false;
  UIkit.util.on('.header__bottom', 'inactive', function () {
      if(window.innerWidth < 1179 && document.querySelector(".search--shown") && isActivated) {
          closeSearch(
              document.querySelector(".search--shown").parentNode.classList[0]
          );
      }
      isActivated = false; 
  });
  UIkit.util.on('.header__bottom', 'active', function () {
      isActivated = true;
      if(window.innerWidth < 1179 && document.querySelector(".search--shown")) {
          closeSearch(
              document.querySelector(".search--shown").parentNode.classList[0]
          );
      }
  });
  bg.addEventListener("click", function() {
    closeSearch(
      document.querySelector(".search--shown").parentNode.classList[0]
    );
  });

  search.forEach(function(searchBl) {
    searchBl.addEventListener("click", function(e) {
      var delayBg = (window.innerWidth < 1179 && document.querySelector('.header__bottom').classList.contains("uk-active")) ? 0 : 500;
      e.preventDefault();
      if (
        e.target.classList.contains("search__icon") ||
        e.srcElement.nodeName == "use"
      ) {
        closeSearch(this.parentNode.classList[0]);
        return;
      }
      if (bg.classList.contains("bg-visible")) return;
      var searchWrap = this.parentNode.classList[0] + "--active";
      this.parentNode.classList.add(searchWrap);
      this.classList.add("search--shown");
      this.querySelector(".search__input").focus();
      setTimeout(
        function() {
          this.classList.add("search--wide");
          bg.classList.add("bg-visible");
        }.bind(this),
        delayBg
      );
    });

    searchBl.addEventListener("keyup", function() {
      if (this.querySelector(".search__input").value.length == 0) {
        searchResult.classList.remove("search__result--visible");
        document
          .querySelector(".search--shown")
          .parentNode.classList.remove("search--resulted");
      } else {
        searchResult.classList.add("search__result--visible");
        document
          .querySelector(".search--shown")
          .parentNode.classList.add("search--resulted");
      }
    });
  });

  document.querySelector('.header__bottom').addEventListener('click', function(){
    if(window.innerWidth < 1179 && this.classList.contains('uk-sticky') 
        && document.querySelector('.header__search--top').classList.contains('search--shown')) {
      closeSearch(
        document.querySelector(".search--shown").parentNode.classList[0]
      );
    } 
  });

  function closeSearch(searchWrap) {
    var searchInput = document.querySelector('.'+ searchWrap +' .search__input');
    searchResult.classList.remove("search__result--visible");
    bg.classList.remove("bg-visible");
    searchInput.value = '';
    setTimeout(function() {
      document
        .querySelector(".search--shown")
        .parentNode.classList.remove("search--resulted");
      document
        .querySelector(".search--shown")
        .classList.remove("search--wide", "search--shown");
      document
        .querySelector("." + searchWrap + "")
        .classList.remove("" + searchWrap + "--active");
    }, 100);
  }
}
