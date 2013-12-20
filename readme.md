ASlider
=======

A simple, responsive slider with no external dependencies except Jquery.

* CSS 3 transitions
* Play audio for each slide
* Set time independently for each slide
* Fully responsive
* Requires jQuery and nothing else
* Fade transitions (Slide coming soon)
* Highly configurable through attributes
* Multiple independent sliders on one page are supported
* Slide any element, not just images

The slider does not require you to use and Javascript to initialise, and it is 
not possible to control it using Javascript.

Usage
=====

Set class="aslider" to declare a slider. 
Within an aslider, any elements with a class of "aslide" is a slide.

eg.
<div class="aslider">
    <div class="aslide">
        <img src="animage.jpg" alt="an image" />
    </div>
    <div class="aslide">
        <h1>This slide has text and no image</h1>
        <video src="avideo.flv" />
    </div>
</div>

Supported configuration options:
**data-duration="<time>"**    
Duration the slide should be shown, in seconds. Required.

**data-audio="<path to audio>"    
An audio clip to play when this slide is shown. Optional.

**data-audio-loop**
If defined, the audio will loop.

