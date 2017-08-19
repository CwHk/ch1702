$(function() {
    var numflag = 0;

    $('.box-s .jian').click(function() {
        var totalPrice = 0;
        var val = $(this).next().val();
        var num = val * 1;
        if (num) {
            num--;
            if (num == 0) {
                $(this).removeClass('active');
            }
            $(this).next().val(num);
            var danjia = $(this).parent().prev().find('.xprice').html();
            var singlePrice;
            singlePrice = num * danjia;
            var myAttr = $(this).parents('.kinds-item').attr('myAttr');
            $('.moneylist').children('.item:[myAttr=' + myAttr + ']').find('.number').html(num);
            $('.moneylist').children('.item:[myAttr=' + myAttr + ']').find('.right span').html(singlePrice);
            $('.moneylist').children('.item').each(function() {
                totalPrice = totalPrice * 1 + $(this).find('.right span').html() * 1;
            })
            $('.money .totalPrice').html(totalPrice);
        } else {
            return false
        }
    });
    $('.box-s .jia').click(function() {
        var totalPrice = 0;
        var num = $(this).prev().val();
        var danjia = $(this).parent().prev().find('.xprice').html();
        var singlePrice;
        num++
        if (num > 0) {
            $(this).parent().find('.jian').addClass('active');
        }
        $(this).prev().val(num);
        singlePrice = num * danjia;
        var myAttr = $(this).parents('.kinds-item').attr('myAttr');
        $('.moneylist').children('.item:[myAttr=' + myAttr + ']').find('.number').html(num);
        $('.moneylist').children('.item:[myAttr=' + myAttr + ']').find('.right span').html(singlePrice);
        $('.moneylist').children('.item').each(function() {
            totalPrice = totalPrice * 1 + $(this).find('.right span').html() * 1;
        })
        $('.money .totalPrice').html(totalPrice);


        var h_html ='<div class="item" myAttr="'+myAttr+'"><div class="left">'+
                '<span class="detail">首页</span>'+
                '<span class="num">x<span class="number">0</span></span></div>'+
                '<div class="right">¥<span>0</span></div></div>'





    });

    $(".table-s .tab-detail").click(function() {
        if ($(this).find('.checkbox').hasClass("checkboxed")) {
            $(this).find('.checkbox').removeClass('checkboxed')
        } else {
            $(this).find('.checkbox').addClass("checkboxed")
        }
        // var flag = false;
        $(this).parent().find('.tab-detail').each(function() {
            var flag = false;
            flag = $(this).find('.score:last span').hasClass("checkboxed");
            if (flag) {
                numflag++
            } else {
                numflag--
            }
        })
        if (numflag) {
            $('.bott-box').show();
        } else {
            $('.bott-box').hide();
        }
    })
    $('.kinds-item .text').mouseover(function() {
        $(this).find('.alertimg-box').show()
    })
    $('.kinds-item .text').mouseout(function() {
        $(this).find('.alertimg-box').hide()
    })
    $('.score').mouseover(function() {
        $(this).find('.alert-message').show()
    })
    $('.score').mouseout(function() {
        $(this).find('.alert-message').hide()
    })
})