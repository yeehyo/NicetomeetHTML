$(function () {
  //슬라이더
  let currentIndex = 0;
  $(".sliderWrap").append($(".slider").first().clone(true));

  setInterval(function () {
    currentIndex++;
    $(".sliderWrap").animate({ marginTop: -300 * currentIndex + "px" }, 600);

    if (currentIndex == 3) {
      setTimeout(function () {
        $(".sliderWrap").animate({ marginTop: 0 }, 0);
        currentIndex = 0;
      });
    }
  }, 3000);

  //메인메뉴
  $(".nav > ul > li").mouseover(function () {
    $(".submenu").stop().slideDown(200);

    $(".nav > ul > li").mouseout(function () {
      $(".submenu").stop().slideUp(200);
    });
  });

  //탭메뉴
  let tabBtn = $(".tab-btn > a");
  let tabCont = $(".tab-cont > div");
  tabCont.hide().eq(0).show();

  tabBtn.click(function () {
    const index = $(this).index();

    $(this).addClass("active").siblings().removeClass("active");
    tabCont.eq(index).show().siblings().hide();
  });

  //팝업
  $(".popup-btn").click(function () {
    $(".popup-view").show();
  });

  $(".popup-close").click(function () {
    $(".popup-view").hide();
  });
});
