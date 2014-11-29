$(function () {
    $(window).load(function () {
        $("#welcome").css({
            "padding-left": "15vw",
            "opacity": "1"
        });
    });
    $("#welcome").click(function () {
        $("#welcome").css({
            "padding-left": "13vw",
            "opacity": "0"
        });
        $("#welcome").delay(1000).fadeOut();
        setTimeout(function () {
            loadMenu();
        }, 1000);
    });
});