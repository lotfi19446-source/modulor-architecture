const navToggle = document.querySelector(".nav-toggle");
const mainNav = document.querySelector(".main-nav");
const contactForm = document.querySelector(".contact-form");

navToggle.addEventListener("click", () => {
  const isOpen = mainNav.classList.toggle("open");
  navToggle.setAttribute("aria-expanded", String(isOpen));
});

mainNav.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    mainNav.classList.remove("open");
    navToggle.setAttribute("aria-expanded", "false");
  });
});

contactForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const button = contactForm.querySelector("button");
  const originalText = button.textContent;

  button.textContent = "Demande recue";
  button.disabled = true;

  window.setTimeout(() => {
    button.textContent = originalText;
    button.disabled = false;
    contactForm.reset();
  }, 1800);
});
