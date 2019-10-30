
$(document).ready(function(){
    init();
});

function init() {
    var $gnb = $('.gnb > ul > li');
    var $gnbBg = $('.gnb-bg');
    var $header = $('.header');
    var $headerBottom = $('.header-bottom');

    gnbOn($gnb, $gnbBg, $header);
    
}
// gnb에 마우스오버, 아웃 함에 따른 동작 함수
function gnbOn($gnb, $gnbBg, $header) {
    $('.gnb > ul > li, .gnb-bg').on({
        mouseover: function() {
            $gnb.children('ul').stop().slideDown(300);
            $gnbBg.stop().slideDown(300);
            $header.addClass('on');
        },
        mouseleave : function(){
            $gnb.children('ul').stop().slideUp(300);
            $gnbBg.stop().slideUp(300)
            $header.removeClass('on');
        }
    });
}