function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}

$(function() {
        $('#topnav li a').click(function() {
           $('#topnav li').removeClass();
           $($(this).attr('href')).addClass('active');
        });
     });