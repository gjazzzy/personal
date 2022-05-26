$(document).ready(function () {
    $(".header__menu-btn").on('click', function (e) {
      e.praventDefault;
      $(this).toggleClass('header__menu-btn_active');
    });

  });

    $(function () {
    $('.header__hamburger-btn').on('click',function (){
        $('.header__modal').removeClass('header__modal--close');
    })
    $('.modal_menu-close').on('click',function (){
        $('.header__modal').addClass('header__modal--close');
    })
})