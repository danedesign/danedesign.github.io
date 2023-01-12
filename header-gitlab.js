$(document).ready(function () {
    $("#header-menu-mobile").hide();
    $("#header-menu-toggle-btn").click(function () {
        $("#header-menu-mobile").slideToggle();
    });

    $('#section-more').hide();
    $('#section-more-trigger').click(function () {
        $("#section-more").fadeToggle();
        $('#section-more-trigger').hide();
    });

    $("a#lang-change").click(function () {
        $('[lang="en"]').toggle();
        $('[lang="zh"]').toggle();
    });

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
    );

    $("a.awards-show-btn").click(function () {
        $("#section-awards").css('padding-top', '35%');
        $('.awards-left-portion').css('color', '#fff');
        $('.awards-pull-text').css('color', 'rgba(255, 255, 255, 0)');
        $('.awards-right-portion, .awards-left-portion').css('opacity', '0');
        // $("#section-awards").css('padding-bottom', '+50px');
        $(".awards-showreel-vid-desktop, .awards-close-btn").fadeIn("slow");
        $(".awards-showreel-vid-desktop").trigger('play');
    });

    $("iconify-icon.awards-close-btn").click(function () {
        $("#section-awards").css('padding-top', '');
        $('.awards-left-portion').css('color', '');
        $('.awards-pull-text').css('color', '');
        $('.awards-right-portion, .awards-left-portion').css('opacity', '');
        // $("#section-awards").css('padding-bottom', '');
        $(".awards-showreel-vid-desktop, .awards-close-btn").fadeToggle("slow");
        $(".awards-showreel-vid-desktop").trigger('pause');
    });

    if (document.title.includes('Gallery'))
    $('#header-gallery').addClass('header-gallery-active');

    if (document.title.includes('Media'))
    $('#header-media').addClass('header-media-active');

    if (document.title.includes('About'))
    $('#header-about').addClass('header-about-active');

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
