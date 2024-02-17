
// ドロワー部分
$(".humburger").click(function(){
   
    $(this).toggleClass("is-active");
    $("html").toggleClass("is-fixed");
    $(".nav").toggleClass("is-active");
    $(".header").toggleClass("is-active");

    if ($(this).hasClass("is-active")) {
      $("html,body").css("overflow", "hidden");
  } else {
      $("html,body").css("overflow", "");
  }
});

// mv部分のスワイパー

var mv_swiper = new Swiper(".mv__swiper", {
    loop: true,
    speed: 2000,
    effect: "fade",
    fadeEffect: {
      crossFade: true
    },
    autoplay: {
      delay: 4000,
      disableOnInteraction: false
    },

  });








// campaign部分のスワイパー,とりあえずはOK

$(function () {
    const swiper = new Swiper('.campaign__slide', {
        loop:true,
        loopAdditionalSlides: 4,
        loopedSlides: 8,
        speed: 3000,
    
        autoplay:{
            delay:1500,
            // 4s
            disableOnInteraction:false,
            // 自動再生がオフにならないように   
        },

        grabCursor:true,
        // centeredSlides:false,

        navigation: { 
            nextEl: '.campaign__rightarrow img',
            prevEl: '.campaign__leftarrow img',
        }, 
       
        breakpoints:{
            0:{
                slidesPerView:'auto',
                spaceBetween:0,
                // 1.339
            },
            768:{
                slidesPerView:'auto',
                spaceBetween:0,
            },
        }
      });    
    });


// animation 


//要素の取得とスピードの設定
var box = $('.colorbox'),
    speed = 700;  
 
//.colorboxの付いた全ての要素に対して下記の処理を行う
box.each(function(){
    $(this).append('<div class="colorbox__color"></div>')
    var color = $(this).find($('.colorbox__color')),
    image = $(this).find('img');
    var counter = 0;
 
    image.css('opacity','0');
    color.css('width','0%');
    


    color.on('inview', function(){
        if(counter == 0){
　　　　　$(this).delay(200).animate({'width':'100%'},speed,function(){
                   image.css('opacity','1');
                   $(this).css({'left':'0' , 'right':'auto'});
                   $(this).animate({'width':'0%'},speed);
                })
            counter = 1;
          }
     });
});


 // Topへ戻るボタン
 $(function () {
    var pageTop = $('.js-page-top');
    pageTop.hide(); // 最初はボタンを非表示にする
    $(window).scroll(function () {
      if ($(this).scrollTop() > 100) {
        // 100pxスクロールしたら表示
        pageTop.fadeIn(); // 100px以上スクロールしたらボタンをフェードイン
      } else {
        pageTop.fadeOut(); // 100px以下になったらボタンをフェードアウト
      }
    });

    pageTop.click(function () {
      $('body,html').animate({
        scrollTop: 0 // 上から0pxの位置に戻る
      }, 500 // 500ミリ秒かけて戻る
      );

      return false;
    });
  });
