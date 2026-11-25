$(document).ready(function () {
    $(window).scroll(function () {
        if ($(document).scrollTop() > 120) {
            $('.TopBar2').addClass('Stuck');
        }
        else {
            $('.TopBar2').removeClass('Stuck');
        }
    });
});

$(document).ready(function () {
    function setHeight() {
        windowHeight = $(window).innerHeight();
        windowHeight = windowHeight - 293;
        $('#BodyWrapper').css('min-height', windowHeight);
    };
    setHeight();

    $(window).resize(function () {
        setHeight();
    });
});

function emptyTextReplace(temp) {
    if (document.getElementById(temp).value == "") {
        document.getElementById(temp).value = " Search ";
    }
}

function emptyText(temp) {
    document.getElementById(temp).value = "";
}

function noPostDefault(temp) {
    try {
        if (document.getElementById(temp).value == " Search ") {
            return false;
        } else {
            return true;
        }
    }
    catch (err) {
        return false;
    }
}

$(document).keyup(function (e) {
    if (e.keyCode == 27) { closeError(); }   // esc
});

function closeError() {
    $('.ErrorPanel').css({ 'display': 'none' });

    closeModalPopUp('popErrorSummary');
    closeModalPopUp('popLookup');
}

function showModalPopUp(modalID) {
    var modalPopupBehavior = $find(modalID);
    modalPopupBehavior.show();
    return true
}

function closeModalPopUp(modalID) {
    var modalPopupBehavior = $find(modalID);
    modalPopupBehavior.hide();
    return true
}

function forceClick(e, elemId) {
    var elem = document.getElementById(elemId);
    var evt = (e) ? e : window.event;
    var intKey = (evt.which) ? evt.which : evt.keyCode;

    if (intKey == 13) {
        elem.click();
        return false;
    }
    return true;
}

function validatePage(valGroup) {
    var modalPopupBehavior = $find('popErrorSummary');

    if (Page_ClientValidate(valGroup) == false) {
        modalPopupBehavior.show();
        return false;
    } else {
        modalPopupBehavior.hide();
        return true;
    }
}

function toggleNav() {
    if ($('.MenuPanel').hasClass('mobile')) {
        $('.MenuPanel').removeClass('mobile');
        $(".MenuPanel .MainMenu").hide('400');
    } else {
        $('.MenuPanel').addClass('mobile');
        $(".MenuPanel .MainMenu").show('400');
    }
}

$(document).ready(function () {
    // open nav with main "nav" button

    var el = document.getElementById('nav-open-btn');
    if (el.addEventListener) {
        el.addEventListener('click', toggleNav, false);
    } else {
        el.attachEvent("onclick", toggleNav);
    }
    adaptMenu();
});

//Footer replace text
$(document).ready(function () {
    var InputName = $('#txtName');
    var defaultNameVal = InputName.val();

    InputName.focus(function () {
        if (InputName.val() == defaultNameVal) InputName.val("");
    }).blur(function () {
        if (InputName.val().length == 0) InputName.val(defaultNameVal);
    });

    var InputEmail = $('#txtEmail');
    var defaultEmailVal = InputEmail.val();

    InputEmail.focus(function () {
        if (InputEmail.val() == defaultEmailVal) InputEmail.val("");
    }).blur(function () {
        if (InputEmail.val().length == 0) InputEmail.val(defaultEmailVal);
    });

    var InputPhone = $('#txtPhoneNo');
    var defaultPhoneVal = InputPhone.val();

    InputPhone.focus(function () {
        if (InputPhone.val() == defaultPhoneVal) InputPhone.val("");
    }).blur(function () {
        if (InputPhone.val().length == 0) InputPhone.val(defaultPhoneVal);
    });

    var InputMsg = $('#txtMessage');
    var defaultMsgVal = InputMsg.text();
    InputMsg.focus(function () {
        if (InputMsg.text() == defaultMsgVal) InputMsg.text("");
    }).blur(function () {
        if (InputMsg.text().length == 0) InputMsg.text(defaultMsgVal);
    });
});

$(window).resize(function () { adaptMenu(); });

$(document).ready(function () {
    $('ul.level1 li.has-popup').click(function (e) {
        var elem = $(this).attr('aria-haspopup');
        elem = elem.replace(':submenu:', '\\:submenu\\:');
        //$('#' + elem).toggle();

        if ($('#' + elem).is(":visible")) {
            $('#' + elem).hide(200);
        } else {
            $('#' + elem).show(200);
        }

    });
});


/* COOKIES DIRECTIVE SCRIPT */
$(document).ready(function () {
    checkCookie('_acceptCookie18');
});

function checkCookie(c_name) {
    var msg = getCookie(c_name);
    if (msg != null && msg != "") { $('#policyBar').hide(); }
    else { $('#policyBar').show(); }
}

function getCookie(c_name) {
    var i, x, y, ARRcookies = document.cookie.split(";");
    for (i = 0; i < ARRcookies.length; i++) {
        x = ARRcookies[i].substr(0, ARRcookies[i].indexOf("="));
        y = ARRcookies[i].substr(ARRcookies[i].indexOf("=") + 1);
        x = x.replace(/^\s+|\s+$/g, "");
        if (x == c_name) { return unescape(y); }
    }
}

function setCookie(c_name, value, exdays) {
    var exdate = new Date();
    exdate.setDate(exdate.getDate() + exdays);
    var c_value = escape(value) + ((exdays == null) ? "" : "; expires=" + exdate.toUTCString());
    var c_path = "; path=/";
    document.cookie = c_name + "=" + c_value + c_path;
}
