
// Variable declaration!
var heigth, width , color;


// When size is submitted by the user, call makeGrid() function
$('#sizePicker').submit(function(event){
	event.preventDefault();
	heigth = $('#inputHeight').val();
	width = $('#inputWeight').val();
	makeGrid(heigth,width);


})

function makeGrid(x,y) {
	$('tr').remove();

	// Your code goes here!
	for(var i=1; i<=x; i++) {
		$('#pixelCanvas').append('<tr id=table' + i + '></tr>');
		for(var j=1; j<=y; j++) {
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
	

