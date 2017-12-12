var canvas = document.getElementById("mazeCanvas");
var ctx = canvas.getContext("2d");

function randomizeMaze(){
	ctx.fillStyle = "#43876e";
	ctx.fillRect(100,50,400,200);
	ctx.fillStyle = "#16112d";
	for(i = 0; i < 200; i++){
		for(j = 0; j < 100; j++){
			if(Math.random() > 0.5){
				ctx.fillRect((i * 2) + 100, (j * 2) + 50, 2, 2);
			}		
		}

	}
}