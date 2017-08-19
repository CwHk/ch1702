$(function(){
	$(".inputBox .inputBtn").live("click",function(){
		if(!$(this).hasClass("reduce")){
			$(this).addClass("reduce");
		    var inputBlock = '<div class="inputBox">' + '<input type="" name="" placeholder="www.">'+
						'<div class="inputBtn">+</div>' + '</div>'
			$(this).parents('.referWebsite').prepend(inputBlock);
			$(this).html('-');
		}else{
			$(this).parents('.inputBox').remove();
		}
	});
	$(".box-ys .ys_inp").live("keyup",function(){
		var money = $(this).val();
		$('.side-box-b .moneylist .right span').html(money);
		$('.side-box-b .all .money span').html(money);
	});
})
 
 