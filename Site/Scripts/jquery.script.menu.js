$(document).ready(function () {
    var menuSize = 0;
    menuSize = $(window).width() < $(window).height() ? $(window).width() : $(window).height();
    menuSize = (menuSize / 100) * 90;

    $("#menuWrapper").css({
        "height": menuSize,
        "width": menuSize
    });

    $('.button').each(function () {
        $(this).css({
            "margin-left": -$(this).width() / 2
        });
    });

    $(".button").click(function () {
        var check = true;
        $(".button").each(function () {
            if ($(this).hasClass("selected")) {
                check = false;
                $(this).removeClass("selected");
                $("a", this).toggleClass('on');
            }
        });

        $(this).css({
            "z-index": 1
        });

        $(this).addClass("selected");
        $("a", this).toggleClass('on');

        if (check) setMenu();

    });

    $("#menuWrapper").hover(function () {
        if ($(this).hasClass("hoverable")) {
            var incrementation = 0;
            $(".button").each(function () {
                if (!$(this).hasClass("selected")) {
                    incrementation += 1;
                    $(this).addClass("btn" + incrementation);
                }
            });
        }
    }, function () {
        if ($(this).hasClass("hoverable")) {
            $(".button").each(function () {
                for (var i = 1; i < 4; i++) {
                    $(this).removeClass("btn" + i);
                }
            });
        }
    });
});

$(window).resize(function () {
    if (!$("#menuWrapper").hasClass("hoverable")) {
        var menuSize = 0;
        menuSize = $(window).width() < $(window).height() ? $(window).width() : $(window).height();
        menuSize = (menuSize / 100) * 90;

        $('#menuWrapper').css({
            "height": menuSize,
            "width": menuSize
        });
    }
});

function setMenu() {
    $("#menuWrapper").addClass("hoverable");
    $(".button").each(function () {
        $(this).children().css({
            "-webkit-animation": "0",
            "animation": "0",
            "margin": "0",
            "border-spacing": "10px",
            "border-color": "rgba(255, 255, 255, 0)"
        });
        $(this).css({
            "top": 50 + "%",
            "left": 50 + "%"
        });
    });
    $(".button").delay(1000).each(function () {
        $(this).css({
            "top": -20
        });
    });
    $("#menuWrapper").css({
        "margin-top": 0 + "%",
        "margin-left": "auto",
        "margin-right": "auto",
        "margin-bottom": 0 + "%",
        "height":  93,
        "width": 160,
        "border-radius": "0 0 50% 50%"
    });

    $("#login").toggleClass('on');
    $("#login .fa").toggleClass('on');
}

function loadMenu() {
    $(".main-content").css("position", "initial");
    $(".button").each(function (i) {
        var buttonAnchor = $('a',this);
        var buttonDiv = $('div', this);
        setTimeout(function () {
            showButoon(buttonAnchor, buttonDiv);
        }, i * 200);
        setTimeout(function () {
            buttonDiv.css({ "margin": "10px", "border": "2px solid #666" });
            buttonDiv.addClass("pulse");
        }, 1300);
    });
}

function showButoon(buttonAnchor, buttonDiv) {
    buttonAnchor.css({
        "height": "70px",
        "width": "70px",
        "margin": "0"
    });
    setTimeout(function () {
        if ((buttonAnchor).children().hasClass("fa-home")) {
            buttonAnchor.css({
                "font-size": "45pt"
            });
        }
        else {
            buttonAnchor.css({
                "font-size": "35pt"
            });
        }
    }, 200);
}