
$(window).scroll(function() {
   if($(window).scrollTop() + $(window).height() >= $(document).height() - 80) {
       $('#left-content').addClass('fixed-left-content');
   }else{
       $('#left-content').removeClass('fixed-left-content');
   }
});
