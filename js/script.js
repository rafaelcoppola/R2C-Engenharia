//barra de menu fixa
/*window.onload = function() {
    var offset = document.getElementsByClassName('header')[0].offsetTop;
    var menu = document.getElementsByClassName('header')[0];

    document.addEventListener('scroll', function() {
        if (document.body.scrollTop > offset || document.documentElement.scrollTop > offset) {
            menu.style.position = 'fixed';
        } else {
            menu.style.position = 'initial';
        }
    });
}*/

//slide de imagens
$('.carousel').slick({
    dots: true,
    infinite: true,
    speed: 500,
    fade: true,
    cssEase: 'linear',
    autoplay: true,
    autoplayspeed: 2000,
    centerMode: true,      
    prevArrow: $('.prev'),
    nextArrow: $('.next')
});
$('.carousel').slick();


      