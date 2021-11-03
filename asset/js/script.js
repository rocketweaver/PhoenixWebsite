window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    document.querySelector("header").style.background = "linear-gradient(180deg, #2D0901 0%, rgba(45, 9, 1, 0.78) 33.85%, rgba(45, 9, 1, 0) 100%)";
  } else {
    document.querySelector("header").style.background = "none";
  }
}