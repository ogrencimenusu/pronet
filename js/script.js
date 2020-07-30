$(document).ready(function(){

    $('a[href*="#"]').not('[href="#"]').not('[href="#0"]').click(function(event) {
        // On-page links
        if (
            location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '')
            &&
            location.hostname == this.hostname
        ) {
            // Figure out element to scroll to
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            // Does a scroll target exist?
            if (target.length) {
                $('html,body').animate({scrollTop: (target.offset().top-10)}, 300);
            }
        }
    });

    var hash = window.location.hash;
    $('.navbar-nav .nav-item .nav-link[href="'+hash+'"]').parent().addClass('active');

    $('.header1 .navbar-nav .nav-item').on('click',function () {
        $('.header1  .navbar-nav .nav-item').removeClass('active');
        $(this).addClass('active');
    })

})