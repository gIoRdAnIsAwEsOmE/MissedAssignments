



makeTable('#board');

function makeTable(id){
	for(x = 100;  x > -1; x--){
		if(x != 0){
			$(id).html($(id).html() + " " + "<a id=Number" +  x + ">" + x + "</a>");
			if((x-1) % 10 == 0  && x != 100){
				$(id).html($(id).html() + "<br>");
			}
		}else{
			$(id).html($(id).html() + "<a id=Number style=\"color:rgb(0,0,255);\"" +  x + ">" + "Start" + "</a>");
		}
	}
}

function makeADice(max, min){
	var number = Math.floor(Math.random() * (max - min + 1)) + min;
	return number;
}



function makeMove(){
		window.alert("hi");
	for(x=0; x < 100; x++){
		var place = $('#Number' + x);
		window.alert(place.css('color'));
		window.alert("hi");
				if(place.css('color') == ('rgb(0,0,255)')){
				var numberified = Integer.parseInt(place.html());
				var move = MakeADice(6,1);
				$('#log').html($('#log').html() + "\nThe dice has rolled to a" + move);

			}
	}
}

$(document).ready(function() {
    $(document).on("click","#button1",function() {
        alert("click bound to document listening for #test-element");
    });

});