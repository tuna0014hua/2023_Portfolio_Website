//  ===================== menu show Y hidden =====================
const navMenu = document.getElementById('navMenu');
const navToggle = document.getElementById('navToggle');
const navClose = document.getElementById('navClose');

// menu show =====================
if (navToggle) {
  navToggle.addEventListener('click', () => {
    navMenu.classList.add('show-menu');
  });
}

// menu hidden =====================
if (navClose) {
  navClose.addEventListener('click', () => {
    navMenu.classList.remove('show-menu');
  });
}

// ===================== remove menu mobile =====================
const navLink = document.querySelectorAll('.nav_link');

function linkAction() {
  const navMenu = document.getElementById('navMenu');
  // When we click on each nav_link, we remove the show-menu class
  navMenu.classList.remove('show-menu');
}
navLink.forEach((n) => n.addEventListener('click', linkAction));

// ===================== qualification tabs =====================
const tabs = document.querySelectorAll('[data-target]');
const tabContents = document.querySelectorAll('[data-content]');

tabs.forEach((tab) => {
  tab.addEventListener('click', () => {
    const target = document.querySelector(tab.dataset.target);

    tabContents.forEach((tabContent) => {
      tabContent.classList.remove('qualification_content-active');
    });
    target.classList.add('qualification_content-active');

    tabs.forEach((tab) => {
      tab.classList.remove('qualification_active');
    });
    tab.classList.add('qualification_active');
  });
});

// ===================== portfolio  swiper =====================
let swiper = new Swiper('.portfolio_container', {
  cssMode: true,
  // loop: true,
  mousewheel: {
    releaseOnEdges: true,
    sensitivity: 0,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
    // disabledClass: 'disabled_swiper_button',
  },
  pagination: {
    el: '.swiper-pagination',
    // clickable: true,
  },
  breakpoints: {
    640: {
      // slidesPerGroup: 1,
      slidesPerView: 1,
      spaceBetween: 30,
    },
    768: {
      // slidesPerGroup: 2,
      slidesPerView: 2,
      spaceBetween: 20,
    },
    1024: {
      // slidesPerGroup: 2,
      slidesPerView: 3,
      spaceBetween: 20,
    },
  },
});

// ===================== scroll up =====================
function scrollUp() {
  const scrollUp = document.getElementById('scrollUp');

  if (this.scrollY >= 360) scrollUp.classList.add('show-scroll');
  else scrollUp.classList.remove('show-scroll');
}

window.addEventListener('scroll', scrollUp);

// ===================== scroll section active link =====================
const sections = document.querySelectorAll('section[id]');

function scrollActive() {
  const scrollY = window.pageYOffset;

  sections.forEach((current) => {
    const sectionHeight = current.offsetHeight;
    const sectionTop = current.offsetTop - 50;
    sectionId = current.getAttribute('id');
    // console.log((sectionId = current.getAttribute('id')));

    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      document.querySelector('.nav_menu a[href*=' + sectionId + ']').classList.add('active-link');
    } else {
      document.querySelector('.nav_menu a[href*=' + sectionId + ']').classList.remove('active-link');
    }
  });
}

window.addEventListener('scroll', scrollActive);

// ===================== change background header =====================
function scrollHeader() {
  const nav = document.getElementById('header');

  if (this.scrollY >= 80) nav.classList.add('scroll-header');
  else nav.classList.remove('scroll-header');
}

window.addEventListener('scroll', scrollHeader);

/*==================== dark light theme ====================*/
const themeButton = document.getElementById('theme-button');
const darkTheme = 'dark-theme';
const iconTheme = 'uil-sun';

// Previously selected topic (if user selected)
const selectedTheme = localStorage.getItem('selected-theme');
const selectedIcon = localStorage.getItem('selected-icon');

// We obtain the current theme that the interface has by validating the dark-theme class
const getCurrentTheme = () => (document.body.classList.contains(darkTheme) ? 'dark' : 'light');
const getCurrentIcon = () => (themeButton.classList.contains(iconTheme) ? 'uil-moon' : 'uil-sun');

// We validate if the user previously chose a topic
if (selectedTheme) {
  // If the validation is fulfilled, we ask what the issue was to know if we activated or deactivated the dark
  document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme);
  themeButton.classList[selectedIcon === 'uil-moon' ? 'add' : 'remove'](iconTheme);
}

// Activate / deactivate the theme manually with the button
themeButton.addEventListener('click', () => {
  // Add or remove the dark / icon theme
  document.body.classList.toggle(darkTheme);
  themeButton.classList.toggle(iconTheme);
  // We save the theme and the current icon that the user chose
  localStorage.setItem('selected-theme', getCurrentTheme());
  localStorage.setItem('selected-icon', getCurrentIcon());
});
