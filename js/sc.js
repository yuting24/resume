jQuery(document).ready(function(){
  jQuery('.container1').each(function() {
    jQuery(this).find('.skills').animate({
      width:jQuery(this).attr('data-percent')
    },4000);
  });
})


 



 /* $('.skills').each(function(){
  $(this).animate({
  width:$(this).attr('data-percent')},"fast");
  });
*/