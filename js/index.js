/*
  $(document).ready(function() {
    $(".devImg").click(function() {
      $("#devImg").hide();
      $("#dev").show();
      
    });
    $(".dev").click(function() {
      $("#dev").hide();
      $("#devImg").show();
    });
    
});
 */
/*
$(document).ready(function() {
  $(".clickable").click(function() {
    $("#walrus-showing").toggle();
    $("#walrus-hidden").toggle();
  });
}); */


/*
$(document).ready(function(){
  $(".devImg").click(function(){
    $("#devImg").slideDown('1500').hide('1000');
    $("#dev").show('1500');
  });
  $("#dev").click(function(){
    $("#dev").slideUp('1500');
    $("#devImg").slideDown('1500');
  });
}); */
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