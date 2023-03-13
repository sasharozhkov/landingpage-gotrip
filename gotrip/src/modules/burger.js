/* Burger menu*/

export const menuBody = document.querySelector('.header__nav');
export const iconMenu = document.querySelector('.burger__icon');

if (iconMenu) {
  iconMenu.addEventListener("click", function (e) {
    document.body.classList.toggle('_lock');
    iconMenu.classList.toggle('_active');
    menuBody.classList.toggle('_active');
  });
}

// Close menu if inter not link
if (menuBody) {
  menuBody.addEventListener("click", function (e) {
    document.body.classList.remove('_lock');
    iconMenu.classList.remove('_active');
    menuBody.classList.remove('_active');
  });
}