

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

// === swipper === //

var swiper = new Swiper('.swiper-container', {
    navigation: {
      nextEl: '.right-arrow',
      prevEl: '.left-arrow',
    },
  });

// === arrow ===//

$(document).ready(function(){
    $('.right-arrow').click(function(){
        if($('#case-study-image .info.active-0').hasClass('active-info')){
            $('.active-0').removeClass('active-info');
            $('.active-1').addClass('active-info');
        }else{
            $('.active-1').removeClass('active-info');
            $('.active-2').addClass('active-info');
        }
    });
});


$(document).ready(function(){
        $('.left-arrow').click(function(){
            if($('#case-study-image .info.active-2').hasClass('active-info')){
            $('.active-2').removeClass('active-info');
            $('.active-1').addClass('active-info');
        }else{
            $('.active-1').removeClass('active-info');
            $('.active-0').addClass('active-info');
        }
    });
})


// === hover-images === //

$(document).ready(function(){
    $('.text-1').hover(function(){
        if($('.active-img-1').hasClass('active') || $('.active-img-2').hasClass('active')){
            $('.active-img-0').addClass('active');
            $('.text-1').addClass('active-text');
            $('.active-img-1').removeClass('active');
            $('.active-img-2').removeClass('active');
            $('.text-2').removeClass('active-text');
            $('.text-3').removeClass('active-text');
        }
    });
    $('.text-2').hover(function(){
        if($('.active-img-0').hasClass('active') || $('.active-img-2').hasClass('active')){
            $('.active-img-1').addClass('active');
            $('.text-2').addClass('active-text');
            $('.active-img-0').removeClass('active');
            $('.active-img-2').removeClass('active');
            $('.text-1').removeClass('active-text');
            $('.text-3').removeClass('active-text');
        }
    });
    $('.text-3').hover(function(){
        if($('.active-img-0').hasClass('active') || $('.active-img-1').hasClass('active')){
            $('.active-img-2').addClass('active');
            $('.text-3').addClass('active-text');
            $('.active-img-0').removeClass('active');
            $('.active-img-1').removeClass('active');
            $('.text-1').removeClass('active-text');
            $('.text-2').removeClass('active-text');
        }
    })
})

// $(document).ready(function() {
//     if($('.swiper-slide').hasClass('active')) {
//         $('.swiper-slide').find('.active').eq(0).removeClass('active').next('div.active-img').addClass('active');
//     } else {
//         $('.swiper-slide').find('.active').eq(0).removeClass('active');
//         $('.swiper-slide').find('div.active-img').eq(0).addClass('active');
//     }
// }, 2000);


// ==== image sliders === //

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

$('.owl-m-images').owlCarousel({
    margin:10,
    dots:false,
    responsive:{
        0:{
            items:1
        },
        768:{
            items:1
        }
    }
})

