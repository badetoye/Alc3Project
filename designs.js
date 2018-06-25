
// Variable declaration!
var heigth, width , color;

// When size is submitted by the user, call makeGrid() function
$('#sizePicker').submit(function(event){
	event.preventDefault();
	heigth = $('#inputHeight').val();
	width = $('#inputWeight').val();
	makeGrid(heigth,width);

})
//implement the makeGrid() function and create a grid of squares
function makeGrid(n,m) {
	$('tr').remove();//remove previously created table rows

	for(var i=1; i<=n; i++) {
		$('#pixelCanvas').append('<tr id=table' + i + '></tr>');
		for(var j=1; j<=m; j++) {
			$('#table' + i).append('<td></td>');
		}
	}

	//add color to cell
	$('td').click(function addColor() {
		color = $('#colorPicker').val();

		if($(this).attr('style')) {
			$(this).removeAttr('style')
		} else {
			$(this).attr('style', 'background-color:' + color);

		}
	})
}
