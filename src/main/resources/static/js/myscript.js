/**
 * NAME    : 이미지 슬라이드 JQuery
 * AUTHOR  : 한소희
 * CONTACT : eeehos95@gmail.com
 */

var slideImg;
var winWidth;
var speed=1000;//애니메이션 시간
var delay=5000;//슬라이드 지연시간
var imgea;
var click=true;
$(function(){
	winWidth=$(window).width();
	imgea=$(".main-visual .img-slide").length;
	//페이지 로딩시 화면이미지랑...li의 사이즈 일치..
	$(".main-visual .img-slide").css("width", winWidth);
	$(".main-visual .img-slide").css("width", winWidth*imgea);
	
	//이미지슬라이드 시작
	slideImg=setTimeout(start, delay);
	bgChange();
	
	//화면사이즈가 변경될때마다 li의 사이즈도 화면사이즈로 재조정
	$(window).resize(function(){
		winWidth=$(window).width();
		$(".main-visual .img-slide").css("width", winWidth);
		$(".main-visual .img-slide").css("width", winWidth*imgea);
	});
	
	
	//오른쪽 화살표 눌러졌을때
	$("#next").click(moveRight);
	$("#prev").click(moveLeft);
	
});



function start(){
	/*slideImg = setInterval(moveRight, 3000);*/
	
	moveRight();
	slideImg=setTimeout(start, delay);

}
function stop(){
	/*clearInterval(slideImg);*/
	clearTimeout(slideImg);
}
///이미지가 왼쪽에서 오른쪽으로 이동
function moveLeft(){
	if(click){//이중클릭방지
		click=!click;
		winWidth=$(window).width();
		
		var first=$(".main-visual .img-slide:first-child");
		var last=$(".main-visual .img-slide:last-child");
		$(last).insertBefore(first);
		$(".main-visual .img-slide").css("left", -winWidth);
		$(".main-visual .img-slide").animate({left: 0 },speed,function(){
			bgChange();
			click=true;
		});
		
	}
}
///이미지가 오른쪽에서 왼쪽으로 이동
function moveRight(){
	if(click){//이중클릭방지
		click=!click;
		winWidth=$(window).width();
		
		var first=$(".main-visual .img-slide:first-child");
		var last=$(".main-visual .img-slide:last-child");
		$(".main-visual .img-slide").animate({left: -winWidth },speed,function(){
			$(first).insertAfter(last);
			$(".main-visual .img-slide").css("left", 0);
			bgChange();
			click=true;
		});
	}
}
//리스트버튼 클릭시 이미지 슬라이드
function listClick(className){
	if(click){//이중클릭방지
		click=!click;
		var x=$(className).position();
		var idx=$(className).index();
		
		$(".main-visual .img-slide").animate({left: -x.left },speed,function(){
			var i;
			for(i=0; i < idx ; i++){
				var first=$(".main-visual .img-slide:first-child");
				var last=$(".main-visual .img-slide:last-child");
				$(first).insertAfter(last);
			}
			$(".main-visual .img-slide").css("left", 0);
			bgChange();
			click=true;
		});
	}
	
}
////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////
