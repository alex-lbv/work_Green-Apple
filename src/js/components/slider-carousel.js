document.querySelectorAll(".swiper-good").forEach(function(slider, index) {
  slider.nextElementSibling.classList.add("btn-prev--" + index);
  slider.classList.add("swiper-good--" + index);
  slider.offsetParent.nextElementSibling.classList.add(
    "swiper-scrollbar--" + index
  );
  var currentSlider = document.querySelector(".swiper-good--" + index);
  window["swiper" + index] = new Swiper(".swiper-good--" + index, {
    slidesPerView: 4,
    spaceBetween: 10,
    scrollbar: {
      el: ".swiper-scrollbar--" + index,
      draggable: true,
      snapOnRelease: false
    },
    loop: window.innerWidth < 1179 ? false : true,
    navigation: {
      nextEl: ".btn-prev--" + index
    },
    loopAdditionalSlides: 2,
    setWrapperSize: true,
    breakpoints: {
      750: {
        slidesPerView: 1,
        spaceBetween: 5
      },
      980: {
        slidesPerView: 2,
        spaceBetween: 5
      },
      1179: {
        slidesPerView: 3,
        spaceBetween: 5
      }
    },
    on: {
      init: function() {
        calcCarouselHeight();
      },
      slideChangeTransitionStart: function() {
        if (window.innerWidth > 1178) return;
        if (window["swiper" + index].isEnd) {
          currentSlider.classList.add("swiper-container--last-shown");
        } else {
          currentSlider.classList.remove("swiper-container--last-shown");
        }
      }
    }
  });
});

function calcCarouselHeight() {
  document.querySelectorAll(".swiper-good").forEach(function(slider) {
    setTimeout(function() {
      slider.parentElement.style.maxHeight =
        window.innerWidth > 1178
          ? slider.children[0].children[0].offsetHeight + "px"
          : "none";
      slider.parentElement.parentElement.children[0].style.height =
        window.innerWidth > 1178
          ? slider.children[0].children[0].offsetHeight + "px"
          : "none";
    }, 500);
    // slider.parentElement.style.maxHeight =
    //   window.innerWidth > 1178 ? slider.offsetHeight - 150 + "px" : "none";
    // slider.parentElement.parentElement.children[0].style.height =
    //   window.innerWidth > 1178 ? slider.offsetHeight - 150 + "px" : "none";
    if (
      slider.parentElement.parentElement.children[0].classList.contains(
        "carousel__title--double"
      )
    ) {
      setTimeout(function() {
        slider.parentElement.parentElement.children[0].children[0].style.minWidth =
          window.innerWidth > 1178
            ? slider.children[0].children[0].offsetHeight + "px"
            : "none";
      }, 500);
    }
  });
}

var swipReview = new Swiper(".swiper-review", {
  slidesPerView: 2,
  spaceBetween: 10,
  scrollbar: {
    el: ".review-scrollbar",
    draggable: true,
    snapOnRelease: false
  },
  loop: window.innerWidth < 1179 ? false : true,
  navigation: {
    nextEl: ".review-button-next"
  },
  loopAdditionalSlides: 2,
  breakpoints: {
    750: {
      slidesPerView: 1,
      spaceBetween: 5
    },
    980: {
      slidesPerView: 2,
      spaceBetween: 5
    }
  },
  on: {
    init: function() {
      var sliderHeight = this.height + 5;
      var contentHeight = (window.innerWidth > 1178) ? 195 : 270;
      document
        .querySelectorAll(".carousel-reviews .review")
        .forEach(function(slide) {
          if (slide.querySelector('.review__content').clientHeight < contentHeight) {
            slide
              .querySelector(".review__link")
              .classList.add("review__link--hidden");
          }
        });
    },
    slideChangeTransitionStart: function() {
      if (window.innerWidth > 1178) return;
      if (swipReview.isEnd) {
        document
          .querySelector(".swiper-review")
          .classList.add("swiper-container--last-shown");
      } else {
        document
          .querySelector(".swiper-review")
          .classList.remove("swiper-container--last-shown");
      }
    }
  }
});

var mainSlider = new Swiper(".swiper-main", {
  spaceBetween: 20,
  loop: true,
  navigation: {
    nextEl: ".main-slider__button--next",
    prevEl: ".main-slider__button--prev"
  }
});

var filterTop = new Swiper(".filter-top-swiper", {
  slidesPerView: "auto",
  freeMode: true,
  watchOverflow: true,
  navigation: {
    nextEl: ".filter-top__button--next",
    prevEl: ".filter-top__button--prev"
  }
});

var galleryThumbs = new Swiper(".gallery-thumbs", {
  spaceBetween: window.innerWidth < 1179 ? 10 : 7,
  slidesPerView: 5,
  freeMode: true,
  loop: this.slidesPerView > 5 ? true : false,
  loopAdditionalSlides: 2,
  watchSlidesVisibility: true,
  watchSlidesProgress: true,
  direction: "vertical",
  navigation: {
    nextEl: ".gallery-thumbs__button-next",
    prevEl: ".gallery-thumbs__button-prev"
  }
});
var galleryTop = new Swiper(".gallery-top", {
  slidesPerView: 1,
  loop: true,
  effect: "fade",
  thumbs: {
    swiper: galleryThumbs
  }
});

var basketSlider = new Swiper(".swiper-basket", {
  spaceBetween: 20,
  loop: true,
  loopAdditionalSlides: 2,
  navigation: {
    nextEl: ".swiper-button-next"
  }
});

var tabsSwiper = new Swiper(".tabs-swiper", {
  slidesPerView: "auto",
  freeMode: true,
  // slideToClickedSlide: true,
  // centeredSlides: true
  on: {
    click: function() {
      // var winWidth = window.innerWidth;
      // var theMiddle = winWidth / 2;
      var slideIn = this.clickedIndex;
      // var slideWidth = this.slides[slideIn].offsetWidth;
      // var leftOff = this.slides[slideIn].offsetLeft;
      // var currentTranslate = this.getTranslate();
      // var newTranslate =
      //   slideIn === 0 ? 0 : 0 - leftOff + theMiddle - slideWidth / 2;
      // this.setTranslate(newTranslate);
      // console.log(this.translate);
      tabsSwiper.slideTo(slideIn);
    }
  }
});

var mainNews = new Swiper(".swiper-news", {
  slidesPerView: "auto",
  freeMode: true,
  slidesPerView: 4,
  breakpoints: {
    750: {
      slidesPerView: 1
    },
    900: {
      slidesPerView: 2
    },
    1178: {
      slidesPerView: 3
    }
  },
  scrollbar: {
    el: ".news-scrollbar",
    draggable: true,
    snapOnRelease: false
  }
});

window.addEventListener("resize", function(event) {
  calcCarouselHeight();
});
