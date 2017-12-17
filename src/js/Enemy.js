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

	if(this.x < window.innerWidth - 50 && this.y < 100){
		this.body.velocity.setTo(200, 0);
	}else if(this.x >= window.innerWidth -100 && this.y < window.innerHeight-75){
		this.body.velocity.setTo(0, 200);
	}else if(this.x >= window.innerWidth-100 && this.y >= window.innerHeight-75){
		this.body.velocity.setTo(-200, 0);
	}
	else if(this.x <= 50 && this.y >= 50){
		this.body.velocity.setTo(0, -200);
	}





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
	let scope = inRadians(90);
	let initialAngle = (Math.PI - scope) /2;
	let finalAngle = initialAngle + scope;
	let nBullets = 3;
	let incr = scope / nBullets;
		for (var i = initialAngle; i < finalAngle; i+= incr)
		{
			let vx = Math.cos(i);
			let vy = Math.sin(i);
			this.createBullet(vx, vy);
		}
	this.hasShot = true;
	}
}

Enemy.prototype.createBullet = function (vx ,vy) {
	let bullet = new Projectile(this.state, this.game, this.x, this.y, vx*50, vy*50);
		this.game.add.existing(bullet);
		this.state.bullets.push(bullet);

}
function inRadians(degrees) {
	return (degrees*Math.PI/180);
}
module.exports = Enemy;