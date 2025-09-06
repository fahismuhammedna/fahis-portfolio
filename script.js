// Toggle Menu
const menuBtn = document.querySelector(".menu-btn");
const navbarMenu = document.querySelector(".menu");

menuBtn.addEventListener("click", () => {
  navbarMenu.classList.toggle("active");
  menuBtn.querySelector("i").classList.toggle("fa-times");
});

// Scroll Behavior
window.addEventListener("scroll", () => {
  const navbar = document.querySelector(".navbar");
  const scrollBtn = document.querySelector(".scroll-up-btn");

  navbar.classList.toggle("sticky", window.scrollY > 20);
  scrollBtn.classList.toggle("show", window.scrollY > 500);
});

// Scroll Up Button
document.querySelector(".scroll-up-btn").addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

// Typed.js Animations
new Typed(".typing", {
  strings: ["Web Developer", "Designer", "Full-Stack Engineer", "Freelancer"],
  typeSpeed: 100,
  backSpeed: 60,
  loop: true
});

new Typed(".typing-2", {
  strings: ["Web Developer", "Designer", "Full-Stack Engineer", "Freelancer"],
  typeSpeed: 100,
  backSpeed: 60,
  loop: true
});
// Timeline animation on scroll
const timelineItems = document.querySelectorAll('.timeline-item');

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
    }
  });
}, { threshold: 0.2 });

timelineItems.forEach(item => {
  observer.observe(item);
});
