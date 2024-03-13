const toggleButton = document.querySelector('.navbar-toggle');
const menubar = document.querySelector('.menubar');

toggleButton.addEventListener('click', () => {
  menubar.classList.toggle('show');
});