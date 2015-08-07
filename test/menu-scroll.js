
$(window).scroll(function() {
   if($(window).scrollTop() + $(window).height() > $(document).height() - 200) {
       $('#button').addClass('fixed_button');
   }else{
       $('#button').removeClass('fixed_button');
   }
});
