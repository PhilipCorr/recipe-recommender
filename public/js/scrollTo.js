$(document).ready(function () {
    // Handler for .ready() called.
    $('html, body').animate({
        scrollTop: $('#shopping-list').offset().top
    }, 'slow');
});