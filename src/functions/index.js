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

document.querySelector(".login-form").addEventListener("submit", (e) => {
  e.preventDefault();
  const email = document.querySelector("#email").value;
  const password = document.querySelector("#password").value;

  console.log("Login attempt:", { email, password });
  alert("Login successful!");

  e.target.reset();
  document.querySelector(".modal").classList.remove("active");
});

document.querySelector(".search-btn").addEventListener("click", () => {
  const email = document.querySelector(".search-input").value;
  if (email) {
    const progressBar = document.querySelector(".progress-fill");
    const progressText = document.querySelector(".progress-text");
    progressText.textContent = "Processing your request...";
    progressBar.style.animation = "progress-animation 2s ease-out";

    setTimeout(() => {
      alert(`Thank you! We'll contact you at ${email}`);
      progressBar.style.animation = "none";
      progressBar.style.width = "0%";
      progressText.textContent = "Loading resources...";
    }, 2000);
  } else {
    alert("Please enter your email first");
  }
});

document.querySelector(".menu-toggle").addEventListener("click", () => {
  document.querySelector(".nav-links").classList.toggle("active");
  document.querySelector(".menu-toggle").classList.toggle("active");
});

// Add click handlers for download buttons
document.querySelectorAll(".download-btn").forEach((button) => {
  button.addEventListener("click", function () {
    const downloadName =
      this.parentElement.querySelector(".download-name").textContent;
    alert(`Starting download for ${downloadName}`);
  });
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

// Google login button functionality
document.querySelector(".google-btn").addEventListener("click", () => {
  console.log("Google login clicked");
  alert("Google login integration coming soon!");
});