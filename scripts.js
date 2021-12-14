const btnMobile = document.getElementById('btn-mobile');

function toogleMenu() {
  const navBar = document.getElementById('navBar')
  navBar.classList.toggle('active');
}

btnMobile.addEventListener('click', toogleMenu);