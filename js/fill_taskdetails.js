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
	$(".pay").click(function(){
		$('.h_mask').show();
		$('.h_loginModal').show();
	})
	$("body .h_loginModal .comfirm").live("click",function(){
		$('.h_mask,.h_loginModal').hide();
		// $('.h_loginModal').hide();
	})
})
 
 