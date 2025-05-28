$(window).on("load", function () {
  $("body").removeClass("overflow");
});
$(document).ready(function () {

  $("#openNav").click( function() {

    $('.sidenav').addClass('open');
    $('.overlay').fadeIn();
    $('body').addClass('ovh');
  });
  
  $(".closebtn,.overlay").click( function() {
    $('.sidenav').removeClass('open');
    $('.overlay').fadeOut();
    $('body').removeClass('ovh');
  });


  $('.slider-head').owlCarousel({
  autoplay: false,
  rtl: document.dir == 'rtl' ? true : false,
  loop:false,
  dots:false,
  nav: true,
  items: 1,
  navText: ["<span class='fa fa-chevron-right'></span>","<span class='fa fa-chevron-left'></span>"]
  
});
  var a = 0;
$(window).scroll(function () {
  if ($("div").hasClass("numbers-flex")) {
    if (
      a === 0 &&
      $(this).scrollTop() >= $(".numbers-flex").offset().top - 500
    ) {
      $(".number span").each(function () {
        $(this)
          .prop("Counter", 0)
          .animate(
            {
              Counter: $(this).text(),
            },
            {
              duration: 1000,
              easing: "swing",
              step: function (now) {
                $(this).text(Math.ceil(now));
              },
            }
          );
      });
      a = 1;
    }
  }
});
        ///////// landing header /////////
    $('a[data-scroll^="#"]').on('click', function (e) {
        e.preventDefault();
        $(document).off("scroll");

        $('a').each(function () {
            $(this).removeClass('active');
        })
        $(this).addClass('active');

        var target = $(this).attr("data-scroll"),
            menu = target;
        $target = $(target);
        $('html, body').stop().animate({
            'scrollTop': $target.offset().top - 100
        }, 500, 'swing');
        if ($(window).width() < 992) {
            $("nav").toggleClass("active");
            $("body").toggleClass("overflow");
            $(".menu-overlay").fadeToggle(400);
        }
    });
    

});
