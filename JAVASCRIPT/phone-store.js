$(document).ready(function(){
    // load trang
    TweenMax.staggerFrom($('body'),0.5,{top:100,opacity:0},0.5)

    $('.sign').on('click',function(event){
        event.preventDefault();
        $('.form-sign').addClass('show-form')
        $('.layout').addClass('show-layout')
    })
    $('.login').on('click',function(event){
        event.preventDefault();
        $('.form-login').addClass('show-form-login')
        $('.layout').addClass('show-layout')
    })
    $('.forgot-password a:first-child').on('click',function(event){
        event.preventDefault();
        $('.form-sign').addClass('show-form')
        $('.layout').addClass('show-layout')
        $('.form-login').removeClass('show-form-login')
    })
    $('.create-acount').on('click',function(event){
        event.preventDefault();
        $('.form-sign').addClass('show-form')
        $('.layout').addClass('show-layout')
        $('.form-forgot').removeClass('show-form-forgot')
    })
    $('.forgot-password a:last-child').on('click',function(event){
        event.preventDefault();
        $('.form-forgot').addClass('show-form-forgot')
        $('.layout').addClass('show-layout')
        $('.form-login').removeClass('show-form-login')
    })
    $('.close, .layout, .congras button, .congras-login button, .link-sent button').click(function(){
        $('.form-sign').removeClass('show-form')
        $('.form-login').removeClass('show-form-login')
        $('.layout').removeClass('show-layout')
        $('.congras').removeClass('show-congras')
        $('.congras-login').removeClass('show-congras-login')
        $('.form-forgot').removeClass('show-form-forgot')
        $('.link-sent').removeClass('show-link-sent')
        $('.nav-bar-mobile').removeClass('show-bar-mobile')
    })
    $('.btn').click(function(){
        $('.congras').addClass('show-congras')
        $('.form-sign').removeClass('show-form')
    })
    $('.btn-login').click(function(){
        $('.congras-login').addClass('show-congras-login')
        $('.form-login').removeClass('show-form-login')
    })
    $('.btn-sent').click(function(){
        $('.link-sent').addClass('show-link-sent')
        $('.form-forgot').removeClass('show-form-forgot')
    })

    //menu -mobile
    $('.menu-bar').click(function(){
        $('.nav-bar-mobile').addClass('show-bar-mobile')
        $('.layout').addClass('show-layout')
    })
    //slide img-sales
    $('.next').click(function(){
        clearInterval(time);
        var behind = $('.img-active').next();

        var posistion = $('.click-bg').index()+1;
        if(posistion == $('.click-sales ul li').length){
            posistion = 0;
        }
        //  console.log($('.click-bg').index()+1)
        $('.click-sales ul li').removeClass('click-bg')
        $('.click-sales ul li:nth-child('+ (posistion +1)+')').addClass('click-bg')

        if(behind.length ==0){
            $('.img-active').addClass('move-left').one('webkitAnimationEnd',function(){
                $('.move-left').removeClass('move-left')
            })
            $('.bg-sales .img-sales:first-child()').addClass('move-from-right').one('webkitAnimationEnd',function(){
                $('.img-active').removeClass('img-active')
                $('.move-from-right').addClass('img-active').removeClass('move-from-right')
            })
        }
        else{
            $('.img-active').addClass('move-left').one('webkitAnimationEnd',function(){
                $('.move-left').removeClass('move-left')
            })
            behind.addClass('move-from-right').one('webkitAnimationEnd',function(){
                $('.img-active').removeClass('img-active')
                $('.move-from-right').addClass('img-active').removeClass('move-from-right')
            })
        }
    })
    $('.prev').click(function(){
        clearInterval(time);
        var previous = $('.img-active').prev();

        var posistion = $('.click-bg').index()+1;
        if(posistion == 1){
            posistion = $('.click-sales ul li').length+1;
        }
        $('.click-sales ul li').removeClass('click-bg')
        $('.click-sales ul li:nth-child('+ (posistion -1)+')').addClass('click-bg')

        if(previous.length ==1){
            $('.img-active').addClass('move-right').one('webkitAnimationEnd',function(){
                $('.move-right').removeClass('move-right')
            })
            previous.addClass('move-from-left').one('webkitAnimationEnd',function(){
                $('.img-active').removeClass('img-active')
                $('.move-from-left').addClass('img-active').removeClass('move-from-left')
            })
        }
        else{
            $('.img-active').addClass('move-right').one('webkitAnimationEnd',function(){
                $('.move-right').removeClass('move-right')
            })
            $('.bg-sales .img-sales:last-child()').addClass('move-from-left').one('webkitAnimationEnd',function(){
                $('.img-active').removeClass('img-active')
                $('.move-from-left').addClass('img-active').removeClass('move-from-left')
            })
        }
    })
    //click slide
    $('.click-sales ul li').click(function(){
        $('.click-sales ul li').removeClass('click-bg')
        $(this).addClass('click-bg')

        $('.img-active').addClass('move-right').one('webkitAnimationEnd',function(){
            $('.move-right').removeClass('move-right')
        })
        // console.log(($(this).index()+1))
         $('.bg-sales .img-sales:nth-child('+($(this).index()+1)+')').addClass('move-from-left').one('webkitAnimationEnd',function(){
             $('.img-active').removeClass('img-active')
             $('.move-from-left').addClass('img-active').removeClass('move-from-left')
        })
    })
    var time = setInterval(function(){
        $('.next').trigger('click')
    },3000)

    $('.list-item').slideUp();
    $('.filter > h3').click(function(){
        $('.list-item').slideToggle();
    })

    $('.menu-child li:nth-child(1)').on('click',function(event){
        event.preventDefault();
        $('html,body').animate({scrollTop:$('.iphone').offset().top},700,'easeInOutExpo')
    })
    $('.menu-child li:nth-child(2)').on('click',function(event){
        event.preventDefault();
        $('html,body').animate({scrollTop:$('.samsung').offset().top},700,'easeInOutExpo')
    })
    $('.menu-child li:last-child()').on('click',function(event){
        event.preventDefault();
        $('html,body').animate({scrollTop:$('.xiaomi').offset().top},700,'easeInOutExpo')
    })
    $('.nav-bar-header ul li:nth-child(4)').on('click',function(event){
        event.preventDefault();
        $('html,body').animate({scrollTop:$('.form-guarantee').offset().top},700,'easeInOutExpo')
    })
    

})











$(document).ready(function(){  // click plus and minus for quantity
    // var amount = parseInt($('.amount').val());
   $('.plus').click(function(){
    $(this).prev().val(+$(this).prev().val()+1);
   })

   $('.minus').click(function(){
     if( $(this).next().val() > 1){
        $(this).next().val(+$(this).next().val()-1);
     }
     else{
        $(this).next().val() ==1;
     }
   })
})

