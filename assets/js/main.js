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