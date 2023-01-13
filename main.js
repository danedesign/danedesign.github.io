// This one is to include the header, footer and social media elements into all pages
$(function () {
    $("header").load("/components/header.html");
    $("#contact").load("/components/social-media.html");
    $("footer").load("/components/footer.html");
    $('#fixed-messenger').load("/components/messenger.html");
})

var chatbox = document.getElementById('fb-customer-chat');
chatbox.setAttribute("page_id", "110222261435384");
chatbox.setAttribute("attribution", "biz_inbox");

window.fbAsyncInit = function() {
  FB.init({
    xfbml            : true,
    version          : 'v15.0'
  });
};

(function(d, s, id) {
  var js, fjs = d.getElementsByTagName(s)[0];
  if (d.getElementById(id)) return;
  js = d.createElement(s); js.id = id;
  js.src = 'https://connect.facebook.net/en_US/sdk/xfbml.customerchat.js';
  fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));


// window.addEventListener("load", function () {
//     $('.splash-screen').hide();
// });
