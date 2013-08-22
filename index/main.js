$(function(){
	$(document).on('mousewheel',function(e,d,dx,dy){
		if(dx!=0) {
			return true;
		}else if(dx==0) {
			e.preventDefault();
			var sl=$(document).scrollLeft();
			if(dy<0 && $(document).width()-sl==$(window).width() || dy>0 && sl==0) {
				var st=$(document).scrollTop();
				st = (st-dy*50<0) ? 0 : st-dy*50;
				$(document).scrollTop(st);
			}else {
				sl = (sl-dy*80<0) ? 0 : sl-dy*80;
				$(document).scrollLeft(sl);
			}
		}
	});
	
	$(document).on('scroll',function(e){
		var sl=$(this).scrollLeft();
		$('section#main').css('background-position','-'+sl/9+'px top');
		$('div#layer_tree').css('background-position','-'+sl/3+'px top');
		$('div#layer_grass').css('background-position','-'+sl*1.5+'px top');
	});
	
	$.get('blog/api/get_recent_posts/?post_type=post&count=9&include=title,url,date&date_format=n月j日', function(data){
		$('ul#news_feed').empty();
		for(var i=0;i<data.posts.length;i++) {
			var post=data.posts[i];
			var title=post.title;
			var titleslice=title.length>14 ? (title.slice(0,14)+'...') : title;
			var pubdate=post.date;
			var link=post.url;
			$('ul#news_feed').append('<li><a href="'+link+'" title="'+title+'">'+titleslice+'</a><time class="right">'+pubdate+'</time></li>');
		}
	},'json');
});