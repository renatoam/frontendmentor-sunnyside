const btnMobile = document.getElementById('btnMobile');

function toogleMenu() {
  const navBar = document.getElementById('navBar')
  navBar.classList.toggle('active');
}

btnMobile.addEventListener('click', toogleMenu);