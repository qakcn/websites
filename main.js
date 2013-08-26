//旧浏览器兼容
document.createElement("header");
document.createElement("footer");
document.createElement("nav");
document.createElement("article");
document.createElement("section");
document.createElement("aside");
document.createElement("time");

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
		if($(this).scrollTop() > 200) {
			$('div#top_button').fadeIn();
		}else {
			$('div#top_button').fadeOut();
		}
	});
	
	//返回顶部按钮事件响应
	$('div#top_button').on('click',function(){
		if(navigator.userAgent.match(/AppleWebKit/)) {
			$(document).scrollTop(0);
		}else {
			$('html').animate({scrollTop: 0},'fast');
		}
	});
	
	//搜索框伸缩
	$('div#search_bar').click(function(){
		$('input#s:hidden').show().animate({width:'200px'},'fast',function(){$(this).focus();});
	});
	$('input#s').blur(function(){
		$('input#s').animate({width:'0px'},'fast',function(){$(this).hide();});
	});
	
	//获取博客最新文章
	$.get('/blog/api/get_recent_posts/?post_type=post&count=9&include=title,url,date&date_format=n月j日', function(data){
		$('ul#news_feed').empty();
		for(var i=0;i<data.posts.length;i++) {
			var post=data.posts[i];
			var title=post.title;
			var titleslice=title.substr(0,12)+(title.length>12 ? '...' : '');
			var pubdate=post.date;
			var link=post.url;
			$('ul#news_feed').append('<li><a href="'+link+'" title="'+title+'">'+titleslice+'</a><time class="right">'+pubdate+'</time></li>');
		}
	},'json');
});