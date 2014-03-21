$(function(){
	$('#menuico').click(function(){
		$(this).toggleClass('show');
		$('nav').toggleClass('show');
	});

	$('#search').click(function(){
		$('#menuico').removeClass('show').addClass('hide');
		$('body > header > h1').addClass('hide');
		$('nav').removeClass('show');
		$('#search-bar').addClass('show');
		$('#keyword').focus();
	});
	$(document).click(function(e){
		if($(e.target).is('header,header *')) return true;
		$('#search-bar,nav,#menuico').removeClass('show');
		$('#menuico,body>header>h1').removeClass('hide');
	});
});