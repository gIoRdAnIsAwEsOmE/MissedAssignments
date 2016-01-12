function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
 

setupCard('#Square');
function setupCard(id){
	for(x=1; x < 26; x++){
		if(x < 6){
			$(id + x).text(getRandomNumber(1,15));
		}else if(x<11){
			$(id + x).text(getRandomNumber(16,30));
		}else if(x<16){
			$(id + x).text(getRandomNumber(31,45));
		}else if(x<21){
			$(id + x).text(getRandomNumber(46,60));
		}else if(x<26){
			$(id + x).text(getRandomNumber(61,75));
		}
	}
}
