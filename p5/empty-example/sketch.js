
//VARIABLES
var entitys = []
var canCreate = true;
var numentitys = 0;
var WIDTH = 800;
var HEIGHT = 600;
var origin;
var input;
var path_button;
var save_button;
var path;
function setup() {

  createCanvas(WIDTH, HEIGHT);
  background(51);
  origin = new Origin(WIDTH/2, HEIGHT/2);

  	input = createInput();
  	path_button = createButton('Enter Path');
  	save_button = createButton('SAVE!');

  	input.position(WIDTH/2 - input.width/2 - path_button.width/2, HEIGHT + 20);
  	path_button.position(input.x + input.width, input.y);
	path_button.mousePressed(setPath);

	save_button.position(WIDTH/2 -save_button.width/2, input.y + input.height+20);
	save_button.mousePressed(save);
}
function setPath() {
	if (input.value() !== ""){
		path = input.value();
		return true;
	}
	else return false;
}

function draw() {
	background(51);

	for (var a of entitys){
		a.draw();
	}
	origin.draw();
	for (var a of entitys){
		stroke(0, 0, 255)
		line(a.x, a.y, origin.x, origin.y);
		stroke('black')
	}
	
}


function mousePressed(){
	switch	(mouseButton){
		case LEFT:
		for (var i = 0; i < entitys.length; i++) {
			if (entitys[i].over){
				entitys.splice(i, 1);
				canCreate = false;
			}
		}
		if (canCreate && mouseX < WIDTH && mouseY < HEIGHT){
  			canCreate = false;
  			entitys.push(new Asteroid(mouseX, mouseY, numentitys));
			numentitys++;
  			console.log(numentitys + " entitys\n")
  		}
		break;
		case RIGHT:
		break;
		case CENTER:
		break;
	}
	
}
function mouseReleased(){ canCreate = true;}
function mouseMoved() {
	for(var a of entitys)
		a.over = dist(mouseX, mouseY, a.x, a.y) < a.radius;
}

var Origin = function (x, y) {
	this.x = x;
	this.y = y;
}
Origin.prototype.draw = function() {
	stroke('red');
	line(0, HEIGHT/2, WIDTH, HEIGHT/2);
	line(WIDTH/2, HEIGHT, WIDTH/2, 0);
	fill(0, 255,0);
	noStroke()
	ellipse(this.x, this.y, 10);
	fill(255, 255, 255);
};

function rescale() {
	if(input.value() !== ""){
		var values = input.value().split(" ")
		WIDTH = parseInt(values[0]);
		HEIGHT = parseInt(values[1]);
	}
	setup();
}
function save() {
	var holder = {}
	if (setPath()){
		saveJSON(holder, path);
	}
	else console.log('No hay ruta cerdo')
}