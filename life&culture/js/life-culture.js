// === wow === //

$(function(){
    new WOW().init();
},1000);



// === click(benifits-perks)=== //

$(document).ready(function(){
    $('.text-1').click(function(){
        $('.text-1').addClass('active-text');
        $('.text-2').removeClass('active-text');
        $('.active-1').addClass('active');
        $('.active-2').removeClass('active');       
    })
    $('.text-2').click(function(){
        $('.text-2').addClass('active-text');
        $('.text-1').removeClass('active-text');
        $('.active-2').addClass('active');
        $('.active-1').removeClass('active');       
    })
})