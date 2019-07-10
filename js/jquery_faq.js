"use strict";

$(document).ready(function() {
    $('dt').on('click', function(){
        $(this).next().toggleClass('invisible');
        // $('dd').toggleClass('invisible');
    });

    $('dd').on('click',function() {
        $(this).toggleClass('color-red')
    });

    $('#boot').on('click', function(){
        $('ul').each(function(){
            $(this).children().last().toggleClass( 'highlighter')
        })
        // $("li:last-child").toggleClass('highlighter');
    });

    $('h3').on('click', function(){
        $(this).next().children().slideToggle(100);
        $(this).next().children().css('font-weight', 'bold');
    });
    $('li').on('click', function(){
       $(this).parent().children().first().css('color', 'blue')
    });
    $('.close').click(function(){
        $(this).parent().hide()
    });
    $('h2').hide().delay(8000).fadeIn(1000).delay(8000).fadeOut(1000);



});
