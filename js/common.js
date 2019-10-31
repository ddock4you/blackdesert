
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


//img hover
// $('.btnMore, .paging .btnPrev, .paging .btnNext, .schBox .btnSch, .newsView .btnBox a, .viewWallpaper .btnClose, .csMainSch .btnSch, .noticeView .btnBox a, .mpBanner ul li a, .openIdTxt a, .commPaging .btnFirst, .commPaging .btnPrev, .commPaging .btnNext, .commPaging .btnLast, .communityView .view .tit .btnBox a, .replayList .td:not(.write) a, .communityView .btnWrap li:first-child a, #detailViewImg .btnClose').on("mouseenter keyup", function () {
//     if ($(this).find("img").attr("src").indexOf("_hover") < 0) {
//         $(this).find("img").attr("src", $(this).find("img").attr("src").replace(".gif", "_hover.gif"));
//     }
// }).on("mouseleave keydown", function () {
//     $(this).find("img").attr("src", $(this).find("img").attr("src").replace("_hover.gif", ".gif"));
// });