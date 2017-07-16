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
})
 
 