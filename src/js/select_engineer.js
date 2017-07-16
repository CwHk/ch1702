$(function(){
	var numflag = 0;
	$('.box-s .jian').click(function(){
		var val = $(this).next().val();
		var num = val*1;
		if(num){
			num--;
			$(this).next().val(num);
		}else{
			return false
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
	    var flag = false;
	    $(this).parents('.tab-detail').each(function(){
	    	flag = $(this).find('.score:last span').hasClass("checkboxed");
	    	if(flag){
	    		numflag++
	    	}else{
	    		numflag--
	    	}
	    })
	    if(numflag){
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
 
