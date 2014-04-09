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
  
  $("#alertbar").find('a.close').click(function(e) {
    e.preventDefault();
    $("#alertbar").slideUp();
  });

  $("a").click(function(e) {
    var href = $(this).attr('href');
    if(href.length > 1 && href[0] == '#') {
      e.preventDefault();
      $.scrollTo(href, 800);
    }
  });

  $("#top").hide();
  $("#nav").waypoint(function(direction) {
    if(direction == "down") $("#top").fadeIn();
    if(direction == "up") $("#top").fadeOut();
  });
});