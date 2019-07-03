"use strict";


var images = document.getElementsByTagName('img');
console.log(images);
var snd = new Audio("img/barrel.wav");
console.log(snd);
var konami = [38,38,40,40,37,39,37,39,66,65,13];
$(document).on('keyup',function(event){
        if (event.keyCode === konami[0]) {
            konami.shift()
        }
    console.log(konami);
        if (konami.length === 0) {
            $('#container').html('Congrats. You cheated.').css('font-size','20px');
            snd.play();
        }
});






//
// var left = $('#left').css('display', 'none');
// $(document).keyup(function(event){
//     if (event.keyCode === 37) {
//         $('#left').css('display','block-inline');
//     } else {
//         $('#left').css('display','none');
//     }
// });
// $(document).keyup(function(event){
//     if (event.keyCode === 38) {
//         // $('#up').css('display','block-inline');
//     } else {
//         // $('#up').css('display','none');
//
//     }
// });
// $(document).keyup(function(event){
//     if (event.keyCode === 39) {
//         $('#right').css('display','block-inline');
//     } else {
//         $('#right').css('display','none');
//
//     }
// });
// $(document).keyup(function(event){
//     if (event.keyCode === 40) {
//         $('#down').css('display','block-inline');
//     } else {
//         $('#down').css('display','none');
//
//     }
// });
// $(document).keyup(function(event){
//     if (event.keyCode === 40) {
//         $('#').css('display','block-inline');
//     } else {
//         $('#').css('display','none');
//
//     }
// });
// $(document).keyup(function(event){
//     if (event.keyCode === 40) {
//         $('#').css('display','block-inline');
//     } else {
//         $('#').css('display','none');
//
//     }
// });

