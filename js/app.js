$(document).ready(function() {
  $(".ryu").mouseenter(function(){
    $('.ryu-still').hide();
    $('.ryu-ready').show();
  })
  .mouseleave(function(){
    $('.ryu-ready').hide();
    $('.ryu-still').show();
  })
  .mousedown(function(){
    //play hadouken
    playHadouken();
    $('.ryu-ready').hide();
    $('.ryu-throwing').show();
    $('.hadouken').show().finish()
      .animate(
      {'left': '1020px'},
      400,
      function(){
        $(this).hide();
        $(this).css('left','650px');
    }
  );
    //show hadouken and animate it to the right
  })
  .mouseup(function(){
    console.log('mouseup');
    $('.ryu-throwing').hide();
    $('.ryu-ready').show();
    //ryu goes back to his ready positon
  });
  $("html").keydown(function(){
    console.log('keypress');
    playRockWithYou();
    $(".ryu-still").hide();
    $(".ryu-ready").hide();
    $(".donot").hide();
    $(".whyudothat").show();
    $(".ryu-cool").show();

  })
  .keyup(function(){

    $(".ryu-ready").show();
    $(".ryu-cool").hide();
  });

});

function playHadouken () {
  $('#hadouken-sound')[0].volume = 0.5;
  $('#hadouken-sound')[0].load();
  $('#hadouken-sound')[0].play();
}

function playRockWithYou () {
  $("#rockwithyou")[0].volume = 0.5;
  $("#rockwithyou")[0].load();
  $("#rockwithyou")[0].play();
}
