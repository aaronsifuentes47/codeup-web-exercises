var bacon = document.getElementById('bacon').innerHTML;
var bork = document.getElementById('bork').innerHTML;
var barnes = document.getElementById('barnes').innerHTML;

$('h1').on('click',function(){
    $('#header').css('background-color', 'red').html('WHY DID YOU DO THAT OH MY GOOOOOOOOD')
});
$('p').on('dblclick', function(){
    $('#para1').css('font-size','18px').html('Stop clicking me. Stop it.')
});
$('#bacon').hover(function(){
    $(this).css('color', 'red').text('NO')
}, function(){
    $(this).css('color', 'black').text(bacon)
});
$('#bork').hover(function(){
    $(this).css('color', 'red').html('DON\'T')
}, function(){
    $(this).css('color', 'black').html(bork)
});
$('#barnes').hover(function(){
    $(this).css('color', 'red').html('STOP')
}, function(){
    $(this).css('color', 'black').html(barnes)
});
// $(function(){
//     var prev;
//
//
//     $('.btn').hover(function(){
//         prev = $(this).text();
//         $(this).text("I'm replaced!");
//     }, function(){
//         $(this).text(prev)
//     });
// })