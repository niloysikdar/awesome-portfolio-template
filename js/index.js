$(window).scroll(function () {
    $("header").toggleClass("padding", window.scrollY > 100);
});

$(".menu-icon,.mobile_nav ul li a").click(function () {
    $(".menu-icon,.mobile_nav").toggleClass("menu-active");
});
