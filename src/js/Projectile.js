var Projectile = function (state, game, posX, posY, velX, velY) {
	Phaser.Sprite.call(this, game, posX, posY, 'shoot');
	this.game = game;
	this.game.physics.enable(this);
	this.x = posX;
	this.y = posY;
	this.body.velocity.setTo(velX, velY);
	console.log('a proyectile created');

}

Projectile.prototype = Object.create(Phaser.Sprite.prototype);
Projectile.prototype.constructor = Projectile;

module.exports = Projectile;