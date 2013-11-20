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
  
  if (window.location.href.match('#view-source')) viewsource();

});

viewsource = function () {

	var patternhtml = $('body').html().replace(/[<>]/g, function(m) { return {'<':'&lt;','>':'&gt;'}[m]})
																		.replace(/\t/g, '  ')
																		.replace(/((ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?)/gi,'<a href="$1">$1</a>');
	
	$('body').addClass('view-source').empty().append( '<pre class="prettyprint">' + patternhtml + '</pre>' );
	
	prettyPrint();

};

prevent = function (e) {

	if (e.preventDefault) e.preventDefault();
	else event.returnValue = false;

};