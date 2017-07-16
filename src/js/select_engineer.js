$(function() {

    $(".checkbox").click(function() {
        if ($(this).hasClass("checkboxed")) {
            $(this).removeClass('checkboxed')
        } else {
            $(this).addClass("checkboxed")
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