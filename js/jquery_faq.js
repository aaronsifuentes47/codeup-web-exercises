"use strict";

$(document).ready(function() {
    $('dt').on('click', function(){
        $('dd').toggleClass('invisible');
    });

    $('dd').on('click',function() {
        $(this).toggleClass('color-red')
    });
});