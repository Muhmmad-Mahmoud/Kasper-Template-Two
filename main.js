let menu = document.querySelector( '.toggle-menu' );
let navBar = document.querySelector( '.nav-bar' );
let close = document.querySelector( '.fa-regular' );
menu.onmousemove;
menu.onclick = function ()
{
  navBar.style.display = 'block';
  menu.style.display = 'none';
  close.style.display = 'block';
};
close.onclick = function ()
{
  navBar.style.display = 'none';
  menu.style.display = 'block';
  close.style.display = 'none';
};
