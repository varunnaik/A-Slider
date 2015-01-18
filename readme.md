ASlider
=======

A simple, responsive slider with no external dependencies except Jquery.    
[View a demo of A-Slider](http://varunnaik.github.com/A-Slider)

* No dependencies except jQuery; works well with Twitter Bootstrap if required
* Specify optional audio for each slide
* Specify slide duration individually for each slide
* Supports multiple sliders on the same page
* Uses CSS 3 transitions for better performance
* Slide any content, not just images
* Configuration done using HTML attributes - no javascript configuration needed

Note that there is no way to control the slider using JavaScript once initialised.

Installation
============
bower install a-slider or download aslider.js from this repository and add it manually

Usage
=====
Include *aslider.js* and jQuery.    
Set class="aslider" to declare a slider.     
Within an aslider, any elements with a class of "aslide" are slides.    

eg.
```HTML
<div class="aslider">
    <div class="aslide" data-duration="12">
        <img src="animage.jpg" alt="an image" />
    </div>
    <div class="aslide" data-duration="22" data-audio="avideo.mp3" data-audio-loop>
        <h1>This slide has text and a video</h1>
        <video src="avideo.flv" />
    </div>
</div>
```

#####Configuration options (for the entire slider, applied to the element with class aslider):

``` data-hide-controls ```: 
If present, hides the controls - both the mute and the pause buttons.

``` data-hide-mute ```: 
If present, hides the mute button.

``` data-hide-pause ```: 
If present, hides the pause button.

#####Configuration options (for each slide):    

``` data-duration="<time>" ```:    
Duration the slide should be shown, in seconds. Required.

``` data-audio="<path to audio>" ```:   
An audio clip to play when this slide is shown. Optional.

``` data-audio-loop ```: 
If present, this tag causes audio for the slide to loop. Optional.

