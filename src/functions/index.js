document.querySelector(".login-btn").addEventListener("click", () => {
  document.querySelector(".modal").classList.add("active");
});

document.querySelector(".close-modal").addEventListener("click", () => {
  document.querySelector(".modal").classList.remove("active");
});

document.querySelector(".modal").addEventListener("click", (e) => {
  if (e.target === document.querySelector(".modal")) {
    document.querySelector(".modal").classList.remove("active");
  }
});

document.querySelector(".menu-toggle").addEventListener("click", () => {
  document.querySelector(".nav-links").classList.toggle("active");
  document.querySelector(".menu-toggle").classList.toggle("active");
});

// Update the intersection observer to include downloads section
const observerOptions = {
  threshold: 0.2,
  rootMargin: "0px",
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
    }
  });
}, observerOptions);

document
  .querySelectorAll(".hero, #downloads, .about-section")
  .forEach((element) => {
    observer.observe(element);
  });

// Smooth scrolling for navigation links
document.querySelectorAll(".nav-link").forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    const targetId = this.getAttribute("href").split("/").pop();
    const targetElement = document.querySelector(targetId);

    if (targetElement) {
      targetElement.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  });
});