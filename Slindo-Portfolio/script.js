// Mobile Menu Toggle
const menuBtn = document.querySelector(".menu-btn");
const navLinks = document.querySelector("nav ul");

menuBtn.addEventListener("click", () => {
  menuBtn.classList.toggle("active");
  navLinks.classList.toggle("active");
});

// Close mobile menu when clicking on a link
document.querySelectorAll("nav a").forEach((link) => {
  link.addEventListener("click", () => {
    menuBtn.classList.remove("active");
    navLinks.classList.remove("active");
  });
});

// Smooth scrolling for all links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    const targetId = this.getAttribute("href");
    const targetElement = document.querySelector(targetId);

    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop - 80,
        behavior: "smooth",
      });
    }
  });
});

// Sticky header on scroll
window.addEventListener("scroll", () => {
  const header = document.querySelector("header");
  header.classList.toggle("sticky", window.scrollY > 0);
});

// Typed text animation
const typedTextSpan = document.querySelector(".typed-text");
const cursorSpan = document.querySelector(".cursor");

const textArray = [
  "web developer",
  "problem solver",
  "creative thinker",
  "lifelong learner",
];
const typingDelay = 100;
const erasingDelay = 50;
const newTextDelay = 1500;
let textArrayIndex = 0;
let charIndex = 0;

function type() {
  if (charIndex < textArray[textArrayIndex].length) {
    if (!cursorSpan.classList.contains("typing"))
      cursorSpan.classList.add("typing");
    typedTextSpan.textContent += textArray[textArrayIndex].charAt(charIndex);
    charIndex++;
    setTimeout(type, typingDelay);
  } else {
    cursorSpan.classList.remove("typing");
    setTimeout(erase, newTextDelay);
  }
}

function erase() {
  if (charIndex > 0) {
    if (!cursorSpan.classList.contains("typing"))
      cursorSpan.classList.add("typing");
    typedTextSpan.textContent = textArray[textArrayIndex].substring(
      0,
      charIndex - 1
    );
    charIndex--;
    setTimeout(erase, erasingDelay);
  } else {
    cursorSpan.classList.remove("typing");
    textArrayIndex++;
    if (textArrayIndex >= textArray.length) textArrayIndex = 0;
    setTimeout(type, typingDelay + 100);
  }
}

// Start the typing animation on page load
document.addEventListener("DOMContentLoaded", function () {
  if (textArray.length) setTimeout(type, newTextDelay + 250);
});

// Animate elements on scroll
function animateOnScroll() {
  const elements = document.querySelectorAll(".skill-category, .project-card");

  elements.forEach((element) => {
    const elementPosition = element.getBoundingClientRect().top;
    const screenPosition = window.innerHeight / 1.3;

    if (elementPosition < screenPosition) {
      element.style.opacity = "1";
      element.style.transform = "translateY(0)";
    }
  });
}

// Set initial state for animated elements
window.addEventListener("DOMContentLoaded", () => {
  const elements = document.querySelectorAll(".skill-category, .project-card");

  elements.forEach((element) => {
    element.style.opacity = "0";
    element.style.transform = "translateY(20px)";
    element.style.transition = "opacity 0.5s ease, transform 0.5s ease";
  });

  // Trigger animation on load for elements in view
  setTimeout(animateOnScroll, 100);
});

// Animate elements on scroll
window.addEventListener("scroll", animateOnScroll);

// Form submission
const contactForm = document.querySelector(".contact-form");
if (contactForm) {
  contactForm.addEventListener("submit", (e) => {
    e.preventDefault();

    // Get form values
    const name = contactForm.querySelector('input[type="text"]').value;
    const email = contactForm.querySelector('input[type="email"]').value;
    const message = contactForm.querySelector("textarea").value;

    // Here you would typically send the form data to a server
    // For this example, we'll just log it and show an alert
    console.log({ name, email, message });
    alert("Thank you for your message! I will get back to you soon.");

    // Reset form
    contactForm.reset();
  });
}

// Simple zoom effect
const projectCards = document.querySelectorAll(".project-card");
projectCards.forEach((card) => {
  card.addEventListener("mouseenter", () => {
    card.style.transform = "scale(1.03)";
  });

  card.addEventListener("mouseleave", () => {
    card.style.transform = "scale(1)";
  });
});