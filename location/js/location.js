// === wow === //

$(function(){
    new WOW().init();
},1000);


// ==== navbar scroll ====//


$(function() {
    var header = $(".navbar");

    $(window).scroll(function() {
        var scroll = $(window).scrollTop();    
            if (scroll >= 60) {
                header.addClass("navbar-shadow");
                header.addClass("bg-light");
                $('.navbar .navbar-brand').removeClass('color-w');
                $('.navbar ul li a').removeClass('color-w text-white');
            } else {
                header.removeClass("navbar-shadow");
                header.removeClass("bg-light");
                $('.navbar .navbar-brand').addClass('color-w');
                $('.navbar ul li a').addClass('color-w text-white');
        }
    });
});


// === team section ===//


$(document).ready(function(){
    $('#team h3.text').hover(function(){
        if($(this).hasClass('active-text') && $(this).prevAll() != ('active-text')){
            $(this).addClass('active-text').nextAll().removeClass('active-text');
        }else{
            $(this).addClass('active-text').prevAll().removeClass('active-text');
        }
    });
})


$(document).ready(function(){
    $('#team .text-0').hover(function(){
        $('#team .active-0').addClass('active').nextAll().removeClass('active');
    })
})

$(document).ready(function(){
    $('#team .text-1').hover(function(){
        $('#team .active-1').addClass('active').nextAll().removeClass('active');
        $('#team .active-0').removeClass('active');
    })
})

$(document).ready(function(){
    $('#team .text-2').hover(function(){
        $('#team .active-2').addClass('active').prevAll().removeClass('active');
        $('#team .active-3').removeClass('active');
    })
})

$(document).ready(function(){
    $('#team .text-3').hover(function(){
        $('#team .active-3').addClass('active').prevAll().removeClass('active');
    })
})
//==== image-slider ====//

$('#images .owl-images').owlCarousel({
    rtl:false,
    loop:false,
    margin:10,
    nav:false,
    dots:false,
    autoplay:false,
    autoplayTimeout:3000,
    autoplayHoverPause:false,
    responsive:{
        0:{
            items:3
        }
    }
})

// ==== zoom image====//
$(function(){
    $("#images .owl-images").magnificPopup({
        delegate : 'a',
        type : 'image',
        gallery:{
            enabled:true
        }
    });
})


$(document).ready(function(){
    $('#facts h3.text').hover(
        function(){  
            $(this).addClass('active-text');
        },
        function(){         
            $(this).removeClass('active-text');
            $(this).nextAll().removeClass('active-text'); 
            $(this).prevAll().removeClass('active-text');
            $(this).addClass('active-text');      
        }
    )
})

$(document).ready(function(){
    $("#facts .text-0").hover(function(){
        $('#facts .active-0').addClass('display').nextAll().removeClass('display');
    })

    $("#facts .text-1").hover(function(){
        $('#facts .active-1').addClass('display').nextAll().removeClass('display');
        $('#facts .active-0').removeClass('display');
    })

    $("#facts .text-2").hover(function(){
        $('#facts .active-2').addClass('display').prevAll().removeClass('display');
    })
})
  

$(document).ready(function(){
    setTimeout(function(){
        $("#facts .text-0").hover(function(){
            $('#facts .active-0').addClass('active').nextAll().removeClass('active');
        })
    
        $("#facts .text-1").hover(function(){
            $('#facts .active-1').addClass('active').nextAll().removeClass('active');
            $('#facts .active-0').removeClass('active');
        })
    
        $("#facts .text-2").hover(function(){
            $('#facts .active-2').addClass('active').prevAll().removeClass('active');
        })
    },600)
})
// === image-slider === //

$('.owl-images').owlCarousel({
    rtl:false,
    loop:false,
    margin:10,
    nav:false,
    autoplay:true,
    autoplayTimeout:3000,
    autoplayHoverPause:false,
    responsive:{
        0:{
            items:1
        }
    }
})


// ==== life & culture ==== //

$(document).ready(function(){
    $(".lc-text-1").hover(function(){
        $(' .lc-active-0').removeClass('lc-active').next().addClass('lc-active');
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

// === oc click-info === //


$(document).ready(function($) {
    $("#panel").hide('slow');
    $("#team .m-container .button").click(function() {
        $(this).parent().children("#panel").slideToggle(600);
        $('#team .m-container .button svg').toggleClass('rotate');    
    });
});


$(document).ready(function(){
    $('#facts-panel').hide('slow');
    $('#facts .button').click(function(){
        $(this).parent().children('#facts-panel').slideToggle("slow");
        $('#facts .button svg').toggleClass('rotate');
    });
})
  