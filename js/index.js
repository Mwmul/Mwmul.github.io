$('#about').click(function()
	{
		$('.container').css("opacity", "0")
		$('.about').css("display", "block")
	})

$('.close').click(function()
	{
		$('.about').css("display", "none")
		$('.portfolio').css("display", "none")
		$('.contact').css("display", "none")
		$('.container').css("opacity", "1")
	})

$('#portfolio').click(function()
	{
		$('.container').css("opacity", "0")
		$('.portfolio').css("display", "block")
	})
$('#contact').click(function()
	{
		$('.container').css("opacity", "0")
		$('.contact').css("display", "block")
	})
