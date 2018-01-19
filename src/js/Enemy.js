var Projectile = require('./Projectile.js')


var Enemy = function(state, game, x, y, damage){
	Phaser.Sprite.call(this, game, 0, 0, 'enemy');
	this.game = game;
	this.game.physics.enable(this);
	this.body.collideWorldBounds = true;
	this.body.bounce.setTo(1.0, 1.0);
	this.body.velocity.x = 200;
	this.state = state;
	this.shootColdDown = 2000;
	this.dmg = damage;
	this.shootSound = this.game.add.audio('shootSound');
	this.game.time.events.loop(this.shootColdDown, this.shoot, this);
	//this.game.time.events.add(this.shootColdDown, this.shoot, this); lo hace solo una vez
	
};
Enemy.prototype = Object.create (Phaser.Sprite.prototype);
Enemy.prototype.constructor = Enemy;

Enemy.prototype.move = function() {/*/*Legado, puede que no lo usemos*/};

Enemy.prototype.kill = function() {
	//TODO
};
Enemy.prototype.update = function () {/*Legado, puede que no lo usemos*/};
Enemy.prototype.shoot = function () {
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
	this.shootSound.play();
};

Enemy.prototype.createBullet = function (vx ,vy) {
	let bullet = new Projectile(this.state, this.game, this.x, this.y, vx*50, vy*50, this.dmg);
	this.game.add.existing(bullet);
	this.state.bullets.push(bullet);

}
function inRadians(degrees) {
	return (degrees*Math.PI/180);
}
module.exports = Enemy;