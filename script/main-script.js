$(document).ready(() => {
    $nav = $('.nav');
    $toggleCollapse = $('.toggle-collapse')

    // click event on toggle menu
    $toggleCollapse.click(() => {
        $nav.toggleClass("collapse");
    })

    // owl-carousel for blog
    $('.owl-carousel').owlCarousel({
        loop: true,
        autoplay: true,
        autoplayTimeout: 3000,
        dots: false,
        nav: true,
        navText: [$('.owl-navigation .owl-nav-prev'), $('.owl-navigation .owl-nav-next')]
    })

})