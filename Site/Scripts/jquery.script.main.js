$(function () {
    $(document).ready(function () {
        //Load Welcome
        $("#welcome").css({
            "padding-left": "15vw",
            "opacity": "1"
        });

        //Remove Welcome
        $("#welcome").css({
            "padding-left": "13vw",
            "opacity": "0"
        });
        $("#welcome").delay(1000).fadeOut();

        //Load Menu
        setTimeout(function () {
            loadMenu();
        }, 1000);
    });

    $("#login .fa").click(function () {
        //Load Login
        $("#login").toggleClass("active");
        $("#login input[type='submit']").addClass("active");
        $("#loginForm").addClass("active");
        $("#login div input[type='text']").addClass("active");
    });
});