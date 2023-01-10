// This one is to include the header, footer and social media elements into all pages
$(function () {
    $("header").load("/components/header.html");
    $("#contact").load("/components/social-media.html");
    $("footer").load("/components/footer.html");
})

// window.addEventListener("load", function () {
//     $('.splash-screen').hide();
// });
