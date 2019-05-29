$(document).ready(function() {
	$(".verticalText").click(function() {
		$(".connectionForm").css({
			display: 'block'
		});
	});
	$(".close").click(function() {
		$(".connectionForm").css({
			display: 'none'
		});
	});
});