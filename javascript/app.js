$(function() {

    var header = $("#header"),
    introH = $("#headerwrap").innerHeight(),
    scrollOffset = $(window).scrollTop();

    checkScroll(scrollOffset);

$(window).on("scroll", function() {
    scrollOffset = $(this).scrollTop();

    checkScroll(scrollOffset);
});

function checkScroll(scrollOffset) {
    if( scrollOffset >= introH ) {
        header.addClass("fixed");
    } else {
        header.removeClass("fixed");
    }
}


$("[data-scroll]").on("click", function(event) {
    event.preventDefault();

    var $this = $(this),
        blockId = $this.data('scroll'),
        blockOffset = $(blockId).offset().top;

        $("#nav a").removeClass("active");
        $this.addClass("active");

    $("html, body").animate({
        scrollTop: blockOffset
    }, 600);
});


 $("[data-slider]").slick({
    infinite: true,
    fade: false,
    slidesToShow: 1,
    slidesToScroll: 1
 });

// анимация 
const animItems = document.querySelectorAll('._anim-items');

if (animItems.length > 0) {
    window.addEventListener('scroll', animOnScroll);
    function animOnScroll() {
        for (let index = 0; index < animItems.length; index++) {
            const animItem = animItems[index];
            const animItemHeight = animItem.offsetHeight;
            const animItemOffset = offset(animItem).top;
            const animStart = 4;

            let animItemPoint = window.innerHeight - animItemHeight / animStart;
            if (animItemHeight > window.innerHeight) {
                animItemPoint = window.innerHeight - window.innerHeight / animStart;
            }

            if ((pageYOffset > animItemOffset - animItemPoint) && pageYOffset < (animItemOffset + animItemHeight)){
                animItem.classList.add('_active');
            } else {
            if (!animItem.classList.contains('_anim-no-hide')) {
                animItem.classList.remove('_active');
            }

            }
        }
    }
function offset(el) {
   const rect = el.getBoundingClientRect(),
   scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
   scrollTop = window.pageXOffset || document.documentElement.scrollTop;
   return { top: rect.top + scrollTop, left: rect.left + scrollLeft }
}

setTimeout(() => {
    animOnScroll();
},  1000);

}


});