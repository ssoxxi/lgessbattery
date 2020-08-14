/**
 * NAME    : 서브메뉴 slideDown-slideUp JQuery
 * AUTHOR  : 한소희
 * CONTACT : eeehos95@gmail.com
 */

$(function(){
	//처음로딩시 drop-menu는 보이지 않게 설정
	//*
	$("#drop-menu").hide();
	//var check=true; 
	//top-menu 호버시 토글처리...
	$("#top-menu").hover(function(){
		
   			$("#drop-menu").stop().slideDown(500);
		},function(){
		
			$("#drop-menu").stop().slideUp(500);
		}
		
  	);
//*/
});
////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////
