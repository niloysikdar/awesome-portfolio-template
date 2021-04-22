$(window).scroll(function () {
    $('header').toggleClass('padding', window.scrollY > 100);
});

$(".menu-icon").click(function () {
    $(".menu-icon").toggleClass("menu-active");
});