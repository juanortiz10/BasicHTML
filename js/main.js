$(document).ready(function(){
  $('#name').fadeIn(3000);
  $('#page').fadeIn(4000);
  $('#me').fadeIn(5000);
  $('#me').animate({
      opacity: '1.0'
  });
});

$('#me').load(function(){
	$('#title').fadeIn(3000);
});
