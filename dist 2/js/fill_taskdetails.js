$(function(){
	$(".inputBox .inputBtn").live("click",function(){
		if(!$(this).hasClass("reduce")){
			$(this).addClass("reduce");
		    var inputBlock = '<div class="inputBox">' + '<input type="" name="" placeholder="www.">'+
						'<div class="inputBtn">+</div>' + '</div>'
			$(this).parents('.referWebsite').append(inputBlock);
			$(this).html('-');
		}else{
			$(this).parents('.inputBox').remove();
		}
	});  
	$(".pay").click(function(){
		$('.mask').show();
		$('.login_modal').show();
	})
	$("body .login_modal .comfirm").live("click",function(){
		$('.mask').hide();
		$('.login_modal').hide();
	})
})
 
 