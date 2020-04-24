$(document).ready(function() {
    var whatHeight = $(window).height();

    //smooth scroll when clicking on the anchors
    $(".moveLink").on('click', function(event) {
        if (this.hash !== "") {
            event.preventDefault();
            var hash = this.hash;
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 1200, function() {
                window.location.hash = hash;
            });
        }
    });
    //icons pop up when arriving at scroll point

    //smooth scroll from navbar
})