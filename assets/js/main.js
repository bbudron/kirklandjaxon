$(window).on("load",function() {
    $(window).scroll(function() {
        var windowBottom = $(this).scrollTop() + $(this).innerHeight();
        $(".fade").each(function(i) {
        /* Check the location of each desired element */
        var objectBottom = $(this).offset().top + $(this).outerHeight();
        
        // console.log(objectBottom, objectBottom * .75, windowBottom, i)
        
        /* If the element is completely within bounds of the window, fade it in */
        if ((objectBottom * .75) < (windowBottom)) { //object comes into view (scrolling down)
            if ($(this).css("opacity")==0) {$(this).fadeTo(500,1);}
        } else { //object goes out of view (scrolling up)
            if ($(this).css("opacity")==1) {$(this).fadeTo(500,0);}
        }
        });
    }).scroll();
});

var controller = new ScrollMagic.Controller();

new ScrollMagic.Scene(
{
    triggerElement: "#trigger1",
    triggerHook: 0.9, // show, when scrolled 10% into view
    duration: "80%", // hide 10% before exiting view (80% + 10% from bottom)
    offset: 50 // move trigger to center of element
}).setClassToggle("#reveal1", "visible").addIndicators().addTo(controller);
