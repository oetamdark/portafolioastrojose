let lastScrollTop = 0;

(function () {
  //Header animation
  window.addEventListener("load", updateHeader);
  window.addEventListener("scroll", updateHeader);

  // Scroll to Elememt
  const links = document.querySelectorAll("[data-scroll]");
  links.forEach((link) => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      const href = link.getAttribute("href");
      const gotoelement = document.querySelector(href);
      gotoelement.scrollIntoView({
        behavior: "smooth",
        block: "start",
        inline: "nearest",
      });
    });
  });

  //animation scroll
  let options = {
    rootMargin: "0px",
    threshold: 0.2,
  };
  let observer = new IntersectionObserver(observerElements, options);

  function observerElements(entries) {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("fade-in");
      }
    });
  }
  // start animation
  document.querySelectorAll(".animate-fade").forEach((target) => {
    observer.observe(target);
  });
})();

function updateHeader() {
  const header = document.getElementById("header");
  const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

  if (scrollTop > 80) {
    if (scrollTop > lastScrollTop) {
      header.classList.add("down");
      header.classList.remove("up");
    } else {
      header.classList.add("up");
      header.classList.remove("down");
    }
  } else {
    header.classList.remove("up", "down");
  }

  lastScrollTop = scrollTop;
}
