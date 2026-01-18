// Loading Animation
window.addEventListener("load", () => {
  document.getElementById("loader").style.display = "none";
  document.body.style.opacity = "1";
});

// Particle Animation
const particlesContainer = document.getElementById("particles");
for (let i = 0; i < 50; i++) {
  const particle = document.createElement("div");
  particle.className = "particle";
  particle.style.left = Math.random() * 100 + "%";
  particle.style.animationDelay = Math.random() * 6 + "s";
  particle.style.width = particle.style.height = Math.random() * 5 + 2 + "px";
  particlesContainer.appendChild(particle);
}

// Smooth Scrolling for Nav
document.querySelectorAll("#navbar a").forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    target.scrollIntoView({ behavior: "smooth" });
  });
});

// Scroll-Based Fade-In Animations
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      }
    });
  },
  { threshold: 0.1 },
);

document.querySelectorAll(".fade-in").forEach((section) => {
  observer.observe(section);
});

// Skill Progress Animation on Scroll
const skillObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const progressBars = entry.target.querySelectorAll(".progress");
        progressBars.forEach((bar) => {
          bar.style.width = bar.style.width; // Trigger animation
        });
      }
    });
  },
  { threshold: 0.5 },
);

document.querySelectorAll(".skill").forEach((skill) => {
  skillObserver.observe(skill);
});

// Toggle Skill Details (Click to Expand)
function toggleSkill(skill) {
  const progress = skill.querySelector(".progress");
  if (progress.style.width === "0%") {
    progress.style.width = progress.getAttribute("style").split(":")[1].trim();
  } else {
    progress.style.width = "0%";
  }
}

// Modal Functions
function openModal(title, desc, imgSrc) {
  document.getElementById("modal-title").textContent = title;
  document.getElementById("modal-desc").textContent = desc;
  document.getElementById("modal-img").src = imgSrc;
  document.getElementById("modal").style.display = "flex";
}

function closeModal() {
  document.getElementById("modal").style.display = "none";
}

// Close Modal on Outside Click
window.onclick = function (event) {
  const modal = document.getElementById("modal");
  if (event.target === modal) {
    modal.style.display = "none";
  }
};
