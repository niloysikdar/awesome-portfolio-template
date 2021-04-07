$(window).scroll(function () {
    $('header').toggleClass('padding', window.scrollY > 100);
    console.log(window.scrollY);
});