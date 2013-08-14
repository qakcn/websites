//旧浏览器兼容
document.createElement("header");
document.createElement("footer");
document.createElement("nav");
document.createElement("article");
document.createElement("section");
document.createElement("aside");

$(function(){
	loadtime=new Date(); //页面加载完成时间
	
	//下拉菜单事件响应
	$('li.dropdown_menu').on('mouseenter',function(){
		$(this).children('ul.dropdown').slideDown('fast');
	});
	$('li.dropdown_menu').on('mouseleave',function(){
		$(this).children('ul.dropdown').slideUp('fast');
	});
	
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