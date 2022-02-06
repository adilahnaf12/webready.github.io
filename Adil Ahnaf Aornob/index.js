

  
   $('#about').click(function() {
  $('html, body').animate({
    scrollTop: $(".about_company").offset().top
  }, 1000)
})


$('#service').click(function() {
  $('html, body').animate({
    scrollTop: $(".service").offset().top
  }, 1000)
})

$('#contact').click(function() {
  $('html, body').animate({
    scrollTop: $(".contact_form").offset().top
  }, 1000)
})

$('#home').click(function() {
  $('html, body').animate({
    scrollTop: $(".body").offset().top
  }, 1000)
})

$('#contact').click(function() {
  $('html, body').animate({
    scrollTop: $(".contact_form").offset().top
  }, 1000)
})







$('#res_about').click(function() {
  $('html, body').animate({
    scrollTop: $(".about_company").offset().top
  }, 1000)
})


$('#res_service').click(function() {
  $('html, body').animate({
    scrollTop: $(".service").offset().top
  }, 1000)
})

$('#res_contact').click(function() {
  $('html, body').animate({
    scrollTop: $(".contact_form").offset().top
  }, 1000)
})

$('#res_home').click(function() {
  $('html, body').animate({
    scrollTop: $(".body").offset().top
  }, 1000)
})

$('#res_contact').click(function() {
  $('html, body').animate({
    scrollTop: $(".contact_form").offset().top
  }, 1000)
})

$('#start').click(function() {
  $('html, body').animate({
    scrollTop: $(".contact_form").offset().top
  }, 1000)
})

$(document).ready(function(){
 
 // hide our element on page load



 $(window).on("scroll", function() {
if($(window).scrollTop() > 970) {
$(".Front-end").addClass("animate__animated animate__fadeInLeft");
}
});

$(window).on("scroll", function() {
if($(window).scrollTop() > 970) {
$(".cms").addClass("animate__animated animate__fadeInRight");
}
});

$(window).on("scroll", function() {
if($(window).scrollTop() > 970) {
$(".web_aplication").addClass("animate__animated animate__backInDown");
}
});

$(window).on("scroll", function() {
    if($(window).scrollTop() > 490) {
    $(".galary").addClass("animate__animated animate__fadeInLeft");
    }
    });

    $(window).on("scroll", function() {
        if($(window).scrollTop() > 490) {
        $(".abot_what_we_do").addClass("animate__animated animate__fadeInRight");
        }
        });


});





$(document).scroll(function(){
    if($(this).scrollTop() > 580)
    {   
        $('.header').css({"background-color": "#191d2f"});
        
    }
});


$('#nav_bar').click(function() {
  $('.res_nav_links').slideToggle()
});


