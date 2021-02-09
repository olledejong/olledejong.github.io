/*globals $:false */
$(document).ready(function () {
    /**
    * Underline current menu location
    */
    var url = window.location.href;
    var navlinks$ = $(".nav-link");
    console.log(navlinks$);
    for (i = 0; i < navlinks$.length; i++) {
        console.log(navlinks$[i].href);
        console.log(url);
        if (url.endsWith('/') && navlinks$[i].href.endsWith('index.html')) {
            $(navlinks$[i]).css("border-bottom", "4px solid mediumseagreen");
        }
        if (navlinks$[i].href === url) {
            $(navlinks$[i]).css("border-bottom", "4px solid mediumseagreen");
        }
    }

    /**
    * Subtitle cycle
    */
    var subtitles = ['Bio-Informatics (BSc)', 'Front-end and design enthousiast'];

    textSequence(1);
    function textSequence(i) {
        if (subtitles.length > i) {
            setTimeout(function() {
                $(".subtitle").animate({
                    opacity: 0
                }, 400, function() {
                    $(".subtitle").html(subtitles[i]);
                });
                $(".subtitle").animate({
                    opacity: 1,
                }, 400, function() {
                    textSequence(++i);
                });
            }, 5000); // 5 seconds
        } else if (subtitles.length == i) { // Loop
            textSequence(0);
        }

    }

});
