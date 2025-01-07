document.addEventListener("DOMContentLoaded", () => {
    const blobs = document.querySelectorAll(".stor-tekst");
  
    blobs.forEach((blob) => {
      blob.animate(
        [
          { transform: blob.style.transform + " translate(0, 0)" },
          { transform: blob.style.transform + " translate(0, -8px)" },
          { transform: blob.style.transform + " translate(0, 0)" }
        ],
        {
          duration: 3000 + Math.random() * 1000, // 3-4 sekunders animation
          iterations: Infinity,
          direction: "alternate",
          easing: "ease-in-out",
          delay: Math.random() * 500
        }
      );
    });
  });
  
  document.addEventListener("DOMContentLoaded", () => {
    const blobs = document.querySelectorAll(".lille-tekst");
  
    blobs.forEach((blob) => {
      blob.animate(
        [
          { transform: blob.style.transform + " translate(0, 0)" },
          { transform: blob.style.transform + " translate(0, -8px)" },
          { transform: blob.style.transform + " translate(0, 0)" }
        ],
        {
          duration: 3000 + Math.random() * 1000, // 3-4 sekunders animation
          iterations: Infinity,
          direction: "alternate",
          easing: "ease-in-out",
          delay: Math.random() * 500
        }
      );
    });
  });

  document.addEventListener("DOMContentLoaded", () => {
    const blobs = document.querySelectorAll(".webbilleder");
  
    blobs.forEach((blob) => {
      blob.animate(
        [
          { transform: blob.style.transform + " translate(0, 0)" },
          { transform: blob.style.transform + " translate(0, -8px)" },
          { transform: blob.style.transform + " translate(0, 0)" }
        ],
        {
          duration: 3000 + Math.random() * 1000, // 3-4 sekunders animation
          iterations: Infinity,
          direction: "alternate",
          easing: "ease-in-out",
          delay: Math.random() * 500
        }
      );
    });
  });

  document.addEventListener("DOMContentLoaded", () => {
    const blobs = document.querySelectorAll(".link");
  
    blobs.forEach((blob) => {
      blob.animate(
        [
          { transform: blob.style.transform + " translate(0, 0)" },
          { transform: blob.style.transform + " translate(0, -8px)" },
          { transform: blob.style.transform + " translate(0, 0)" }
        ],
        {
          duration: 3000 + Math.random() * 1000, // 3-4 sekunders animation
          iterations: Infinity,
          direction: "alternate",
          easing: "ease-in-out",
          delay: Math.random() * 500
        }
      );
    });
  });

  document.addEventListener("DOMContentLoaded", () => {
    const blobs = document.querySelectorAll(".link1");
  
    blobs.forEach((blob) => {
      blob.animate(
        [
          { transform: blob.style.transform + " translate(0, 0)" },
          { transform: blob.style.transform + " translate(0, -8px)" },
          { transform: blob.style.transform + " translate(0, 0)" }
        ],
        {
          duration: 3000 + Math.random() * 1000, // 3-4 sekunders animation
          iterations: Infinity,
          direction: "alternate",
          easing: "ease-in-out",
          delay: Math.random() * 500
        }
      );
    });
  });


  document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.querySelector('.hamburger-icon');
    const menuOverlay = document.querySelector('.menu-overlay');
  
    hamburger.addEventListener('click', function() {
      // Toggle display
      menuOverlay.style.display = menuOverlay.style.display === 'block' ? 'none' : 'block';
    });
  });