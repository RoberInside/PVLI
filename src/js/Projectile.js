var Projectile = function (state, game, posX, posY, velX, velY, sprite) {
	Phaser.Sprite.call(this, game, posX, posY, sprite);
	this.game = game;
	this.game.physics.enable(this);
	this.body.velocity.setTo(velX, velY);
	this.anchor.setTo(0.5, 0.5);

}

Projectile.prototype = Object.create(Phaser.Sprite.prototype);
Projectile.prototype.constructor = Projectile;

module.exports = Projectile;