jQuery(document).ready(function ($) {
    // Easy Youtube Auto Play Script when visible
    // Author: Vitalii Rizo 2017
    "use strict";
    var iframe = document.getElementById("autoplay-video"),
        disableAutoPlay = false;
    function isScrolledIntoView(el) {
        var elemTop = el.getBoundingClientRect().top,
            elemBottom = el.getBoundingClientRect().bottom,
            isVisible = (elemTop >= 0) && (elemBottom <= window.innerHeight);
        return isVisible;
    }
    $(window).scroll(function () {
        if (!disableAutoPlay) {
            if (isScrolledIntoView(iframe)) {
                iframe.contentWindow.postMessage('{"event":"command","func":"playVideo","args":""}', '*');
            } else {
                iframe.contentWindow.postMessage('{"event":"command","func":"pauseVideo","args":""}', '*');
            }
        }
    });
    $(iframe).on("mouseleave", function () {
        disableAutoPlay = true;
    });
});