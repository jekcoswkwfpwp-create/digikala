const storySwiper = new Swiper(".storySwiper", {
  direction: "horizontal",
  rtl: true,
  slidesPerView: 8,
  spaceBetween: 25,

  breakpoints: {
    320: {
      slidesPerView: 3,
      spaceBetween: 15,
    },

    576: {
      slidesPerView: 4,
      spaceBetween: 20,
    },

    768: {
      slidesPerView: 6,
      spaceBetween: 20,
    },

    992: {
      slidesPerView: 8,
      spaceBetween: 25,
    },
  },
});

const sliderSwiper = new Swiper(".sliderSwiper", {
  slidesPerView: 1,
  spaceBetween: 0,
  loop: true,

  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },

  speed: 700,
});

const scrollSwiper = new Swiper(".scrollSwiper", {
  slidesPerView: 1,
  spaceBetween: 0,
  loop: true,

  autoplay: {
    delay: 2000,
    disableOnInteraction: false,
  },

  speed: 700,

  breakpoints: {
    576: {
      slidesPerView: 2,
    },

    768: {
      slidesPerView: 3,
    },

    992: {
      slidesPerView: 4,
    },

    1200: {
      slidesPerView: 5,
    },
  },
});

document.addEventListener("DOMContentLoaded", function () {
  const moreButton = document.querySelector(".footer__more-btn");
  const textBox = document.querySelector(".footer__text");
  const moreText = document.querySelector(".footer__more");
  const moreIcon = document.querySelector(".footer__more-icon");

  if (!moreButton || !textBox || !moreText || !moreIcon) {
    return;
  }

  moreButton.addEventListener("click", function () {
    if (textBox.classList.contains("footer__text--open")) {
      textBox.style.maxHeight = "14rem";

      textBox.classList.remove("footer__text--open");

      moreText.textContent = "مشاهده بیشتر";

      moreIcon.classList.remove("fa-chevron-up");
      moreIcon.classList.add("fa-chevron-left");
    } else {
      const fullHeight = textBox.scrollHeight;

      textBox.style.maxHeight = fullHeight + "px";

      textBox.classList.add("footer__text--open");

      moreText.textContent = "بستن";

      moreIcon.classList.remove("fa-chevron-left");
      moreIcon.classList.add("fa-chevron-up");
    }
  });
});
