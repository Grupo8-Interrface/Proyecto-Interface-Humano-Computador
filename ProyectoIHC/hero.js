// Función para alternar la visibilidad del menú de idiomas
function toggleLanguageMenu() {
    const menu = document.getElementById('languageMenu');
    menu.style.display = menu.style.display === 'block' ? 'none' : 'block';
  }
  
  // Función para alternar la visibilidad del menú de perfil
  function toggleProfileMenu() {
    const menu = document.getElementById('profileMenu');
    menu.style.display = menu.style.display === 'block' ? 'none' : 'block';
  }
  
  // Función para alternar la visibilidad del menú hamburguesa
  function toggleHamburgerMenu() {
    const menu = document.getElementById('hamburgerMenu');
    menu.style.display = menu.style.display === 'block' ? 'none' : 'block';
  }
  
  // Función para redirigir a la página "Estado en Blanco" al hacer clic en "Acerca de"
  document.getElementById('aboutLink').addEventListener('click', function (event) {
    event.preventDefault(); // Previene el comportamiento predeterminado del enlace
    window.location.href = 'blankstate.html'; // Redirige a la página "Estado en Blanco"
  });
  