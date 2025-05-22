const menuToggle = document.querySelector(".menuopen");
const navMenu = document.querySelector("nav");

menuToggle.addEventListener("click", () => {
  menuToggle.classList.toggle("active");
  navMenu.classList.toggle("active");
});

const buttons = document.querySelectorAll(".cards-contents button");
const modal = document.getElementById("galleryModal");
const modalGallery = document.getElementById("modalGallery");
const closeModal = document.querySelector(".modal-content .close");

const galleries = {
  sculpture: [
    "./Assets/images/giusi-borrasi-WgX9fu0TuWM-unsplash.jpg",
    "./Assets/images/sculpture 2.avif",
    "./Assets/images/sculpture 3.avif",
    "./Assets/images/sculpture 4.avif",
    "./Assets/images/sculpture 5.avif",
    "./Assets/images/sculpture 6.avif",
    "./Assets/images/sculpture 6.avif",
    "./Assets/images/sculpture 6.avif",
    "./Assets/images/sculpture 6.avif",
  ],
  collage: [
    "./Assets/images/adrianna-geo-1rBg5YSi00c-unsplash.jpg",
    "./Assets/images/collage 1.avif",
    "./Assets/images/collage 2.avif",
    "./Assets/images/collage 3.avif",
    "./Assets/images/collage 4.avif",
    "./Assets/images/collage 5.avif",
    "./Assets/images/collage 5.avif",
    "./Assets/images/collage 5.avif",
    "./Assets/images/collage 5.avif",
  ],
  digital: [
    "./Assets/images/digital art 1.avif",
    "./Assets/images/digital art 2.avif",
    "./Assets/images/digital art3.avif",
    "./Assets/images/digital art 4.avif",
    "./Assets/images/digital art 5.avif",
    "./Assets/images/digital art 6.avif",
    "./Assets/images/digital art 6.avif",
    "./Assets/images/digital art 6.avif",
    "./Assets/images/digital art 6.avif",
  ],
  portrait: [
    "./Assets/images/albert-dera-ILip77SbmOE-unsplash.jpg",
    "./Assets/images/victor-g-wN9DU73b8_s-unsplash.jpg",
    "./Assets/images/albert-dera-ILip77SbmOE-unsplash.jpg",
    "./Assets/images/albert-dera-ILip77SbmOE-unsplash.jpg",
    "./Assets/images/albert-dera-ILip77SbmOE-unsplash.jpg",
  ],
};

// Open modal and display gallery
buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const type = button.getAttribute("data-type");
    const images = galleries[type];

    // Clear previous images
    modalGallery.innerHTML = "";

    // Populate modal with images
    images.forEach((src) => {
      const img = document.createElement("img");
      img.src = src;
      modalGallery.appendChild(img);
    });

    // Show modal
    modal.style.display = "flex";
  });
});

// Close modal
closeModal.addEventListener("click", () => {
  modal.style.display = "none";
});

// Close modal when clicking outside the content
window.addEventListener("click", (e) => {
  if (e.target === modal) {
    modal.style.display = "none";
  }
});

// Open modal
document.querySelectorAll(".read-more").forEach((button) => {
  button.addEventListener("click", function (e) {
    e.preventDefault();
    const targetId = this.getAttribute("data-modal");
    document.getElementById(targetId).style.display = "block";
  });
});

// Close modal
document.querySelectorAll(".close").forEach((btn) => {
  btn.addEventListener("click", function () {
    this.closest(".modal").style.display = "none";
  });
});

// Close on outside click
window.addEventListener("click", function (e) {
  document.querySelectorAll(".modal").forEach((modal) => {
    if (e.target === modal) {
      modal.style.display = "none";
    }
  });
});

// document.addEventListener("DOMContentLoaded", function () {
//   // steps-services section
//   ScrollReveal().reveal(".blog-card", {
//     origin: "bottom",
//     distance: "40px",
//     duration: 800,
//     delay: 400,
//     easing: "ease-in-out",
//     interval: 200, // Staggers animation for each box
//     reset: true,
//   });
// });

const networkLoader = document.getElementById("network-loader");

// Show loader if offline
function handleOffline() {
  networkLoader.style.display = "flex";
}

// Hide loader when back online
function handleOnline() {
  networkLoader.style.display = "none";
}

// Initial check
if (!navigator.onLine) {
  handleOffline();
}

// Event listeners
window.addEventListener("offline", handleOffline);
window.addEventListener("online", handleOnline);

