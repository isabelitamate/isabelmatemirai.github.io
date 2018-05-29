/* alert wrapper */
function showAlertWrapper(element) {
	var item = '#' + element;
	$(item).fadeIn(1000, function() {
		if ($(this).has('.alert-success').length > 0) {
			window.setTimeout(function(){
				$(item).fadeOut(1000);
			},3000);
		} 
	});
}
$(document).ready(function(){
	/* alert wrapper */
	$('.alert-warning .close').on('click', function(){
		$(this).parent().parent().fadeOut(1000);
	});
});