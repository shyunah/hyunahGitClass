const menuToggle = document.querySelector(".menu-toggle");
const siteNav = document.querySelector(".site-nav");
const navLinks = document.querySelectorAll(".site-nav a");
const contactForm = document.querySelector(".contact-form");
const formStatus = document.querySelector(".form-status");
const currentYear = document.querySelector("#current-year");

currentYear.textContent = new Date().getFullYear();

menuToggle.addEventListener("click", () => {
  const isOpen = menuToggle.getAttribute("aria-expanded") === "true";
  menuToggle.setAttribute("aria-expanded", String(!isOpen));
  siteNav.classList.toggle("is-open", !isOpen);
});

navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    menuToggle.setAttribute("aria-expanded", "false");
    siteNav.classList.remove("is-open");
  });
});

contactForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const name = new FormData(contactForm).get("name");
  formStatus.textContent = `${name}님, 감사합니다! 곧 연락드리겠습니다.`;
  contactForm.reset();
});
