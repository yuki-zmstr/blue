$(document).ready(function() {
  var wh = $(window).height();


    // $(function() {
    //     $("body, html").css({ 'overflow': "hidden", height: '100%' })
    //     setTimeout(function() {
    //         $("body, html").css({ overflow: 'auto', 'overflow-x': 'hidden', height: 'auto' })
    //     }, 8500)

    //     $("#catch")
    //     .css({"background-image": "linear-gradient(to bottom, rgb(255, 255, 255), rgb(0, 0, 255, 0.2))"})
    //     .delay(6500)
    //     .fadeOut(1500)

    //     $("#line1")
    //     .delay(1000)
    //     .css({opacity: 0, "display": "block"})
    //     .animate({opacity:1}, 1500);

    //     $("#line2")
    //     .delay(2500)
    //     .css({opacity: 0, "display": "block"})
    //     .animate({opacity:1}, 1500);

    //     $("#line3")
    //     .delay(4500)
    //     .css({opacity: 0, "display": "block"})
    //     .animate({opacity:1}, 1500);

    //     $("#main")
    //     .delay(8500)
    //     .css({ opacity: 0.0, visibility: "visible" })
    //     .animate({ opacity: 1.0 }, 1000)
    // });

    $(window).scroll(function() {
      var scroll = $(window).scrollTop();

      if (scroll > $("#message .img1").offset().top - wh / 1.3) {
        $("#message .img1").css({ opacity: 0.0, visibility: "visible" }).animate({ opacity: 1.0 }, 1000);
      } 

      if (scroll > $("#message .img2").offset().top - wh / 1.3) {
        $("#message .img2").css({ opacity: 0.0, visibility: "visible" }).animate({ opacity: 1.0 }, 1000);
      } 

      var c1 = $("#c1")
      var c2 = $("#c2")
      var c3 = $("#c3")

      if (scroll > $("#socialmedia").offset().top - wh / 1.3) {
          c1.animate({
            opacity: 1.0
        }, 800)
        setTimeout(function() {
            c2.animate({
                opacity: 1.0
            },800)
        },200)
        setTimeout(function() {
            c3.animate({
                opacity: 1.0
            },800)
        },400)
      
      }


      $(".col-md-3").each(function() {
          var elemPos = $(this).offset().top;
          if (scroll > elemPos - wh / 1.3) {
              $(this).css({ opacity: 0.0, visibility: "visible" }).animate({ opacity: 1.0 }, 1000);
          }
      });
    
  });

    
    // member pop up
    $popup = $('.popup');
    $(document).mousemove(function(){
      $popup.each(function() {
        var $this = $(this)
        var to_pop = "#" + $this.data('name');
        var $to_pop = $(to_pop)
        $this.hover(function(){
          $to_pop.fadeIn(300);
        }, function() {
          $to_pop.fadeOut(300)
        })
      })
    })
    // setInterval(function(){
      
    // }, 200)
      
});