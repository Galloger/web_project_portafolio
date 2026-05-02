// Scroll Animations
const sections = document.querySelectorAll('section');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      } else {
        entry.target.classList.remove('visible');
      }
    });
  }, { threshold: 0.12 });
  sections.forEach(s => observer.observe(s));

  // Modal Video
  document.addEventListener('DOMContentLoaded', () => {
  const modal = document.getElementById("videoModal");
  const openModal = document.getElementById("openVideoModal");
  const closeModal = document.querySelector(".close-modal");
  const video = document.getElementById("videoPlayer");

  openModal.onclick = () => {
    modal.style.display = "flex";
    video.play();
  };

  closeModal.onclick = () => {
    modal.style.display = "none";
    video.pause();
    video.currentTime = 0;
  };

  window.onclick = (e) => {
    if (e.target === modal) {
      modal.style.display = "none";
      video.pause();
      video.currentTime = 0;
    }
  };
});

