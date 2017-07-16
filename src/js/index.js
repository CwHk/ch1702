$(function(){
	$('.select_goods').click(function(){   
		if($(this).is(':checked')){
			$(this).find('.select-icon').css("background-image", 'url("image/单选绿圆_亮.svg")');
		}else{
			$(this).find('.select-icon').css("background-image", 'url("image/单选绿圆_灰.svg")');
		}
	});
//	$('.h_req2 .select_goods').click(function(){   
//		if($(this).is(':checked')){
//			$(this).find('.select-icon').css("background-image", 'url("image/单选绿圆_亮.svg")');
//			$(this).parents('.only-s').css("border-bottom","1px solid #979797");
//			$('.box-item-right .kinds').css("display","block");
//		}else{
//			$(this).find('.select-icon').css("background-image", 'url("image/单选绿圆_灰.svg")');
//			$(this).parents('.only-s').css("border-bottom","none");
//			$('.box-item-right .kinds').css("display","none");
//		}
////		var a = $(this).is(':checked');
////		alert(a);
//	})
})
 