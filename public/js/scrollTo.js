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

    $(".btn-filter").click(function(event) {

        if ($("#" + event.target.id).hasClass('filter-added') == false) {
            $("#" + event.target.id).addClass('filter-added');
            $("#" + event.target.id).removeClass('btn-filter');

        } 
        else {
            $("#" + event.target.id).addClass('btn-filter');
            $("#" + event.target.id).removeClass('filter-added');
        }
    });
});
