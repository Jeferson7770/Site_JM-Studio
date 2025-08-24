// === Menu Responsivo (abre/fecha) ===
function toggleMenu() {
  const navList = document.querySelector('.nav-list');
  if (navList) {
    navList.classList.toggle('active');
  }
}

// === Fecha menu mobile ao clicar em um link ===
const navLinks = document.querySelectorAll('.nav-list a');

if (navLinks.length) {
  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      const navList = document.querySelector('.nav-list');
      if (navList.classList.contains('active')) {
        navList.classList.remove('active');
      }
    });
  });
}
