$(function(){
	$(".box-ys .ys_inp").live("keyup",function(){
		var money = $(this).val();
		$('.side-box-b .moneylist .right span').html(money);
		$('.side-box-b .all .money span').html(money);
	});
})
 
 