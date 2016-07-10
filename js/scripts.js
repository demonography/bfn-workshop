var listItems = "";
var index = 0;
$("main h1").each(function() {
    var id = $(this).attr("id");
    var text = $(this).text();
    var newtext = text.replace(/[^a-zA-Z ]/g, '').replace(/\s\s+/g, ' ').replace(/ /g, '').toLowerCase();

    if (id == undefined)
        $(this).attr("id", newtext);

    id = $(this).attr("id");

    console.log(window.location);

    listItems += "<li><a href='" + window.location.pathname + "#" + id + "'>" + $(this).text() + "</a></li>";

    // index++;
});

$("nav").append("<ul>" + listItems + "</ul>");

$(function() {
    $('a[href*=\\#]:not([href=\\#])').click(function() {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {

            var target = $(this.hash);
            target = target.length ?
                target :
                $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                $('html,body').animate({
                    scrollTop: target.offset().top - 24
                }, 500, 'easeInOutSine');
                return false;
            }
        }
    });
});

$(document).ready(function() {
    $('code').each(function() {
        $(this).text($(this).html());
    });


    var navLeft = $('.nav__left');
    var showLeft = $('#show--nav');

    $(showLeft).click(function() {
        $(navLeft).toggleClass("openLeft");
        $(document.body).toggleClass("push-right");
        return false;
    });


});
