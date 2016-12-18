$(document).ready(function(){
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('#back-to-top').fadeIn();
        } else {
            $('#back-to-top').fadeOut();
        }

    });

    // scroll body to 0px on click
    $('#back-to-top').click(function() {
        $('body,html').animate({
            scrollTop: 0
        }, 800);
        return false;
    });

    $("#link-to-list").click(function() {
        console.log("now in JQuery method for scrolling to shopping list")
        $('body,html').animate({
            scrollTop: 0
        }, 800);
        return false;
    });

    
});
