$(document).ready(function () {
    $("#header-menu-mobile").hide();
    $("#header-menu-toggle-btn").click(function () {
        $("#header-menu-mobile").slideToggle();
    })

    $("a#lang-change").click(function () {
        $('[lang="en"]').toggle();
        $('[lang="zh"]').toggle();
    })

    if (navigator.language.includes('zh'))
        $('[lang="en"]').hide();
    else
        $('[lang="zh"]').hide();

    // $(".awards-showreel-vid-overlay, .awards-showreel-vid").hide()
    // $("a.awards-show-btn").click(function () {
    //     $(".awards-showreel-vid-overlay, .awards-showreel-vid").fadeToggle();
    // })

    // $(".awards-showreel-vid-overlay").click(function () {
    //     $(".awards-showreel-vid-overlay, .awards-showreel-vid").fadeToggle();
    //     $(".awards-showreel-vid").trigger('pause');
    // })

    $(".awards-pull-text, .awards-showreel-vid-desktop, .awards-close-btn").hide();
    $(".awards-show-btn").hover(
        function () {
            $('.awards-pull-text').fadeToggle();
        }
    )

    $("a.awards-show-btn").click(function () {
        $("#section-awards").css('padding-top', '33%');
        $("#section-awards").css('padding-bottom', '+50px');
        $(".awards-showreel-vid-desktop, .awards-close-btn").fadeIn("slow");
    })

    $("iconify-icon.awards-close-btn").click(function () {
        $("#section-awards").css('padding-top', '');
        $("#section-awards").css('padding-bottom', '');
        $(".awards-showreel-vid-desktop, .awards-close-btn").fadeToggle("slow");
        $(".awards-showreel-vid-desktop").trigger('pause');
    })

    // if ($(window).width() <= 926) {
    //     $(".awards-mobile").show();
    // }
    // if ($(window).width() > 926) {
    //     $(".awards-mobile").hide();
    // }

    // $(".awards-show-btn").toggle(
    //     function () { $("#section-awards").css('padding-top', '33%'); },
    //     function () { $("#section-awards").css('padding-bottom', '+50px'); },
    //     function () { $(".awards-showreel-vid-desktop, .awards-close-btn").show();});


    // $(".").click(function () {
    //     $(".awards-showreel-vid-overlay, .awards-showreel-vid").fadeToggle();
    //     $(".awards-showreel-vid").trigger('pause');
    // })

});

let lang = navigator.language;
console.log('browser language', lang);