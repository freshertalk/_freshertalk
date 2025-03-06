// Ensure DOM is fully loaded
document.addEventListener("DOMContentLoaded", () => {
  // Swiper Sliders Initialization
  // Team Slider Initialization
  const teamSlider = new Swiper(".team-slider", {
    slidesPerView: 1,
    spaceBetween: 20,
    loop: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints: {
      768: {
        slidesPerView: 3,
        spaceBetween: 30,
      },
    },
  });

  const trainingSlider = new Swiper(".training-slider", {
    slidesPerView: 1,
    spaceBetween: 20,
    loop: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints: {
      768: {
        slidesPerView: 3,
        spaceBetween: 30,
      },
    },
  });

  const internshipSlider = new Swiper(".internship-slider", {
    slidesPerView: 1,
    spaceBetween: 20,
    loop: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints: {
      768: {
        slidesPerView: 3,
        spaceBetween: 30,
      },
    },
  });

  const placementSlider = new Swiper(".placement-slider", {
    slidesPerView: 1,
    spaceBetween: 20,
    loop: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints: {
      768: {
        slidesPerView: 3,
        spaceBetween: 30,
      },
    },
  });

  const csrSlider = new Swiper(".csr-slider", {
    slidesPerView: 1,
    spaceBetween: 20,
    loop: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints: {
      768: {
        slidesPerView: 3,
        spaceBetween: 30,
      },
    },
  });

  const testimonialSlider = new Swiper(".testimonial-slider", {
    slidesPerView: 1,
    spaceBetween: 20,
    loop: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints: {
      768: {
        slidesPerView: 3,
        spaceBetween: 30,
      },
    },
  });

  // CSR Detailed Workshop Sliders
  document
    .querySelectorAll(".csr-details .workshop-slider")
    .forEach((slider) => {
      new Swiper(slider, {
        slidesPerView: 1,
        spaceBetween: 20,
        loop: true,
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
      });
    });

  // Training Programs "Know More" Buttons
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

  // CSR "Explore More" Buttons
  document.querySelectorAll(".explore-more").forEach((button) => {
    button.addEventListener("click", () => {
      const target = button.getAttribute("data-target");
      const section = document.querySelector(`#${target}`);
      if (section.style.display === "none" || !section.style.display) {
        section.style.display = "block";
        window.scrollTo({ top: section.offsetTop - 50, behavior: "smooth" });
      }
    });
  });

  // FAQ Accordion
  document.querySelectorAll(".faq-button").forEach((button) => {
    button.addEventListener("click", () => {
      const content = button.nextElementSibling;
      const isActive = content.style.display === "block";
      document
        .querySelectorAll(".faq-content")
        .forEach((c) => (c.style.display = "none"));
      document
        .querySelectorAll(".faq-button")
        .forEach((b) => b.classList.remove("active"));
      if (!isActive) {
        content.style.display = "block";
        button.classList.add("active");
        gsap.from(content, { height: 0, opacity: 0, duration: 0.5 });
      }
    });
  });

  // Smooth Scrolling for Navigation Links
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      const href = this.getAttribute("href");
      if (href === "#placement-details" || href.includes("csr-")) {
        document.querySelector(href).style.display = "block";
        window.scrollTo({
          top: document.querySelector(href).offsetTop - 50,
          behavior: "smooth",
        });
      } else {
        const targetSection = document.querySelector(href);
        if (targetSection) {
          window.scrollTo({
            top: targetSection.offsetTop - 50,
            behavior: "smooth",
          });
        }
      }
      if (window.innerWidth <= 768) {
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

  // GSAP Animations with ScrollTrigger
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

  // Visitor Counter (Using localStorage for demo)
  let visitorCount = localStorage.getItem("visitorCount") || 0;
  visitorCount++;
  localStorage.setItem("visitorCount", visitorCount);
  document.querySelector(
    ".visitor-counter"
  ).textContent = `Visitors: ${visitorCount}`;

  // Background Canvas Animation
  const canvas = document.getElementById("background-canvas");
  const ctx = canvas.getContext("2d");

  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  const particlesArray = [];
  const numberOfParticles = 50;

  class Particle {
    constructor() {
      this.x = Math.random() * canvas.width;
      this.y = Math.random() * canvas.height;
      this.size = Math.random() * 3 + 1;
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

  // Resize Canvas on Window Resize
  window.addEventListener("resize", () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  });
});
