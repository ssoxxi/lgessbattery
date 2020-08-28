/**
 * NAME    : 이미지 슬라이드 JQuery
 * AUTHOR  : 한소희
 * CONTACT : eeehos95@gmail.com
 */


var totSlide;
var speed=1000; // 애니메이션 시간
var delay=5000; // 슬라이드 유지 시간
var images;
var slide;
/* set slide*/
$(function(){
	totSlide=$(".main-visual .swiper-wrap>.img-slide").length;
	
	slide=setTimeout(start, delay);
	
	$(".main-visual").hover( stop, start);
	$("#prev").click(prev);
	$("#next").click(next);
});


function start() {
	
	next();
	slide=setTimeout(start, delay);
	
}
function stop() {
	clearTimeout(slide);
}

function next(){
	images=$(".main-visual .swiper-wrap");
	images.stop().animate({left:-1920}, speed, function(){
		//제일앞-->제일뒤로
		var first=$(".main-visual .swiper-wrap .img-slide:first-child");
		var last=$(".main-visual .swiper-wrap .img-slide:last-child");
		//first.insertAfter(last);
		last.after(first);
		images.css("left",0); 
	});
	//slide=setTimeout(next, delay);
}

function prev(){
	var first=$(".main-visual .swiper-wrap .img-slide:first-child");
	var last=$(".main-visual .swiper-wrap .img-slide:last-child");
	images=$(".main-visual .swiper-wrap");
	
	first.before(last);
	images.css("left",-1920); 
	
	images.stop().animate({left:0}, speed);
	
}


////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////
