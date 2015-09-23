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
  })
});

function playHadouken () {
  $('#hadouken-sound')[0].volume = 0.5;
  $('#hadouken-sound')[0].load();
  $('#hadouken-sound')[0].play();
}
