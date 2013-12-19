var aslider = {

    initAsliders: function() {
        // Get each slider element and apply our styles to it
        var sliders = $('.aslider');
        $(sliders).each(function() {
            $(this).css({'position': 'relative'});
            var slides = $(this).find('.aslide');
            console.log("LEN:", slides.length);
            $(slides).each(function() {
                $(this).attr('style', aslider.slideFade+";"+aslider.slideFadeOut);
                if ($(this).attr('data-audio')) {
                    var loop = $(this).attr('data-audio-loop');
                    console.log('loop', loop)
                    $(this).append('<audio src="'+$(this).attr('data-audio')+'" '+((typeof loop!== 'undefined')? 'loop':'')+' preload></audio>');
                }
            });
            $(slides[0]).attr('style', aslider.slideFade+";"+aslider.slideFadeIn);
            setTimeout(function() {aslider.advanceSlide(slides[0]);}, parseInt($(slides[0]).attr('data-duration')) * 1000);
            $(slides[0]).find('audio')[0].play();
        });        
    },
    
    advanceSlide: function(currentSlide) {
        var nextSlide = $(currentSlide).next('.aslide');
        if (nextSlide.length == 0) { // Loop to the first slide if we are on the last slide now
            nextSlide = $(currentSlide).parent().children('.aslide:first-child');
        }

        $(currentSlide).attr('style', aslider.slideFade+";"+aslider.slideFadeOut);
        $(nextSlide).attr('style', aslider.slideFade+";"+aslider.slideFadeIn);
        
        // Cancel playing audio
        $(currentSlide).find('audio')[0].pause();
        // Play new audio
        $(nextSlide).find('audio')[0].play();
        setTimeout(function() {aslider.advanceSlide(nextSlide);}, parseInt($(nextSlide).attr('data-duration')) * 1000);
    },

    

    init: function() {
        if (window.addEventListener) { // Mozilla, Netscape, Firefox
            window.addEventListener('load', this.initAsliders, false);
        } else if (window.attachEvent) { // IE
            window.attachEvent('onload', this.initAsliders);
        }    
    }, 
    
    /* Configuration */
    slideFade: "opacity: 1; top: 0; position: absolute; width: inherit; left: 0; overflow: hidden; transition: opacity 1s ease-in-out; -moz-transition: opacity 1s ease-in-out; -webkit-transition: opacity 1s ease-in-out;",
    slideFadeOut: "opacity: 0",
    slideFadeIn: "opacity: 1",
    slideSlide: "",
    slideSlideOut: "",
    slideSlideIn: "",  


}

aslider.init();