const headerNav = document.querySelector(".header__nav");
const navLinks = document.querySelector(".nav__links");
const menuBtn = document.querySelector(".menu-btn");

// console.log(headerNavHeight);

menuBtn.addEventListener("click", () => {
  const headerNavHeight = headerNav.getBoundingClientRect().height;
  const navLinksHeight = navLinks.getBoundingClientRect().height;

  headerNavHeight == 0
    ? (headerNav.style.height = `${navLinksHeight}px`)
    : (headerNav.style.height = 0);
});
