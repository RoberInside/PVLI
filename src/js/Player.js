const Projectile = require('./Projectile.js');


var Player = function (state, game, x, y, health, coolDown) {
	Phaser.Sprite.call(this, game, x, y, 'ship');
	this.health = health || 1000;
	this.anchor.set( 0.5, 0.5);
	this.coolDown = coolDown;
	this.bulletSpeed = 60;
	this.game = game;
	this.state = state;	
	this.game.physics.enable(this);
	this.canShoot = true;
	//this.setPhysics();
};

Player.prototype = Object.create(Phaser.Sprite.prototype);
Player.prototype.constructor = Player;


Player.prototype.setCanShoot = function(value){
	this.canShoot = value;
}
Player.prototype.damage = function(dmg) {
	if (this.alive && this.health > 0){
		this.health -= dmg;
		console.log(this.health)
		if (this.health <= 0)
			this.kill();
	}
	
};
Player.prototype.move = function (x, y) {
	this.x = x;
	this.y = y;
};
Player.prototype.kill = function() {
	// TODO
	console.log("Muerto")
};
Player.prototype.shoot = function() {
	if (this.canShoot){
		this.canShoot = false;
		this.game.time.events.add(this.coolDown, this.setCanShoot, this, true);
		this.createBullet();
	}
};
Player.prototype.createBullet = function() {
	let bullet = new Projectile(this.state, this.game, this.x, this.y - this.height/2, 0, -this.bulletSpeed, this.damage);
	this.game.add.existing(bullet);
	this.state.playerBullets.push(bullet);

};
Player.prototype.setPhysics = function () {
	//this.body.collideWorldBounds = true;
	this.body.onWorldBounds = new Phaser.Signal();
	this.body.onWorldBounds.add(hitWorldBounds, this.state);
}
Player.prototype.hitWorldBounds = function() {
	
};

module.exports = Player;
