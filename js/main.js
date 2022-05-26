  $(document).ready(function () {
    $(".header__menu-btn").on('click', function (e) {
      e.praventDefault;
      $(this).toggleClass('header__menu-btn_active');
    });

  });