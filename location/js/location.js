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
        if($('#team .text-0').hasClass('active-text')){
            $('.active-0').addClass('active').nextAll().removeClass('active');
        }
        else if($('#team .text-1').hasClass('active-text')){
            $('.active-1').addClass('active').nextAll().removeClass('active');
            $('.active-0').removeClass('active');
        }
        else if($('#team .text-2').hasClass('active-text')){
            $('.active-2').addClass('active').prevAll().removeClass('active');
            $('.active-3').removeClass('active');
        }
        else{
            $('.active-3').addClass('active').prevAll().removeClass('active');
        }
    });
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
    $('#facts h3.text').hover(function(){
        if($(this).hasClass('active-text') && $(this).nextAll() != ('active-text')){
            $(this).addClass('active-text').prevAll().removeClass('active-text');
        }else{
            $(this).addClass('active-text').nextAll().removeClass('active-text');
        }
            if($('#facts h3.text-0').hasClass('active-text')){
                $('#facts .active-0').addClass('display').nextAll().removeClass('display');
            }
            else if($('#facts h3.text-1').hasClass('active-text')){
                $('#facts  .active-1').addClass('display').nextAll().removeClass('display');
                $('#facts .active-0').removeClass('display')
            }
            else{
                $('#facts  .active-2').addClass('display').prevAll().removeClass('display');
            }
        setTimeout(function(){
            if($('#facts h3.text-0').hasClass('active-text')){
                $('#facts .active-0').addClass('active').nextAll().removeClass('active');
            }
            else if($('#facts h3.text-1').hasClass('active-text')){
                $('#facts  .active-1').addClass('active').nextAll().removeClass('active');
                $('#facts .active-0').removeClass('active')
            }
            else{
                $('#facts  .active-2').addClass('active').prevAll().removeClass('active');
            }
        }, 500)
    })
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
