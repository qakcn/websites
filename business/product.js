$(function(){
	$('ul#product_list li').on('click',function(){
		$(this).animate({width:520},'fast',function(){
			$(this).children('p').fadeIn('fast');
		}).siblings().animate({width:30},'fast').children('p').hide();
	});
	
	switch(window.location.hash) {
		case '#younger': $('ul#product_list li').eq(0).click();break;
		case '#elder': $('ul#product_list li').eq(1).click();break;
		case '#egg': $('ul#product_list li').eq(2).click();break;
	}
});