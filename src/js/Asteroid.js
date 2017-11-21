var Asteroid = function(state, x, y){
	this.x = x || state.game.world.centerX;
	this.y = y || state.game.world.centerY;
	Phaser.Sprite.call(this,state, x, y, 'asteroid');
	//Aquí hacer que tome un id significativo de forma automática
	this.id;
};
Asteroid.prototype = Object.create (Phaser.Sprite.prototype);
Asteroid.prototype.constructor = Asteroid;

Asteroid.prototype.move = function() {
	//TODO
};
Asteroid.prototype.kill = function() {
	//TODO
};

module.exports = Asteroid;

var nivel1 = [ new Asteroid(10, 10 7, 8),  
;]

var nivel = [ {when: 0, pattern: [{}]}, {when: 5, patter: [...]} ]
ast = function(game) {game.add [new ASteroid(w, game)]
[

]