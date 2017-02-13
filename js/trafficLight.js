$(document).ready(function(){
  /*var first = setInterval(green, 4000);
  var second = setInterval(orange, 8000);
  var third = setInterval(red, 2000);

  function green(){
    $("#greenLight").css("opcaity", 2);
    $("#yellowLight").css("opacity", 3);
    $("redLight").css("opacity", 1);


  };
  function orange(){
    $("#yellowLight").css("opacity", 0.4);
    $("#greenLight").css("opacity", 4);

  };
  function red(){
    $("#redLight").css("opacity", 4);
    $("#yellowLight").css("opcaity", 0.3);
  }
  */
  var first = setInterval(green, 2000);
  var second = setInterval(orange, 4000);
  var third = setInterval(red, 6000);

  function red(){
    $(".boxRed").css("opacity", 2);
    $(".boxOrange").css("opacity", 0.4);
    $(".boxGreen").css("opacity", 0.4);


  };

  function orange(){
    $(".boxOrange").css("opacity", 2);
    $(".boxRed").css("opacity", 0.4);
    $(".boxGreen").css("opacity", 0.4);
    //clearInterval(second, 4000);

  };
  function green(){
    $(".boxGreen").css("opacity", 2);
    $(".boxRed").css("opacity", 0.4);
    $(".boxOrange").css("opacity", 0.4);
    //clearInterval(third, 4000);

  };


});
