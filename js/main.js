(function ($) {
    "use strict";

    // Spinner
    var spinner = function () {
        setTimeout(function () {
            if ($('#spinner').length > 0) {
                $('#spinner').removeClass('show');
            }
        }, 1000);
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
    $(".navbar-nav a").on('click', function (event) {
        if (this.hash !== "") {
            event.preventDefault();
            
            $('html, body').animate({
                scrollTop: $(this.hash).offset().top - 45
            }, 1000, 'easeInOutExpo');
            
            if ($(this).parents('.navbar-nav').length) {
                $('.navbar-nav .active').removeClass('active');
                $(this).closest('a').addClass('active');
            }
        }
    });
    
    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });

    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 800, 'easeInOutExpo');
        return false;
    });

    // Typed Initiate/
    
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
        
        // Validation basique
        if (!name || !email || !subject || !message) {
            $('#Alert').css('color', 'red').text("Veuillez remplir tous les champs.");
            return;
        }
        
        // Afficher un message de chargement
        $('#Alert').css('color', '#6244C5').text("Envoi en cours...");
        
        // Envoyer la requête AJAX
        $.ajax({
            url: 'contact.php',
            type: 'POST',
            data: {
                name: name,
                email: email,
                subject: subject,
                message: message
            },
            success: function(response) {
                if (response.success) {
                    $('#Alert').css('color', 'green').text(response.message);
                    $('#contactForm')[0].reset();
                } else {
                    $('#Alert').css('color', 'red').text(response.message);
                }
            },
            error: function() {
                $('#Alert').css('color', 'red').text("Une erreur s'est produite. Veuillez réessayer plus tard.");
            }
        });
    });
    

})(jQuery);

// Modern animation effects
document.addEventListener('DOMContentLoaded', function() {
    // Intersection Observer for scroll animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Observe all sections
    const sections = document.querySelectorAll('.container-xxl, .container-fluid');
    sections.forEach(section => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(30px)';
        section.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
        observer.observe(section);
    });

    // Add parallax effect to hero section (with throttling)
    let ticking = false;
    window.addEventListener('scroll', function() {
        if (!ticking) {
            window.requestAnimationFrame(function() {
                const scrolled = window.pageYOffset;
                const heroContainer = document.querySelector('.hero-container');
                if (heroContainer && scrolled < window.innerHeight) {
                    heroContainer.style.transform = `translateY(${scrolled * 0.5}px)`;
                }
                ticking = false;
            });
            ticking = true;
        }
    });

    // Add hover effect to skill items
    const skillItems = document.querySelectorAll('.skill');
    skillItems.forEach(skill => {
        skill.addEventListener('mouseenter', function() {
            this.style.transform = 'translateX(10px)';
            this.style.transition = 'transform 0.3s ease';
        });
        skill.addEventListener('mouseleave', function() {
            this.style.transform = 'translateX(0)';
        });
    });

    // Animated counter for progress bars
    const progressBars = document.querySelectorAll('.progress-bar');
    const animateProgressBars = () => {
        progressBars.forEach(bar => {
            const value = bar.getAttribute('aria-valuenow');
            bar.style.width = value + '%';
        });
    };

    // Trigger progress bar animation when in view
    const progressObserver = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateProgressBars();
                progressObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });

    const skillSection = document.querySelector('#skill');
    if (skillSection) {
        progressObserver.observe(skillSection);
    }

    // Add stagger animation to project cards
    const projectCards = document.querySelectorAll('.service-item');
    projectCards.forEach((card, index) => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';
        setTimeout(() => {
            card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
        }, index * 100);
    });

    // Add ripple effect to buttons
    const buttons = document.querySelectorAll('.btn');
    buttons.forEach(button => {
        button.addEventListener('click', function(e) {
            const ripple = document.createElement('span');
            const rect = this.getBoundingClientRect();
            const size = Math.max(rect.width, rect.height);
            const x = e.clientX - rect.left - size / 2;
            const y = e.clientY - rect.top - size / 2;
            
            ripple.style.width = ripple.style.height = size + 'px';
            ripple.style.left = x + 'px';
            ripple.style.top = y + 'px';
            ripple.classList.add('ripple-effect');
            
            this.appendChild(ripple);
            
            setTimeout(() => ripple.remove(), 600);
        });
    });
});

// Add smooth reveal animation for portfolio items
$(document).ready(function() {
    $('.portfolio-item').each(function(index) {
        const item = $(this);
        item.css({
            'opacity': '0',
            'transform': 'scale(0.8)',
            'transition': 'opacity 0.6s ease, transform 0.6s ease'
        });
        setTimeout(function() {
            item.css({
                'opacity': '1',
                'transform': 'scale(1)'
            });
        }, index * 100);
    });
});

$(document).ready(function() {
    $('#carouselEcotree').carousel({
        interval: false, // Désactive l'autoplay
        wrap: false
        // Autres options...
    });
});

$(document).ready(function() {
    $('#carouselODC').carousel({
        interval: false, // Désactive l'autoplay
        wrap: false
        // Autres options...
    });
});

$(document).ready(function() {
    $('#carouselIlo').carousel({
        interval: false, // Désactive l'autoplay
        wrap: false
        // Autres options...
    });
});
$(document).ready(function() {
    $('#carousel_ODC_1').carousel({
        interval: false, // Désactive l'autoplay
        wrap: false
        // Autres options...
    });
});