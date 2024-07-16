$(document).ready(function(){
    // alert('ddddd')
    $(window).scroll(function(){
    
        let scrolled = $(window).scrollTop() >= 200
        $('header').toggleClass('down' , scrolled)
    })
})