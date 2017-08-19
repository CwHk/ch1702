function validation($input, errorMessage) {
    var validator = getValidator();
    var valid = validator.element("#" + $input.prop("id"));
    if (valid) {
        $(".error-box").css("visibility","hidden");
        //$input.parent().append("<div class=\"checkmark\"></div>");
        return true;
    } else {
        showError($input.siblings("label").text() + " " + errorMessage);
        return false;
    }
}

function getValidator() {
    var validator = $("form").validate({
        showErrors: function (errorMap, errorList) {
        }
    });

    return validator;
}

function isFormValid() {
    $("form").validate({
        showErrors: function (errorMap, errorList) {
        }
    });
    return $("form").valid();
}

function showError(msg) {
    $(".error-box").css("visibility","visible");;
    $("#error-mssage").html(msg);
}