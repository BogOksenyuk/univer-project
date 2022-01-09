$(function(){

  $('.profile-about__information-button').on('click', function(){
    $('.profile-about__information-button, .profile-about__information-input').toggleClass('active');
  });

  $('input, select').styler();

  $('.info__link-title').on('click', function(){
    $(this).next().slideToggle(300);
  });

  $('.profile-add__btn-link').on('click', function(){
    $(this).toggleClass('active');
    $(this).parent().next().slideToggle(400);
  });

  $('.profile-form__address-uslugi').on('click', function(){
    $('.profile-form__address-uslugi').removeClass('active');
    $(this).addClass('active');
  });

  $('.profile-form__language-link').on('click', function(){
    $('.profile-form__language-link').removeClass('active');
    $(this).addClass('active');
  });

  $('.profile-form__block-yes').on('click', function(){
    $('.profile-form__block-vibor').removeClass('active');
    $('.profile-form__block').addClass('active');
    $(this).addClass('active');
    
  });

  $('.profile-form__block-not').on('click', function(){
    $('.profile-form__block-vibor').removeClass('active');
    $('.profile-form__block').removeClass('active');
    $(this).addClass('active');
  });

  $(window).on("load",function(){
    $(".document-table__list").mCustomScrollbar({
      scrollInertia: '330',
    });
  });

  $('.document-popup__btn-close').click(function () {
    $.fancybox.close();
  });

  
});