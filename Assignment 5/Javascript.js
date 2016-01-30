



makeTable('#board');

function makeTable(id){
	for(x = 100;  x > 0; x--){
		$(id).html($(id).html() + " " + "<a id=Number" +  x + ">" + x + "</a>");
		if(x % 10 == 0  && x != 100){
			$(id).html($(id).html() + "<br>");
		}
	}

}

function makeADice(max, min){
	var number = Math.floor(Math.random() * (max - min + 1)) + min;
	return number;
}