const toggle = document.querySelector('.toggle');
const menu = document.querySelector('.menu');

/* Toggle mobile menu */
function toggleMenu() {
  if (menu.classList.contains('active')) {
    menu.classList.remove('active');

    // adds the menu (hamburger) icon
    toggle.querySelector('a').innerHTML = '<i class=’fas fa-bars’></i>';
  } else {
    menu.classList.add('active');

    // adds the close (x) icon
    toggle.querySelector('a').innerHTML = '<i class=’fas fa-times’></i>';
  }
}

/* Event Listener */
toggle.addEventListener('click', toggleMenu, false);
const items = document.querySelectorAll('.item');

/* Activate Submenu */
function toggleItem() {
  if (this.classList.contains('submenu-active')) {
    this.classList.remove('submenu-active');
  } else if (menu.querySelector('.submenu-active')) {
    menu.querySelector('.submenu-active').classList.remove('submenu-active');
    this.classList.add('submenu-active');
  } else {
    this.classList.add('submenu-active');
  }
}

/* Event Listeners */
for (let item of items) {
  if (item.querySelector('.submenu')) {
    item.addEventListener('click', toggleItem, false);
    item.addEventListener('keypress', toggleItem, false);
  }
}
/* Close Submenu From Anywhere */
function closeSubmenu(e) {
  let isClickInside = menu.contains(e.target);

  if (!isClickInside && menu.querySelector('.submenu-active')) {
    menu.querySelector('.submenu-active').classList.remove('submenu-active');
  }
}

/* Event listener */
document.addEventListener('click', closeSubmenu, false);

function openInNewTab(url, pwd) {
  if (pwd !== '') {
    copyStringToClipboard(pwd);
  }
  var win = window.open(url, '_blank');
  // win.focus();
}

function copyStringToClipboard(str) {
  // Create new element
  var el = document.createElement('textarea');
  // Set value (string to be copied)
  el.value = str;
  // Set non-editable to avoid focus and move outside of view
  el.setAttribute('readonly', '');
  el.style = {
    position: 'absolute',
    left: '-9999px',
  };
  document.body.appendChild(el);
  // Select text inside element
  el.select();
  // Copy text to clipboard
  document.execCommand('copy');
  // Remove temporary element
  document.body.removeChild(el);
}
