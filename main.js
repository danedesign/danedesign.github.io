// This one is to include the header, footer and social media elements into all pages
$(function () {
    $("header").load("/components/header.html");
    $("#contact").load("/components/social-media.html");
    $("footer").load("/components/footer.html");
})


window.addEventListener("load", function () {
    $('.splash-screen').hide();
});

const images = document.querySelectorAll("#headline-ywaste");

function preloadImage(img) {
    const src = img.getElementbyId('headline-ywaste');
    if (!src) {
        return;
    }

    img.src = src;
}

const imgOptions = {
    threshold: 0,
    rootMargin: "0px 0px 700px 0px"
};

const imgObserver = new IntersectionObserver((entries, imgObserver) => {
    entries.forEach(entry => {
        if (!entry.isIntersecting) {
            return;
        } else {
            preloadImage(entry.target);
            imgObserver.unobserve(entry.target);
        }
    });
}, imgOptions);

images.forEach(image => {
    imgObserver.observe(image);
})
