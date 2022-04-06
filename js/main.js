"use strict";

// アコーディオン

// 質問タブを変数に入れる
const tabs = document.querySelectorAll(".accordion-tab");
// 回答コンテンツを変数に入れる
const contents = document.querySelectorAll(".accordion-content");

for (let i = 0; i < tabs.length; i++) {
  // 質問タブをクリックしたら発火
  tabs[i].addEventListener("click", function () {
    // クリックした質問タブのactiveクラスを付け替える
    this.classList.toggle("active");
    // クリックした質問タブのindex番号の回答コンテンツのactiveクラスを付け替える
    contents[i].classList.toggle("active");
  });
};

// カルーセルスライダー


var swiper = new Swiper(".swiper", {
  slidesPerView: 1.75,
  spaceBetween: 10,
  centeredSlides:true,
  loop:true,
  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
  },
  // cssMode: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  
});

// フェードイン

// スクロール時のイベント
$(window).scroll(function() {
  // fadeinクラスに対して順に処理を行う
  $('.fadein').each(function() {
    // スクロールした距離
    let scroll = $(window).scrollTop();
    // fadeinクラスの要素までの距離
    let target = $(this).offset().top;
    // 画面の高さ
    let windowHeight = $(window).height();
    // fadeinクラスの要素が画面下にきてから200px通過した
    // したタイミングで要素を表示
    if (scroll > target - windowHeight + 200) {
      $(this).css('opacity','1');
      $(this).css('transform','translateY(0)');
    }
  });
});


$(window).scroll(function() {
  $('.hide').each(function() {
    var hTop = $(this).offset().top;
    var hHeight = $(this).height();
    var hBottom = hTop + hHeight;
    var wTop = $(window).scrollTop();
    var wHeight = $(window).height();
    var wBottom = wTop + wHeight;
    if (hBottom <= wBottom) {
      $(this).css('opacity', '1');
      }
    });
});

// 固定ヘッダーによるリンクのズレを解消

$(function() {
  var headerHeight = 80;//固定ヘッダーの高さを入れる
  $('[href^="#"]').click(function(){
    var href= $(this).attr("href");
    var target = $(href == "#" || href == "" ? 'html' : href);
    var position = target.offset().top-headerHeight; 
    $("html, body").animate({scrollTop:position}, 200, "swing");//200はスクロールの移動スピードです
    return false;
  });
});

// スムーススクロール

const header = $('#js-header');

$('a[href^="#"]').on('click', function() {
  const gap = header.outerHeight();
  const speed = 500;
  const href = $(this).attr("href");
  const target = $(href == "#" || href == "" ? "html" : href);
  const position = target.offset().top - gap;
  
  $("html, body").animate({ scrollTop: position }, speed, "swing");
  return false;
});

