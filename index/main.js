$(function(){
	//纵向滚动变横向滚动
	$(document).on('mousewheel',function(e,d,dx,dy){
		if(dx!=0) {
			return true;
		}else if(dx==0) {
			e.preventDefault();
			var sl=$(document).scrollLeft();
			sl = (sl-dy*80<0) ? 0 : sl-dy*80;
			$(document).scrollLeft(sl);
		}
	});
	
	//视差滚动
	$(document).on('scroll',function(e){
		var sl=$(this).scrollLeft();
		$('section#main').css('background-position','-'+sl/9+'px top');
		$('div#layer_tree').css('background-position','-'+sl/3+'px top');
		$('div#layer_grass').css('background-position','-'+sl*1.5+'px top');
	});
});