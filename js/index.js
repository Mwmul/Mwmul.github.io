$('.close').click(function () {
	$('.about').css("display", "none");
	$('.portfolio').css("display", "none");
	$('.contact').css("display", "none");
	$('.container').css("opacity", "1");

});

$(function() {
  $('.option-container').click(function(){
		$('.container').css("opacity", "0")
		console.log('test');
    var panelid = $(this).attr('data-panelid');
		$('#'+panelid).fadeToggle(500);
  });
});
