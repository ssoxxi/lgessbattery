/**
 * NAME    : 이미지 슬라이드 JQuery
 * AUTHOR  : 한소희
 * CONTACT : eeehos95@gmail.com
 */


var totSlide;
var speed=1000; // 애니메이션 시간
var delay=2000; // 슬라이드 유지 시간
var images;
var slide;
/* set slide*/
$(function(){
	totSlide=$(".main-visual .swiper-wrap>.img-slide").length;
	
	start();
	
	$(".main-visual").hover( stop, start);
});


function start() {
	slide=setTimeout(next, delay);
}
function stop() {
	clearTimeout(slide);
}

function next(){
	images=$('.main-visual .swiper-wrap');
	images.stop().animate({left:-1920}, speed, function(){
		//제일앞-->제일뒤로
		var first=$(".main-visual .swiper-wrap .img-slide:first-child");
		var last=$(".main-visual .swiper-wrap .img-slide:last-child");
		//first.insertAfter(last);
		last.after(first);
		images.css("left",0); 
	});
	
	slide=setTimeout(next, delay);
}


////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////
