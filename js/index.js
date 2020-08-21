$(function(){
    new WOW().init();
});

// ==== navbar scroll ====//
$(function() {
    var header = $(".navbar");

    $(window).scroll(function() {
        var scroll = $(window).scrollTop();
        if (scroll >= 100) {
            header.addClass("navbar-shadow");
        } else {
            header.removeClass("navbar-shadow");
        }
    });
});


// ==== work-info ====//

$(document).ready(function(){
    $(' .text-1').hover(function(){
      $('.active-0').removeClass('active ');
      $(' .active-1').addClass('active ');
    },
    function(){
        $(' .active-1').removeClass('active');
      $(' .active-0').addClass('active');
    });
})

$(document).ready(function(){
    $(' .text-2').hover(function(){
      $('.active-0').removeClass('active');
      $(' .active-2').addClass('active ');
    },function(){
        $(' .active-2').removeClass('active');
      $(' .active-0').addClass('active');
    });
});

$(document).ready(function(){
    $(' .text-3').hover(function(){
      $('.active-0').removeClass('active ');
      $(' .active-3').addClass('active ');
    },function(){
        $(' .active-3').removeClass('active');
      $(' .active-0').addClass('active');
    });
});


// === life-culture === //

$(document).ready(function(){
    $(".lc-text-1").hover(function(){
        $(' .lc-active-0').removeClass('lc-active');
        $(' .lc-active-1').addClass('lc-active');
        $(' .inactive-1').addClass('lc-active');
    },function(){
        $(' .lc-active-0').addClass('lc-active');
        $(' .lc-active-1').removeClass('lc-active');
        $(' .inactive-1').removeClass('lc-active');
    });
});

$(document).ready(function(){
    $(".lc-text-2").hover(function(){
        $(' .lc-active-0').removeClass('lc-active');
        $(' .lc-active-2').addClass('lc-active');
        $(' .inactive-2').addClass('lc-active');
    },function(){
        $(' .lc-active-0').addClass('lc-active');
        $(' .lc-active-2').removeClass('lc-active');
        $(' .inactive-2').removeClass('lc-active');
    });
});

$(document).ready(function(){
    $(".lc-text-3").hover(function(){
        $(' .lc-active-0').removeClass('lc-active');
        $(' .lc-active-3').addClass('lc-active');
        $(' .inactive-3').addClass('lc-active');
    },function(){
        $(' .lc-active-0').addClass('lc-active');
        $(' .lc-active-3').removeClass('lc-active');
        $(' .inactive-3').removeClass('lc-active');
    });
});

$(document).ready(function(){
    $(".lc-text-4").hover(function(){
        $(' .lc-active-0').removeClass('lc-active');
        $(' .lc-active-4').addClass('lc-active');
        $(' .inactive-4').addClass('lc-active');
    },function(){
        $(' .lc-active-0').addClass('lc-active');
        $(' .lc-active-4').removeClass('lc-active');
        $(' .inactive-4').removeClass('lc-active');
    });
});

$(document).ready(function(){
    $(".lc-text-5").hover(function(){
        $(' .lc-active-0').removeClass('lc-active');
        $(' .lc-active-5').addClass('lc-active');
        $(' .inactive-5').addClass('lc-active');
    },function(){
        $(' .lc-active-0').addClass('lc-active');
        $(' .lc-active-5').removeClass('lc-active');
        $(' .inactive-5').removeClass('lc-active');
    });
});

//  ==== home (mobile-view) ==== //

$('.owl-images').owlCarousel({
    loop:true,
    margin:10,
    dots:true,
    autoplay:true,
    autoplayTimeout:2500,
    responsive:{
        0:{
            items:1
        },
        768:{
            items:1
        }
    }
})


$('.owl-image-1').owlCarousel({
    loop:true,
    margin:10,
    dots:true,
    autoplay:true,
    autoplayTimeout:2500,
    responsive:{
        0:{
            items:1
        },
        768:{
            items:1
        }
    }
})


//  === scroll speed ===  //

$(function(){
    $("a.nav-link").click(function(event){
        
        var section = $(this).attr("href");
        
        $('html,body').animate({
            scrollTop:$(section).offset().top
        }, 900)
        event.preventDefault();
    })
})


$('.navbar-nav>li>a').on('click', function(){
    $('.navbar-collapse').collapse('hide');
});
