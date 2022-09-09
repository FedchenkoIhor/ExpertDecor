// GLOBAL VARIABLES //

// VARIABLES FOR NAVIGATION //
const btnOpen = document.querySelector(".btn--open");
const btnClose = document.querySelector(".btn--close");
const nav = document.querySelectorAll(".nav");

// SET CURRENT YEAR IN FOOTER
const yearEl = document.querySelector(".year");
const currentYear = new Date().getFullYear();
yearEl.textContent = currentYear;

//  CLOSE NAVBAR //
const closeNavbar = function () {
  document.querySelector(".overlay").classList.add("hidden");
  document.body.style.overflow = "auto";
  nav.forEach((navEl) => navEl.classList.remove("visible"));
};

// CLOSE NAVBAR ON CLICK OUTSIDE
document.addEventListener("click", (event) => {
  console.log(event.target.className);
  if (!event.target.classList.contains("nav--open")) {
    if (document.querySelector(".nav").classList.contains("visible")) {
      console.log("test");
      closeNavbar();
    }
  }
});

// CLOSE NAVBAR CLICK CLOSE BUTTON
btnClose.addEventListener("click", closeNavbar);

// OPEN NAVBAR //
btnOpen.addEventListener("click", () => {
  console.log("open");
  document.querySelector(".overlay").classList.remove("hidden");
  document.body.style.overflow = "hidden";
  nav.forEach((navEl) => navEl.classList.add("visible"));
});

// STICKY NAVIGATION
const sectionHeroEl = document.querySelector(".hero-section");
const btnMobileMenu = document.querySelector(".btn--mobile-menu");
const btnHome = document.querySelector(".btn--home");
const btnShowHidde = (elem, event) => {
  elem.style.display = event;
};

const obs = new IntersectionObserver(
  (entiers) => {
    const ent = entiers[0];
    if (screen.width > 944) {
      if (!ent.isIntersecting) {
        document.body.classList.add("sticky");
        btnShowHidde(btnMobileMenu, "inline-flex");
        btnShowHidde(btnHome, "inline-flex");
      } else {
        document.body.classList.remove("sticky");
        btnShowHidde(btnMobileMenu, "none");
        btnShowHidde(btnHome, "none");
      }
    } else {
      document.body.classList.add("sticky");
      if (!ent.isIntersecting) {
        btnShowHidde(btnHome, "inline-flex");
      } else {
        document.body.classList.remove("sticky");
        btnShowHidde(btnHome, "none");
      }
    }
  },
  {
    root: null,
    threshold: 0,
    rootMargin: "-80px",
  }
);
obs.observe(sectionHeroEl);

// SWIPER SLIDER
const swiper = new Swiper(".mySwiper", {
  spaceBetween: 32,
  slidesPerView: 1,
  breakpoints: {
    // when window width is >= 944px
    944: {
      slidesPerView: 2,
    },
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

const swiper2 = new Swiper(".mySwiper2", {
  direction: "vertical",
  spaceBetween: 32,
  mousewheel: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

const swiper3 = new Swiper(".mySwiper3", {
  centeredSlides: true,
  slidesPerView: 3,
  loop: true,
  freeMode: true,
  loopFillGroupWithBlank: true,
  speed: 5000,
  autoplay: {
    delay: 100,
    disableOnInteraction: false,
  },
});
