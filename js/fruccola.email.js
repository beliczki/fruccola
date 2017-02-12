$(function() {

    var x;
    var mailtoLinks = document.getElementsByClassName("mailto");
    for (x = 0; x < mailtoLinks.length; ++x) {
        var href = mailtoLinks[x].getAttribute('href').replace('['+email_at+']','@').replace('mailto:','');
        mailtoLinks[x].setAttribute('href','mailto:'+href);
        mailtoLinks[x].innerHTML = mailtoLinks[x].innerHTML.replace('['+email_at+']','@');
    }

});