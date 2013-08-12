$(function(){
		//鼠标移动显示导航栏
	$(document).on('mousemove',function(){
		var movetime=new Date();
		if(movetime.getTime() >= loadtime.getTime() + 1000 ) {
			$('.hide_on_load').fadeIn();
			$('body').animate({'backgroundColor':'#333'});
		}
	});
	
	$('a.slideshow_thumb').on('click',function(){
		changeSlide(this.id.substr(1));
	});
});

function autoSlide(){
	if( $('a.slideshow_thumb.inshow').is('#t05') ) {
		changeSlide('01');
	}else {
		changeSlide($('a.slideshow_thumb.inshow').next().attr('id').substr(1));
	}
}

window.setInterval('autoSlide()',8000);

function changeSlide(name) {
	$('img.slideshow:not(.p'+name+')').fadeOut('slow');
	$('img.slideshow.p'+name).fadeIn('slow');
	$('section#main').animate({'backgroundColor':$('a#t'+name).data('bgcolor')},'slow');
	if($('footer#main_footer').is(':hidden')){
		$('body').animate({'backgroundColor':$('a#t'+name).data('bgcolor')},'slow');
	}
	$('a.slideshow_thumb').removeClass('inshow');
	$('a#t'+name).addClass('inshow');
}