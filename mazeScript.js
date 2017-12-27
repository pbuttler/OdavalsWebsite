var canvas = document.getElementById("mazeCanvas");
var ctx = canvas.getContext("2d");
var ratio = 0.5;

function randomizeMaze(){
	ctx.fillStyle = "#43876e";
	ctx.fillRect(100,50,400,200);
	ctx.fillStyle = "#16112d";
	for(i = 0; i < 200; i++){
		for(j = 0; j < 100; j++){
			if(Math.random() > ratio){
				ctx.fillRect((i * 2) + 100, (j * 2) + 50, 2, 2);
			}		
		}

	}
}

function increaseFill(){
	if(ratio < 1){
		ratio += .1;
	}
}

function decreaseFill(){
	if(ratio > 0){
		ratio -= .1;
	}
}
