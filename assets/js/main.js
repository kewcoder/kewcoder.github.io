// Theme toggle (initial theme is set inline in <head>)
const root = document.documentElement;

document.getElementById("theme-toggle").addEventListener("click", () => {
  const next = root.dataset.theme === "dark" ? "light" : "dark";
  root.dataset.theme = next;
  try {
    localStorage.setItem("theme", next);
  } catch (e) {}
});

// Nav border once the page scrolls
const nav = document.querySelector(".nav");
const onScroll = () => nav.classList.toggle("is-scrolled", window.scrollY > 8);
window.addEventListener("scroll", onScroll, { passive: true });
onScroll();

// Rotating role in the hero
const rotator = document.getElementById("rotator");
const roles = ["web apps", "mobile apps", "UI/UX design", "e-commerce"];
const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
let i = 0;
if (rotator && !reduceMotion) {
  setInterval(() => {
    rotator.classList.add("is-out");
    setTimeout(() => {
      i = (i + 1) % roles.length;
      rotator.textContent = roles[i];
      rotator.classList.remove("is-out");
    }, 300);
  }, 2400);
}

// Reveal sections as they enter the viewport
const reveals = document.querySelectorAll(".reveal");
if ("IntersectionObserver" in window) {
  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          io.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12 }
  );
  reveals.forEach((el) => io.observe(el));
} else {
  reveals.forEach((el) => el.classList.add("is-visible"));
}

document.getElementById("year").textContent = new Date().getFullYear();
