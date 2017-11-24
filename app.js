// good luck !
$('input').css("background", function(){
	return $(this).data("color");
});

$("input").click(function(){
	var color = $(this).data("color");
	$("body").css("background", color);
});

var checked = $('modify-text').is(':checked');
	if{
		
	}