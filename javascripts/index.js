$(document).ready(function () {
  $(".nav_parent").hover(
    function () {
      // over
      $(this).find("ul").slideDown();
    },
    function () {
      // out
      $(this).find("ul").slideUp();
    }
  );
});
