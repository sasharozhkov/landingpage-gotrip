"user strict";

/* Progress bar */
export const header = document.querySelector('header');

function myFunction() {
  var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  var scrolled = (winScroll / height) * 100;
  var top = window.scrollY;
  document.getElementById("myBar").style.width = scrolled + "%";

  /* Change background when page scroll */
  if (top >= 50) {
    header.classList.add('dynamical')
  } else {
    header.classList.remove('dynamical')
  }

  /* Change size header__container when page scroll */
  if (document.body.scrollTop > 90 || document.documentElement.scrollTop > 90) {
    document.getElementById("header__container")
      .style.minHeight = "70px";
  } else {
    document.getElementById("header__container")
      .style.minHeight = "137px";
  }


}

window.onscroll = function () {
  myFunction();
};

