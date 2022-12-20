$(document).ready(function (){

	"use strict";

	//-------------Define Height of Header //
$("header").height($(window).height()-100);

	$(window).resize(function(){
	 $("header").height($(window).height()-100);

	})
//----------------------------------------------//	

   
//----------------- start nice Scrolling------------- //
	$('html').niceScroll({
	cursorcolor:'#EF9A0E',
	cursorborder:'1px solid #EF9A0E' ,
	cursorspeed:"100",
	cursorborderradius:'2px',
});
//------------------Start section Scrolling Top------------------------------//
$(window).on("scroll",function(){
	if($(this).scrollTop()>=500){
		$(".scrolling").show(500)
	}
	else{
		$(".scrolling").hide(500)
	}
})
$(".scrolling").on("click",function(){
	$('html,body').animate({
		scrollTop:0
	},1000)
})
});
