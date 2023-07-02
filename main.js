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

// Create a media query object for min-width: 768px
const mediaQuery = window.matchMedia("(min-width: 768px)");

// Define the callback function when the media query matches
const handleMediaQueryChange = (mediaQuery) => {
  if (mediaQuery.matches) {
    // When the media query matches, set the display property of .nav-bar to block
    document.querySelector(".nav-bar").style.display = "block";
  } else {
    // When the media query doesn't match, you can set the display property to some other value or remove it altogether
    document.querySelector(".nav-bar").style.display = "none";
  }
};

// Call the callback function once initially to handle the initial state
handleMediaQueryChange(mediaQuery);

// Add a listener for changes to the media query and call the callback function
mediaQuery.addListener(handleMediaQueryChange);
