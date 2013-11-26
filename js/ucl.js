// UCL JS

$(document).ready(function(){

	$('.tabbed div').hide();
	$('.tabbed div:first').show();
	$('.tabbed ul li:first').addClass('active');
	 
	$('.tabbed ul li a').click(function(){
	$('.tabbed ul li').removeClass('active');
	$(this).parent().addClass('active');
	var currentTab = $(this).attr('href');
	$('.tabbed div').hide();
	$(currentTab).show();
	return false;
	});


	var allPanels = $('.accordion > dd').hide();
    
  $('.accordion > dt > a').click(function(e) {
  
		allPanels.slideUp();
		$(this).parent().next().slideDown();
		
		prevent(e);
   
  });

});

prevent = function (e) {

	if (e.preventDefault) e.preventDefault();
	else event.returnValue = false;

};