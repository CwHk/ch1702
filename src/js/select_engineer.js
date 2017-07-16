$(function(){
	$('.h_req1 .select_goods').click(function(){
		if($(this).is(':checked')){
			$(this).next('.select-icon').css("background-image", 'url(../image/单选绿圆_亮.svg)');
		}else{
			$(this).next('.select-icon').css("background-image", 'url(../image/单选绿圆_灰.svg)');
		}
	});
	$('.h_req2 .select_goods').click(function(){   
		if($(this).is(':checked')){
			$(this).next('.select-icon').css("background-image",'url(../image/单选绿圆_亮.svg)');
			$(this).parents('.only-s').css("border-bottom","1px solid #979797");
			$('.box-item-right .kinds').css("display","block");
		}else{
			$(this).next('.select-icon').css("background-image",'url(../image/单选绿圆_灰.svg)');
			$(this).parents('.only-s').css("border-bottom","none");
			$('.box-item-right .kinds').css("display","none");
		}
//		var a = $(this).is(':checked');
//		alert(a);
	})
	$('.chose_content .item-b').click(function(){
		$(this).find('i').css('display','block');
		$(this).css('border-color','#3cc8b4').siblings().css('border-color','#D7E4EC');
		
		$(this).siblings().find('i').css('display','none');
	})
})
 
 