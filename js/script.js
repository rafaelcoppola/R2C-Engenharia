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
$('.carousel').carousel({
    pause:false,
    interval: 3000,
         
  })

      