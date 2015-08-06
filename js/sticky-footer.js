$(function() {
    var top = $('#left-nav').offset().top - parseFloat($('#left-nav').css('marginTop').replace(/auto/, 0));
    var footTop = $('#footer').offset().top - parseFloat($('#footer').css('marginTop').replace(/auto/, 0));

    var maxY = footTop - $('#left-nav').outerHeight();

    $(window).scroll(function(evt) {
        var y = $(this).scrollTop();
        if (y > top) {
            if (y < maxY) {
                $('#sidebar').addClass('fixed').removeAttr('style');
            } else {
                $('#sidebar').removeClass('fixed').css({
                    position: 'absolute',
                    top: (maxY - top) + 'px'
                });
            }
        } else {
            $('#left-nav').removeClass('fixed');
        }
    });
});
