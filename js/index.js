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