document.addEventListener("DOMContentLoaded", () => {
  const nav = document.querySelector(".nav-pills");
  const navLinks = document.querySelectorAll(".nav-link");
  const scrollThreshold = window.innerHeight * 0.45;
  const offcanvas = document.querySelector(".offcanvas-xl");

  // handle scroll events
  window.addEventListener("scroll", () => {
    // change nav color pass hero section
    if (window.scrollY > scrollThreshold) {
      nav.classList.remove("light-mode");
      offcanvas.classList.remove("light-mode");
    } else {
      nav.classList.add("light-mode");
      offcanvas.classList.add("light-mode");
    }
  });

  // handle click events
  navLinks.forEach((link) => {
    link.addEventListener("click", () => {
      // remove active class from ALL LINKS
      navLinks.forEach((l) => l.classList.remove("active"));
      // add active class to CLICKED LINK
      link.classList.add("active");
    });
  });

  // handle scroll events
  window.addEventListener("scroll", () => {
    const sections = document.querySelectorAll("section");
    let current = "";

    sections.forEach((section) => {
      const sectionTop = section.offsetTop;
      if (scrollY >= sectionTop - 60) {
        current = section.getAttribute("id");
      }
    });

    navLinks.forEach((link) => {
      link.classList.remove("active");
      if (link.getAttribute("href") === `#${current}`) {
        link.classList.add("active");
      }
    });
  });
});

// TOGGLE DARK MODE
const html = document.getElementById("htmlPage");
const h2 = document.querySelector("h2");
const checkbox = document.getElementById("checkbox");

checkbox.addEventListener("change", () => {
  if (checkbox.checked) {
    html.setAttribute("data-bs-theme", "dark");
  } else {
    html.setAttribute("data-bs-theme", "light");
  }
});
