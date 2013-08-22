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
});