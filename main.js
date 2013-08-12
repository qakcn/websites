$(function(){
	loadtime=new Date(); //页面加载完成时间
	
	//滚动显示返回顶部按钮
	$(document).on('scroll',function(){
		if($(this).scrollTop() > 400) {
			$('div#top_button').fadeIn();
		}else {
			$('div#top_button').fadeOut();
		}
	});
	
	//返回顶部按钮事件响应
	$('div#top_button').click(function(){
		$(document.documentElement).animate({scrollTop: '0'});
	});
});