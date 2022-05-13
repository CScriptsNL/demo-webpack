$(function() {
  $("p").mouseover(function() {
    $(this).addClass("liGreen");
  });
  $("p").mouseout(function() {
    $(this).removeClass("liGreen");
  });
});
