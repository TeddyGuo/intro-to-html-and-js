$(document).ready(function (){
    manipulateDOM();
});

function manipulateDOM(){
    var h1Header = $('h1');
    var h3Header = $('h3');
    var lastH3Header = $('h3:last');
    h1Header.text('Hello World');
    h3Header.css('color', '#37887D');
    h3Header.first().css('text-decoration', 'line-through');
    lastH3Header.css('background-color', '#53226A');
}