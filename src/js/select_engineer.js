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

    $(".checkbox").click(function() {
	    if ($(this).hasClass("checkboxed")) {
	        $(this).removeClass('checkboxed')
	    } else {
	        $(this).addClass("checkboxed")
	    }
	    var flag = $(this).parents('.tab-detail').find('.score:last span').hasClass("checkboxed");
	    if(flag){
	    	$('.bott-box').show();
	    }else{
	    	$('.bott-box').hide();
	    }
    })
    $('.score').mouseover(function() {
        $(this).find('.alert-message').show()
    })
    $('.score').mouseout(function() {
        $(this).find('.alert-message').hide()
    })
    $('.jian').click(function() {
        $(this).addClass("active");
    })
})
 
