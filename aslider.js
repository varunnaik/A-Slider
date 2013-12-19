var aslider = {

    initAsliders: function() {
        // Get each slider element and apply our styles to it
        var sliders = $('.aslider');
        $(sliders).each(function() {
            $(this).css({'position': 'absolute'});
            $(this).parents().css({'position': 'relative'});
            var slides = $(this).children('.aslide');
            $(slides).each(function() {
                
            });
        
        });
        
    },

    

    init: function() {
        if (window.addEventListener) { // Mozilla, Netscape, Firefox
            window.addEventListener('load', this.initAsliders, false);
        } else if (window.attachEvent) { // IE
            window.attachEvent('onload', this.initAsliders);
        }    
    }, 
    
    /* Configuration */
    slideFade: "opacity: 1;, transition: opacity .25s ease-in-out; -moz-transition: opacity .25s ease-in-out; -webkit-transition: opacity .25s ease-in-out;",
    slideFadeOut: "opacity: 0",
    slideFadeIn: "opacity: 1",
    slideSlide: "",
    slideSlideOut: "",
    slideSlideIn: "",  


}

aslider.init();