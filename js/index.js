$(function() {
    $('.h_req1 .select_goods').click(function() {
        if ($(this).is(':checked')) {
            $(this).prop("checked", true);
            $('.h_req2 .select_goods').prop("checked", false);
            $(this).next('.select-icon').css("background-image", 'url(image/addtask/单选绿圆_亮.svg)');
            $('.h_req2 .select-icon').css("background-image", 'url(image/addtask/单选绿圆_灰.svg)');
            $('.box-item-right .kinds').css("display", "none");
            $('.only-s').css("border-bottom", "none");
        } else {
            $(this).prop("checked", false);
            $(this).next('.select-icon').css("background-image", 'url(image/addtask/单选绿圆_灰.svg)');
        }
    });
    $('.h_req2 .select_goods').click(function() {
        if ($(this).is(':checked')) {
            $(this).prop("checked", true);
            $('.h_req1 .select_goods').prop("checked", false);
            $(this).next('.select-icon').css("background-image", 'url(image/addtask/dxlyl.svg)');
            $('.h_req1 .select-icon').css("background-image", 'url(image/addtask/单选绿圆_灰.svg)');
            $(this).parents('.only-s').css("border-bottom", "1px solid #ededed");
            $('.box-item-right .kinds').css("display", "block");
        } else {
            $(this).prop("checked", false);
            $(this).next('.select-icon').css("background-image", 'url(image/addtask/dxlyh.svg)');
            $(this).parents('.only-s').css("border-bottom", "none");
            $('.box-item-right .kinds').css("display", "none");
        }
        //		var a = $(this).is(':checked');
        //		alert(a);
    })
    $('.chose_content .item-b').click(function() {
        $(this).find('i').css('display', 'block');
        $(this).css('border-color', '#3cc8b4').siblings().css('border-color', '#D7E4EC');
        $(this).addClass('h_select').siblings().removeClass('h_select')
        $(this).siblings().find('i').css('display', 'none');
    })
    $('.content0 .kinds .kinds-item:not(:last)').live("click", function() {
        if ($(this).hasClass('select')) {
            $(this).removeClass('select');
        } else {
            $(this).addClass('select');
            $(this).siblings().removeClass('select');
        }
    })
})