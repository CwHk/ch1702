$(function(){
	$('.box-s .jian').click(function(){
		var val = $(this).next().val();
		num = val*1;
		if(num){
			return false
		}else{
			num--
			$(this).next().val(num);
		}
	});
	$('.box-s .jia').click(function(){
		var num = $(this).prev().val();
		num++
		$(this).prev().val(num);
	});
})
 
 