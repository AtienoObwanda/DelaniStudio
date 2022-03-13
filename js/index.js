//TOGGLE DESIGN
$(document).ready(function(){
  $(".designImg").click(function(){
    $(".designImg").hide('1000');
    $("#design").show('1500');
  });
  $("#design").click(function(){
    $("#design").slideUp('1500');
    $(".designImg").slideDown('1500');
  });
});
//TOGGLE DEVELOPMENT
$(document).ready(function(){
  $(".devImg").click(function(){
    $(".devImg").hide('1000');
    $("#dev").show('1500');
  });
  $("#dev").click(function(){
    $("#dev").slideUp('1500');
    $(".devImg").slideDown('1500');
  });
});
//hide("slide", { direction: "right" }, 1000);

//TOGGLE PRODUCT MGT
$(document).ready(function(){
  $(".prodImg").click(function(){
    $(".prodImg").hide('1000');
    $("#product").show('1500');
  });
  $("#product").click(function(){
    $("#product").slideUp('1500');
    $(".prodImg").slideDown('1500');
  });
});

// Overlay
$(document).ready(function() {
  $('#p1').bind('mouseover', function() {
      $(this).fadeTo('fast', '.4');
      $('.overlayText1').show();
  }).bind('mouseout', function() {
      $(this).fadeTo('fast', '1');
      $('.overlayText1').hide();
      
  });
});

$(document).ready(function() {
  $('#p2').bind('mouseover', function() {
      $(this).fadeTo('fast', '.4');
      $('.overlayText2').show();
  }).bind('mouseout', function() {
      $(this).fadeTo('fast', '1');
      $('.overlayText2').hide();
      
  });
});

$(document).ready(function() {
  $('#p3').bind('mouseover', function() {
      $(this).fadeTo('fast', '.4');
      $('.overlayText3').show();
  }).bind('mouseout', function() {
      $(this).fadeTo('fast', '1');
      $('.overlayText3').hide();
      
  });
});

$(document).ready(function() {
  $('#p4').bind('mouseover', function() {
      $(this).fadeTo('fast', '.4');
      $('.overlayText4').show();
  }).bind('mouseout', function() {
      $(this).fadeTo('fast', '1');
      $('.overlayText4').hide();
      
  });
});

$(document).ready(function() {
  $('#p5').bind('mouseover', function() {
      $(this).fadeTo('fast', '.4');
      $('.overlayText5').show();
  }).bind('mouseout', function() {
      $(this).fadeTo('fast', '1');
      $('.overlayText5').hide();
      
  });
});

$(document).ready(function() {
  $('#p6').bind('mouseover', function() {
      $(this).fadeTo('fast', '.4');
      $('.overlayText6').show();
  }).bind('mouseout', function() {
      $(this).fadeTo('fast', '1');
      $('.overlayText6').hide();
      
  });
});

$(document).ready(function() {
  $('#p7').bind('mouseover', function() {
      $(this).fadeTo('fast', '.4');
      $('.overlayText7').show();
  }).bind('mouseout', function() {
      $(this).fadeTo('fast', '1');
      $('.overlayText7').hide();
      
  });
});

$(document).ready(function() {
  $('#p8').bind('mouseover', function() {
      $(this).fadeTo('fast', '.4');
      $('.overlayText8').show();
  }).bind('mouseout', function() {
      $(this).fadeTo('fast', '1');
      $('.overlayText8').hide();
      
  });
});


/*
WORKS WELL, EXCEPT FOR THE ANIMATION OPTED TO GO WITH THE ALTERNATIVE
$(document).ready(function () {
  $('#p1').hover(function () {
      $(this).stop().animate({
          opacity: .4
      }, 200);
     //text
     $(".overlayText1").show('1500');
  }, function () {
      $(this).stop().animate({
          opacity: 1
      }, 500);
      //text
      $(".overlayText1").hide('1000');
  });
});
*/



