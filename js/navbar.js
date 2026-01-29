/* =========================================================
   NAVBAR LOADER + ACTIVE LINK HANDLING
========================================================= */

fetch("/navbar.html")
  .then(res => res.text())
  .then(html => {
    document.getElementById("navbar-placeholder").innerHTML = html;

    const path = window.location.pathname;

    if (path === "/" || path.endsWith("index.html")) {
      document.getElementById("nav-home")?.classList.add("active");
    } else if (path.includes("academics")) {
      document.getElementById("nav-academics")?.classList.add("active");
    } else if (path.includes("experience")) {
      document.getElementById("nav-experience")?.classList.add("active");
    } else if (path.includes("projects")) {
      document.getElementById("nav-projects")?.classList.add("active");
    } else if (path.includes("contact")) {
      document.getElementById("nav-contact")?.classList.add("active");
    }
  });
