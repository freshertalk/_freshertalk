// Initialize Swiper Slider
const swiper = new Swiper(".swiper-container", {
  effect: "fade",
  loop: true,
  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

// Smooth Scrolling and Link Handling
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const href = this.getAttribute("href");
    if (href === "#placement-details" || href === "#csr-details") {
      document.querySelector(href).style.display = "block";
      window.scrollTo({
        top: document.querySelector(href).offsetTop - 50,
        behavior: "smooth",
      });
    } else if (window.innerWidth <= 768) {
      navLinks.classList.remove("active");
      hamburger.innerHTML = '<i class="fas fa-bars"></i>';
    }
  });
});

// Hamburger Menu Toggle
const hamburger = document.getElementById("hamburger");
const navLinks = document.getElementById("nav-links");

hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("active");
  const isActive = navLinks.classList.contains("active");
  hamburger.innerHTML = isActive
    ? '<i class="fas fa-times"></i>'
    : '<i class="fas fa-bars"></i>';
});

// GSAP Scroll Animations
gsap.registerPlugin(ScrollTrigger);

gsap.utils.toArray(".animate-section").forEach((section) => {
  gsap.from(section, {
    opacity: 0,
    y: 50,
    duration: 1.2,
    ease: "power3.out",
    scrollTrigger: {
      trigger: section,
      start: "top 85%",
      toggleActions: "play none none none",
    },
  });
});

// Course Expand/Collapse Functionality
document.querySelectorAll(".know-more").forEach((button) => {
  button.addEventListener("click", () => {
    const card = button.closest(".course-card");
    const details = card.querySelector(".course-details");
    if (details.style.display === "block") {
      gsap.to(details, {
        height: 0,
        opacity: 0,
        duration: 0.5,
        onComplete: () => (details.style.display = "none"),
      });
      button.textContent = "Know More";
    } else {
      details.style.display = "block";
      gsap.fromTo(
        details,
        { height: 0, opacity: 0 },
        { height: "auto", opacity: 1, duration: 0.5 }
      );
      button.textContent = "Less";
    }
  });
});

document.querySelectorAll(".back-btn").forEach((button) => {
  button.addEventListener("click", () => {
    const section = button.closest("section");
    gsap.to(section, {
      opacity: 0,
      duration: 0.5,
      onComplete: () => (section.style.display = "none"),
    });
    window.scrollTo({
      top: document.querySelector("#placement").offsetTop - 50,
      behavior: "smooth",
    });
  });
});

// Button Hover Animation
gsap.utils.toArray(".btn").forEach((btn) => {
  btn.addEventListener("mouseenter", () => {
    gsap.to(btn, {
      scale: 1.05,
      boxShadow: "0 6px 15px rgba(212, 160, 23, 0.4)",
      duration: 0.3,
      ease: "power2.out",
    });
  });
  btn.addEventListener("mouseleave", () => {
    gsap.to(btn, {
      scale: 1,
      boxShadow: "0 4px 12px rgba(212, 160, 23, 0.3)",
      duration: 0.3,
      ease: "power2.out",
    });
  });
});

// Background Animation
const canvas = document.getElementById("background-canvas");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const particlesArray = [];
const numberOfParticles = 30;

class Particle {
  constructor() {
    this.x = Math.random() * canvas.width;
    this.y = Math.random() * canvas.height;
    this.size = Math.random() * 2 + 1;
    this.speedX = Math.random() * 1 - 0.5;
    this.speedY = Math.random() * 1 - 0.5;
  }
  update() {
    this.x += this.speedX;
    this.y += this.speedY;
    if (this.x < 0 || this.x > canvas.width) this.speedX = -this.speedX;
    if (this.y < 0 || this.y > canvas.height) this.speedY = -this.speedY;
  }
  draw() {
    ctx.fillStyle = "rgba(212, 160, 23, 0.3)";
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
    ctx.fill();
  }
}

function init() {
  for (let i = 0; i < numberOfParticles; i++) {
    particlesArray.push(new Particle());
  }
}

function animate() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  for (let i = 0; i < particlesArray.length; i++) {
    particlesArray[i].update();
    particlesArray[i].draw();
  }
  requestAnimationFrame(animate);
}

init();
animate();

window.addEventListener("resize", () => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
});
