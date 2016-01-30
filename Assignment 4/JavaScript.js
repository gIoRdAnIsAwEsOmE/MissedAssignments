var turns = 0;

var board = [[$('#Space1').text(),$('#Space2').text(),$('#Space3').text()],
			 [$('#Space4').text(),$('#Space5').text(),$('#Space6').text()],
			 [$('#Space7').text(),$('#Space8').text(),$('#Space9').text()]];
var game = false;

function XORO(id){
	var space = ('#' + id);
	if(!($(space).text() == "O"  || $(space).text() == "X")){
		if(turns % 2 == 0){
			$(space).text("X");
		}else{
			$(space).text("O");
		}
			turns += 1;	
	}else {
		window.alert("Choose a different one.");
	}



	//Finding Move
	var move = Math.ceil(id[5] / 3) - 1;
	//Check Winner
	//Cols
		for (var i = 0; i < 3; i++) {
		if(board[move][i] == "X" || board[move][i] == "O"){
			window.alert(String($(space).text()) + " has won.  Game will be reset.");
			game = true;
		}else if(board[i][move] == "X" || board[i][move] == "O"){
			window.alert(String($(space).text()) + " has won.  Game will be reset.");
			game = true;
		}else if(board[i][i] == "X" || board[i][i] == "O"){
			window.alert(String($(space).text()) + " has won.  Game will be reset");
			game = true;
		}else if(board[0][2] == ("X" || "O") && board[1][1] == ("X" || "O") && board[2][0] == ("X" || "O")){
			window.alert(String($(space).text()) + " has won.  Game will be reset");
			game = true;
		}
		/*
		window.alert("Loop:" + i);
		window.alert("Move: " + move);
		window.alert(game);
		*/
	}
}