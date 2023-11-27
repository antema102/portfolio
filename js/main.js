(function ($) {
    "use strict";

    // Spinner
    var spinner = function () {
        setTimeout(function () {
            if ($('#spinner').length > 0) {
                $('#spinner').removeClass('show');
            }
        },3000);
    };
    spinner();
    
    
    // Initiate the wowjs
    new WOW().init();


    // Navbar on scrolling
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $('.navbar').fadeIn('slow').css('display', 'flex');
        } else {
            $('.navbar').fadeOut('slow').css('display', 'none');
        }
    });


    // Smooth scrolling on the navbar links
   /* $(".navbar-nav a").on('click', function (event) {
        if (this.hash !== "") {
            event.preventDefault();
            
            $('html, body').animate({
                scrollTop: $(this.hash).offset().top - 45
            }, 1500, 'easeInOutExpo');
            
            if ($(this).parents('.navbar-nav').length) {
                $('.navbar-nav .active').removeClass('active');
                $(this).closest('a').addClass('active');
            }
        }
    });
    */
    
   /* // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });

    /*
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 1, 'easeInOutExpo');
        return false;
    });
    */

    // Typed Initiate/
    /*
    if ($('.typed-text-output').length == 1) {
        var typed_strings = $('.typed-text').text();
        var typed = new Typed('.typed-text-output', {
            strings: typed_strings.split(', '),
            typeSpeed: 100,
            backSpeed: 20,
            smartBackspace: false,
            loop: true
        });
    }
*/

{/*

    var $videoSrc;
$('.btn-play').click(function(){
    $videoSrc=$(this).data('src');
    $('#video').attr('src',$videoSrc);
    
})

// Capturer la source de la vidéo au clic sur le bouton .btn-play
$('.btn-close').click(function () {
    $('#video').attr('src','');
});
*/}




    // Facts counter
 /*   $('[data-toggle="counter-up"]').counterUp({
        delay: 10,
        time: 2000
    });*/


    // Skills
    $('.skill').waypoint(function () {
        $('.progress .progress-bar').each(function () {
            $(this).css("width", $(this).attr("aria-valuenow") + '%');
        });
    }, {offset: '80%'});


    // Portfolio isotope and filter
    var portfolioIsotope = $('.portfolio-container').isotope({
        itemSelector: '.portfolio-item',
        layoutMode: 'fitRows'
    });
    $('#portfolio-flters li').on('click', function () {
        $("#portfolio-flters li").removeClass('active');
        $(this).addClass('active');

        portfolioIsotope.isotope({filter: $(this).data('filter')});
    });


    // Testimonials carousel
 /*   $(".testimonial-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1000,
        items: 1,
        dots: true,
        loop: true,
    });

*/
    
    $('#contactForm').submit(function(event) {
        event.preventDefault(); // Empêche le comportement par défaut du formulaire

        // Récupérer les données du formulaire
        var name = $('#name').val();
        var email = $('#email').val();
        var subject = $('#subject').val();
        var message = $('#message').val();

        // Redirection vers la boîte e-mail spécifiée
        var mailtoLink = 'mailto:antema103@gmail.com' +
            '?subject=' + encodeURIComponent(subject) +
            '&body=' + encodeURIComponent('Nom: ' + name + '\nEmail: ' + email + '\nMessage: ' + message);

        window.location.href = mailtoLink; // Redirection vers la boîte e-mail
    });


})(jQuery);

