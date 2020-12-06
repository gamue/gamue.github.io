let navButton = document.getElementById('navbarBtn');
let navMenu = document.getElementById('navbarMenu');

navButton.addEventListener('click', function(){
  navMenu.classList.toggle('hidden');
});