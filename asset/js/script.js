$(function () {
  $(document).scroll(function () {
    var $header = $("header");
    $header.toggleClass('navbar-bg', $(this).scrollTop() > $header.height());
  });
});

$( document ).ready(function() {
  let bool = false;
  $('.hamburger-menu').on('click', function() {
    if(bool == false) {
      bool = true;
      $('.navbar').css('transform', 'translateX(0)');
      $('.hamburger-menu').fadeOut(function() {
        $(this).attr('src', '/asset/images/ExitMenu.svg').fadeIn();
      });
    } else {
      bool = false;
      $('.navbar').css('transform', 'translateX(100%)');
      $('.hamburger-menu').fadeOut(function() {
        $(this).attr('src', '/asset/images/HamburgerMenu.svg').fadeIn();
      });
    }

  });
});