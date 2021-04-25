$(window).on("load", function () {
    $("#preloader").css({
        transform: "translateY(-100%)",
        "transition-delay": "0.6s",
    });
    $(".loader").css({
        opacity: "0",
        "transition-delay": "0.3s",
    });
});

$(window).scroll(function () {
    $("header").toggleClass("padding", window.scrollY > 100);
});

$(".menu-icon,.mobile_nav ul li a").click(function () {
    $(".menu-icon,.mobile_nav").toggleClass("menu-active");
});

AOS.init({
    duration: 1500,
    easing: "ease",
    once: false,
});
