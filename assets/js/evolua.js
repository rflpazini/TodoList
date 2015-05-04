/*
 * This is a beta version of
 * a bootstrap theme developed to Evolua Educação.
 * Here you will find all features that was included in the project
 *
 * Rafael Pazini
 *  MIT License
 */

$block = $('.block-content');

$(document).ready(function() {
    if ($('.left-menu').hasClass('open')) {
        $block.css('width', '85%');
    } else {
        $block.css('width', '100%');
    }

    var getAbsoluteUrl = (function() {
        var a;

        return function(url) {
            if (!a) a = document.createElement('a');
            a.href = url;

            return a.href;
        };
    })();
});

$('#menu').click(function openMenu() {
    if ($('.left-menu').hasClass('open')) {
        $('.left-menu').animate({
            width: "toggle",
            opacity: 0
        }, 125).removeClass('open');
        $block.css('width', '100%');
    } else {
        $('.left-menu').animate({
            width: "toggle",
            opacity: 1
        }, 125).addClass('open');
        $block.css('width', '85%');
    }
});
