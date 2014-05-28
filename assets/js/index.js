/**
 * Main JS file for Casper behaviours
 */

 /*globals jQuery, document */
 (function ($) {
    "use strict";

    $(document).ready(function () {

        // Home page slideshow
        $(".banner-home").backstretch([
            "/../../content/images/header.jpg",
            "/../../content/images/music.jpg",  
            ], {duration: 6000, fade: 750});       

        // Posts featured image, determine if post has an image with the alt tag of "big-post-image"
        // If it does, use that image in the banner, if not, then add the class "no-big-post-image"
        var src = "";
        src = $('img[alt="big-post-image"]').attr('src');

        if (typeof src != 'undefined') {
            var url = $('.big-post-image').css('background-image', 'url('+src+')');
            $(".big-post-image").backstretch(src);
        } else
        {
            $(".banner-post").addClass("no-big-post-image");
        }

        // Scroll To Top
        // Show or hide scroll to top button
        $(window).scroll(function () {
            if ($(this).scrollTop() > 625) {
                $('.go-to-top').fadeIn(500);
            } else {
                $('.go-to-top').fadeOut(500);
            }
        })

        // Animate the scroll to top
        $('.go-to-top').click(function (event) {
            event.preventDefault();
            $('html, body').animate({scrollTop: 0}, 800);
        })

        // Scroll to a hash on the page from link on another page with link and # or when refreshing page
        if (window.location.hash != null && window.location.hash != '') 
            $('html,body').animate({
                scrollTop: $(window.location.hash).offset().top
                }, 1500).delay(550); // delay is needed so the scroll action shows on mobile devices


        $(window).load(function() {  // this will fire after the entire page is loaded, including images 
            // Scroll to a hash on the page from link on another page with link and # or when refreshing page
            // This is needed again in case images or whatever are taking a long time to load
            if (window.location.hash != null && window.location.hash != '') 
                $('html,body').animate({
                    scrollTop: $(window.location.hash).offset().top
                }, 1500);

            // Scroll To blog section
            $(".scroll-to-blog").click(function() {
                $('html, body').animate({
                        scrollTop: $("#blog").offset().top
                    }, 800);
                });
            });
    // Scroll To about section
            $(".scroll-to-about").click(function() {
                $('html, body').animate({
                    scrollTop: $("#about").offset().top
                }, 800);
            });
        $(".top-nav-wrapper").hover(function(){
            //$("#header").toggleClass("header-hover");
        })      
        
    });

}(jQuery));