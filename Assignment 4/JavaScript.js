var turns = 0;

function XORO(id){
	if($('#' + id).text)
	if(turns % 2 == 0){
		$('#' + id).text("X");
		alert(turns);
	}else{
		$('#' + id).text("O");
	}
	turns += 1;	
	
}





