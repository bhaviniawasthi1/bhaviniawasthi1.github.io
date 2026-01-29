const reveals = document.querySelectorAll(".reveal, .reveal-down");

const observer = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
      }
    });
  },
  { threshold: 0.15 }
);

reveals.forEach(el => observer.observe(el));

// Subtle hover parallax for experience card
const expCard = document.querySelector(".exp-card");

if (expCard) {
  expCard.addEventListener("mousemove", e => {
    const rect = expCard.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;

    expCard.style.transform =
      `translateY(-6px) scale(1.015) rotateX(${y * -3}deg) rotateY(${x * 3}deg)`;
  });

  expCard.addEventListener("mouseleave", () => {
    expCard.style.transform = "";
  });
}
