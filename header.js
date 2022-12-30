$(document).ready(function () {
    $("#header-menu-mobile").hide();
    $("#header-menu-toggle-btn").click(function () {
        $("#header-menu-mobile").slideToggle();
    })
});