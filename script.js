/* ================================================
   UGADI 2026 — JAVASCRIPT
   Features:
   1. Countdown Timer to March 21, 2026
   2. Sticky navbar scroll effect
   3. Mobile hamburger menu
   4. Album year tab switching
   5. Lightbox for gallery photos
   ================================================ */

// ---- 1. COUNTDOWN TIMER ----
function updateCountdown() {
  // Ugadi 2026: March 21, 2026 at 11:30 AM
  const ugadiDate = new Date('2026-03-21T11:30:00');
  const now = new Date();
  const diff = ugadiDate - now;

  if (diff <= 0) {
    // Ugadi is here!
    document.getElementById('countdown').innerHTML =
      '<div class="count-arrived">🌿 Ugadi Shubhakankshalu! · ಯುಗಾದಿ ಶುಭಾಶಯಗಳು! 🌿</div>';
    return;
  }

  const days    = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours   = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((diff % (1000 * 60)) / 1000);

  document.getElementById('days').textContent    = String(days).padStart(2, '0');
  document.getElementById('hours').textContent   = String(hours).padStart(2, '0');
  document.getElementById('minutes').textContent = String(minutes).padStart(2, '0');
  document.getElementById('seconds').textContent = String(seconds).padStart(2, '0');
}

// Run immediately, then every second
updateCountdown();
setInterval(updateCountdown, 1000);


// ---- 2. STICKY NAVBAR SCROLL EFFECT ----
const navbar = document.getElementById('navbar');

window.addEventListener('scroll', () => {
  if (window.scrollY > 60) {
    navbar.style.boxShadow = '0 4px 20px rgba(0,0,0,0.4)';
    navbar.style.padding   = '10px 48px';
  } else {
    navbar.style.boxShadow = '0 2px 12px rgba(0,0,0,0.3)';
    navbar.style.padding   = '14px 48px';
  }
});


// ---- 3. MOBILE HAMBURGER MENU ----
const hamburger = document.getElementById('hamburger');
const navLinks  = document.getElementById('nav-links');

hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('open');
});

// Close menu when a link is clicked
navLinks.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('open');
  });
});


// ---- 4. ALBUM YEAR TABS ----
const tabBtns = document.querySelectorAll('.tab-btn');

tabBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    const year = btn.dataset.year;

    // Update active tab button
    tabBtns.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');

    // Show correct album grid
    document.querySelectorAll('.album-grid').forEach(grid => {
      grid.classList.remove('active');
    });
    const targetAlbum = document.getElementById('album-' + year);
    if (targetAlbum) targetAlbum.classList.add('active');
  });
});


// ---- 5. LIGHTBOX ----
const lightbox      = document.getElementById('lightbox');
const lightboxImg   = document.getElementById('lightbox-img');
const lightboxCap   = document.getElementById('lightbox-caption');
const lightboxClose = document.getElementById('lightbox-close');

// Open lightbox on any album image click
document.querySelectorAll('.album-grid img').forEach(img => {
  img.addEventListener('click', () => {
    lightboxImg.src = img.src;
    lightboxCap.textContent = img.alt || '';
    lightbox.classList.add('open');
    document.body.style.overflow = 'hidden';
  });
});

// Close lightbox
function closeLightbox() {
  lightbox.classList.remove('open');
  lightboxImg.src = '';
  document.body.style.overflow = '';
}

lightboxClose.addEventListener('click', closeLightbox);

lightbox.addEventListener('click', (e) => {
  if (e.target === lightbox) closeLightbox();
});

document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') closeLightbox();
});


// ---- 6. STAR ORNAMENT → BACK TO TOP ----
const vineOrnamentBtn = document.getElementById('vine-ornament-btn');
if (vineOrnamentBtn) {
  vineOrnamentBtn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
  vineOrnamentBtn.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  });
}


// ---- HOW TO ADD PHOTOS ----
// To add real photos to an album:
// 1. Put your .jpg / .png files inside assets/albums/2024/ (or 2025 / 2026)
// 2. Replace the photo-placeholder div in index.html with img tags like:
//
//    <img src="assets/albums/2024/photo1.jpg" alt="Ugadi 2024 - Caption here" />
//    <img src="assets/albums/2024/photo2.jpg" alt="Ugadi 2024 - Another caption" />
//
// The lightbox will automatically work on all images!
