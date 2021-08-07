function arrow(){
    var classList = $('.arrow').attr('class').split(/\s+/);
    $.each(classList, function(index, item) {
        if (item === 'fa-chevron-down') {
            $('.arrow').removeClass('fa-chevron-down');
            $('.arrow').addClass('fa-chevron-up');
        }else{
            $('.arrow').removeClass('fa-chevron-up');
            $('.arrow').addClass('fa-chevron-down'); 
        }
    });
}

orderCarousel = $("#orderCarousel");
var carousel = new bootstrap.Carousel(orderCarousel,{
    wrap: true,
});

$("#btn1").click(function(){
    orderCarousel.carousel('pause');
    orderCarousel.carousel(0)
});

$("#btn2").click(function(){
    orderCarousel.carousel('pause');
    orderCarousel.carousel(1)
});

$("#btn3").click(function(){
    orderCarousel.carousel('pause');
    orderCarousel.carousel(2)
});

