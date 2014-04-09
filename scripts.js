$(function() {
  $t = $("#theme");
  $t.on('click', 'a.light', function() {
    $t.find('a.light').addClass('selected');
    $t.find('a.dark').removeClass('selected');
    $("html").addClass('light').removeClass('dark');
    $("img.dark").hide();
    $("img.light").show();
  });
  $t.on('click', 'a.dark', function() {
    $t.find('a.light').removeClass('selected');
    $t.find('a.dark').addClass('selected');
    $("html").removeClass('light').addClass('dark');
    $("img.dark").show();
    $("img.light").hide();
  });
});