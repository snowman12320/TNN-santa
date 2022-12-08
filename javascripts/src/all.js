$(document).ready(function () {
  // Create a clone of the menu, right next to original.
  $(".menu")
    .addClass("original")
    .clone()
    .insertAfter(".menu")
    .addClass("cloned")
    .css("position", "fixed")
    .css("top", "0")
    .css("margin-top", "0")
    .css("z-index", "500")
    .removeClass("original")
    .hide();
  scrollIntervalID = setInterval(stickIt, 10);
  function stickIt() {
    var orgElementPos = $(".original").offset();
    orgElementTop = orgElementPos.top;
    if ($(window).scrollTop() >= orgElementTop) {
      // scrolled past the original position; now only show the cloned, sticky element.
      // Cloned element should always have same left position and width as original element.
      orgElement = $(".original");
      coordsOrgElement = orgElement.offset();
      leftOrgElement = coordsOrgElement.left;
      widthOrgElement = orgElement.css("width");
      $(".cloned")
        .css("left", leftOrgElement + "px")
        .css("top", 0)
        .css("width", widthOrgElement)
        .show();
      $(".original").css("visibility", "hidden");
    } else {
      // not scrolled past the menu; only show the original menu.
      $(".cloned").hide();
      $(".original").css("visibility", "visible");
    }
  }

  //   <!-- Initialize Swiper -->
  var swiper = new Swiper(".mySwiper", {
    scrollbar: {
      el: ".swiper-scrollbar",
      hide: false,
    },
    //Optional parameters
    direction: "horizontal",
    speed: 1000,
    loop: false,
    autoplay: {
      delay: 2000,
    },
  });

  //
  $(window).scroll(function () {
    if ($(this).scrollTop() > 500) {
      $("#arrow_up").fadeIn();
    } else {
      $("#arrow_up").fadeOut();
    }
  });

  //
  $(window).scroll(function () {
    var scrollPos = $(window).scrollTop();
    var windowHeight = $(window).height();
    // console.log(scrollPos, windowHeight);//捲動位置 和 視窗高度 互相都會變
    // animated
    $(".animated_fast").each(function () {
      var thisPos = $(this).offset().top;
      if (windowHeight + scrollPos >= thisPos) {
        $(this).addClass("fadeIn");
      }
    });
    $(".animated").each(function () {
      var thisPos = $(this).offset().top;
      if (windowHeight + scrollPos >= thisPos) {
        $(this).addClass("fadeIn");
      }
    });
    $(".animated_slow").each(function () {
      var thisPos = $(this).offset().top;
      if (windowHeight + scrollPos >= thisPos) {
        $(this).addClass("fadeIn");
      }
    });
  });

  // bg scroll 兩種改變CSS圖的位移方法
  //     y是指上下 ， /2是調整速度
  // $("#profiles").css("background-position-y", -(scrollPos / 2) + "px");
  //     transform效能較佳但較複雜
  // $("#header-ele").css("transform", "translateY( " + scrollPos / 2 + "px )");
});
