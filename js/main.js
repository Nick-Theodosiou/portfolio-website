var captcha = false;

$(window).bind('scroll', function () {
    var currentTop = $(window).scrollTop();
    var elems = $('.scrollspy');
    elems.each(function (index) {
        var elemTop = $(this).offset().top - 80;
        var elemBottom = elemTop + $(this).height();
        if (currentTop >= elemTop && currentTop <= elemBottom) {
            var id = $(this).attr('id');
            var navElem = $('a[href="#' + id + '"]');
            var lis = navElem.parent().parent().children().children().removeClass('active');
            navElem.addClass('active')
        }
    })
});

function sendEmail() {

    if (captcha) {
        let name = document.getElementById("nm").value;
        let email = document.getElementById("email").value;
        let details = document.getElementById("det").value;

        var contactParams = {
            from_name: name,
            reply_to: email,
            message: details
        }

        emailjs.send('default_service', 'template_tp3lmtb', contactParams, 'L-9SKgKDZw3pBLo1i');
        document.getElementById("nm").value = "";
        document.getElementById("email").value = "";
        document.getElementById("det").value = "";
        window.alert("Message sent");
    } else
        onRecaptchaError();
}

function onRecaptchaSuccess() {
    captcha = true;
    document.getElementById("recaptcha-form-error").style.display = "none";
}

function onRecaptchaError() {
    document.getElementById("recaptcha-form-error").style.display = "";
}

function onRecaptchaResponseExpiry() {
    onRecaptchaError();
}