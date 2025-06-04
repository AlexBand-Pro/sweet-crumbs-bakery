const toggleButton = document.querySelector('.menu-toggle');
const menu = document.querySelector('.menu');

toggleButton.addEventListener('click', () => {
  menu.classList.toggle('open');
  toggleButton.classList.toggle('open');
  document.querySelector(".header-content").classList.toggle("padding")
});