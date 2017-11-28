var Projectile = require('./Projectile.js')


var Enemy = function(state, game, x, y){
	Phaser.Sprite.call(this, game, 0, 0, 'enemy');
	this.game = game;
	this.game.physics.enable(this);
	this.state = state;
	this.x = x;
	this.y = y;
	this.hasShot = false;
};
Enemy.prototype = Object.create (Phaser.Sprite.prototype);
Enemy.prototype.constructor = Enemy;

Enemy.prototype.move = function() {
	/*
	this.x += this.dir.x * this.vel;
	this.y += this.dir.y * this.vel;
	*/
};
Enemy.prototype.kill = function() {
	//TODO
};
Enemy.prototype.update = function () {
	this.move();
	this.shoot();
};
Enemy.prototype.shoot = function () {
	if (!this.hasShot){
		this.state.bullets.push(new Projectile(this.state, this.game, this.x, this.y, -5, 0));
		hasShot = true;
	}
};	
module.exports = Enemy;
/*
var nivel1 = [ new Enemy(10, 10 7, 8),
;]

var nivel = [ {when: 0, pattern: [{}]}, {when: 5, patter: [...]} ]
ast = function(game) {game.add [new Enemy(w, game)]
[

]
*/
