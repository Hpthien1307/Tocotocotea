// scroll change background color navbar header
var navBarHeader = document.querySelector('.header-navbar')
window.onscroll = ()=>{
  if (document.body.scrollTop >=100 || document.documentElement.scrollTop >=100) {
      navBarHeader.classList.add('navbar-change')
      navBarHeader.classList.remove('navbar-transparent')
  }
  else{
    navBarHeader.classList.add('navbar-transparent')
    navBarHeader.classList.remove('navbar-change')
  }
}
// end

$(document).ready(function () {
  // slide banner header
  $(".banner-img").slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    speed:300,
    arrows: true,
    prevArrow:
      "<button type='button' class='slick-prev pull-left'><i class='fa fa-angle-left' aria-hidden='true'></i></button>",
    nextArrow:
      "<button type='button' class='slick-next pull-right'><i class='fa fa-angle-right' aria-hidden='true'></i></button>",
  });
  // end

  // Scroll to the required item
  $('.navbar li:nth-child(2) a').on('click',function(event){
    event.preventDefault()
    $('html,body').animate({scrollTop:$('.home-about-us').offset().top},400,'easeInOutExpo')
  })
  $('.navbar li:nth-child(3) a').on('click',function(event){
    event.preventDefault()
    $('html,body').animate({scrollTop:$('.home-hot-products').offset().top},400,'easeInOutExpo')
  })
  $('.navbar li:nth-child(4) a').on('click',function(event){
    event.preventDefault()
    $('html,body').animate({scrollTop:$('.home-news-promotion').offset().top},400,'easeInOutExpo')
  })
  // end

  // click recruitment show form apply job
  $('.navbar li:nth-child(6) a').on('click',function(event){
    event.preventDefault()
    $('.form-apply-job').addClass('show-form-apply-job');
    $('.overlay-wrapper').css('display','block');
  })
  $('.overlay-wrapper').click(function(){
    $('.form-apply-job').removeClass('show-form-apply-job');
    $('.form-success').removeClass('show-form-success');
    $('.overlay-wrapper').css('display','none');
  })


  $('.btn-sent').on('click',function(event){
    event.preventDefault();
    $('.form-success').addClass('show-form-success');
    $('.form-apply-job').removeClass('show-form-apply-job');
  })



  // click show list job position
  $('.list-input i').click(function(){
    $('.list-job').css('display','block');
  })
  $('.list-job li').click(function(){
    var valueElement = $(this).text()
    $('.list-input input').val(valueElement);
    $('.list-job').css('display','none');
  })
  //end


  // load web
  TweenMax.staggerFrom($('body'),0.5,{top:100,opacity:0},0.5)
  // end

  // show menu bar mobile
  var iconBar = $('.icon-bar');
  var buttonClose = $('.close');
  var menuMobile = $('.list-menu');
  $(iconBar).click(()=>{
    $(menuMobile).addClass('open-menu-mobile');
  })
  $(buttonClose).click(()=>{
    $(menuMobile).removeClass('open-menu-mobile')
  })
});