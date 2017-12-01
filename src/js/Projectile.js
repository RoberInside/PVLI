var Projectile = function (state, game, posX, posY, velX, velY) {
	Phaser.Sprite.call(this, game, posX, posY, 'shoot');
	this.game = game;
	this.game.physics.enable(this);
	this.body.velocity.setTo(velX, velY);
	console.log('a proyectile created');
	console.log('velocity: ' + this.body.velocity)
	this.showPos = ()=>{
		console.log("Projectile vel: " + this.body.velocity);
	}

}

Projectile.prototype = Object.create(Phaser.Sprite.prototype);
Projectile.prototype.constructor = Projectile;

module.exports = Projectile;