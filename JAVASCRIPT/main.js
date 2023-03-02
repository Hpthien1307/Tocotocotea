$(document).ready(function(){
    console.log('tính thử vị trí của scroll')
    console.log($('.menu-item').offset().top)  // hàm tính vị trí của thẻ cần click chuột
    $('.menu-pc li:nth-child(3) a').on('click',function(event){
        event.preventDefault();
        $('html,body').animate({scrollTop:$('.menu-item').offset().top},700,'easeInOutExpo');
    });
    $('.menu-pc li:nth-child(5) a').on('click',function(event){
        event.preventDefault();
        $('html,body').animate({scrollTop:$('.selection').offset().top},900,'easeInOutExpo')
    })
})
// click tự động scroll tới mục thẻ đó
$(document).ready(function(){
    $('.menu-pc li a').click(function(event){
        $(this).toggleClass('rotage')
    })
})
$(document).ready(function(){
    TweenMax.staggerFrom($('body'),0.5,{top:100,opacity:0},0.5)
})
// hiệu ứng load trang wed

$(document).ready(function(){
    $('.login').on('click',function(event){
        event.preventDefault();
        $('.form-login').addClass('show-login')
        $('.layout').addClass('show-layout')
    })
    $('.close-login, .layout, button').click(function(){
        $('.form-login').removeClass('show-login')
        $('.layout').removeClass('show-layout')
    })

    $('.sign').on('click',function(event){
        event.preventDefault();
        $('.form-sign').addClass('show-sign')
        $('.layout').addClass('show-layout')
    })
    $('.close-login, .layout, button').click(function(){
        $('.form-sign').removeClass('show-sign')
        $('.layout').removeClass('show-layout')
    })
    // menu-bar mobile
    $('.menu-bar').click(function(){
        $('.list-menu-mobile').addClass('show-list-menu-mobile')
        $('.layout').addClass('show-layout')
    })
    $('.close, .layout').click(function(){
        $('.list-menu-mobile').removeClass('show-list-menu-mobile')
        $('.layout').removeClass('show-layout')
    })

})



