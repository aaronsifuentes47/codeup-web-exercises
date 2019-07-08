"use strict";

$(document).ready(function() {
    $('dt').on('click', function(){
        $('dd').toggleClass('invisible');
    });

    $('dd').on('click',function() {
        $(this).toggleClass('color-red')
    });

    $('#boot').on('click', function(){
        $('ul').each(function(){
            $(this).children().last().toggleClass( 'highlighter')
        })
    });
    $('h3').on('click', function(){
        $(this).next().children().css('font-weight', 'bold');
    });
    $('li').on('click', function(){
       $(this).parent().children().first().css('color', 'blue')
    });
});
