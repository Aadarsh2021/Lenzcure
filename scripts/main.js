const INITIALIZED = {
  nav: false,
  segments: false,
  forms: false,
  productSlider: false,
};

function initNav() {
  const navToggle = document.querySelector(".nav-toggle");
  const nav = document.querySelector("[data-nav]");
  const navLinks = document.querySelectorAll("[data-nav] a");
  if (!navToggle || !nav || INITIALIZED.nav) {
    return;
  }

  navToggle.addEventListener("click", () => {
    const expanded = navToggle.getAttribute("aria-expanded") === "true";
    navToggle.setAttribute("aria-expanded", String(!expanded));
    nav.classList.toggle("is-open");
  });

  navLinks.forEach((link) => {
    link.addEventListener("click", () => {
      if (window.innerWidth <= 768 && nav.classList.contains("is-open")) {
        nav.classList.remove("is-open");
        navToggle.setAttribute("aria-expanded", "false");
      }
    });
  });

  INITIALIZED.nav = true;
}

function initSegmentToggles() {
  if (INITIALIZED.segments) return;
  const segments = document.querySelectorAll(".segment");
  if (!segments.length) return;

  segments.forEach((segment) => {
    const header = segment.querySelector(".segment-header");
    const toggleBtn = segment.querySelector(".segment-toggle-btn");
    
    if (!header || !toggleBtn) return;

    header.addEventListener("click", (e) => {
      // If clicking the button itself, let the event bubble or handle here
      // Standard accordion behavior: Close others
      const isExpanded = segment.classList.contains("expanded");
      
      if (!isExpanded) {
        segments.forEach(s => {
          s.classList.remove("expanded");
          s.querySelector(".segment-toggle-btn")?.setAttribute("aria-expanded", "false");
        });
        
        segment.classList.add("expanded");
        toggleBtn.setAttribute("aria-expanded", "true");
        segment.scrollIntoView({ behavior: 'smooth', block: 'center' });
      } else {
        // Toggle off if already open
        segment.classList.remove("expanded");
        toggleBtn.setAttribute("aria-expanded", "false");
      }
    });

    // Prevent double fire if button is clicked inside header
    toggleBtn.addEventListener("click", (e) => {
      e.stopPropagation();
      header.click();
    });
  });

  INITIALIZED.segments = true;
}

function initForms() {
  if (INITIALIZED.forms) {
    return;
  }
  const contactForm = document.querySelector(".contact-form");
  if (!contactForm) {
    return;
  }

  contactForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const submitButton = contactForm.querySelector("button[type='submit']");
    if (submitButton instanceof HTMLButtonElement) {
      const prevText = submitButton.textContent;
      submitButton.textContent = "Message Sent";
      submitButton.disabled = true;
      window.setTimeout(() => {
        submitButton.textContent = prevText;
        submitButton.disabled = false;
      }, 1700);
    }
    contactForm.reset();
  });

  INITIALIZED.forms = true;
}

function initFaqs() {
  const faqItems = document.querySelectorAll(".faq-item");
  if (!faqItems.length) return;

  faqItems.forEach((item) => {
    const question = item.querySelector("h3");
    if (!question) return;

    question.addEventListener("click", () => {
      const isOpen = item.classList.contains("open");
      // Close other FAQs if desired (optional)
      // faqItems.forEach(faq => faq.classList.remove('open'));
      item.classList.toggle("open", !isOpen);
    });
  });
}

function initProductSlider() {
  if (INITIALIZED.productSlider) return;
  const slider = document.querySelector(".product-slider");
  const prevBtn = document.querySelector(".slider-control.prev");
  const nextBtn = document.querySelector(".slider-control.next");
  const firstCard = document.querySelector(".product-card");
  if (!slider || !prevBtn || !nextBtn || !firstCard) return;

  const getStep = () => firstCard.getBoundingClientRect().width + 30;

  prevBtn.addEventListener("click", () => {
    slider.scrollBy({ left: -getStep(), behavior: "smooth" });
  });
  nextBtn.addEventListener("click", () => {
    slider.scrollBy({ left: getStep(), behavior: "smooth" });
  });

  INITIALIZED.productSlider = true;
}

function initScrollAnimations() {
  const reveals = document.querySelectorAll(".reveal, .reveal-up");
  if (!reveals.length) return;

  const observerOptions = {
    threshold: 0.15,
    rootMargin: "0px 0px -50px 0px",
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("active");
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  reveals.forEach((el) => observer.observe(el));
}

function handleDeepLink() {
  const hash = window.location.hash;
  if (!hash) return;

  const targetSegment = document.querySelector(hash);
  if (targetSegment && targetSegment.classList.contains("segment")) {
    const segments = document.querySelectorAll(".segment");
    // Close others
    segments.forEach((s) => {
      s.classList.remove("expanded");
      s.querySelector(".segment-toggle-btn")?.setAttribute("aria-expanded", "false");
    });

    // Open target
    targetSegment.classList.add("expanded");
    targetSegment.querySelector(".segment-toggle-btn")?.setAttribute("aria-expanded", "true");

    // Scroll to center or top of segment
    setTimeout(() => {
      targetSegment.scrollIntoView({ behavior: "smooth", block: "center" });
    }, 100);
  }
}

function initPage() {
  initNav();
  initSegmentToggles();
  initForms();
  initFaqs();
  initProductSlider();
  initScrollAnimations();
  handleDeepLink();
}

document.addEventListener("DOMContentLoaded", initPage);
document.addEventListener("nav:loaded", initPage);
