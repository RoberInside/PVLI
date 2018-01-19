var Projectile = function (state, game, posX, posY, velX, velY, dmg) {
	Phaser.Sprite.call(this, game, posX, posY, 'enemyShoot');
	this.game = game;
	this.game.physics.enable(this);
	this.body.velocity.setTo(velX, velY);
	this.anchor.setTo(0.5, 0.5);
	this.dmg = dmg;
	this.delete = function () {
		this.kill();
	}
	this.events.onOutOfBounds.add(this.delete, this.game);
}

Projectile.prototype = Object.create(Phaser.Sprite.prototype);
Projectile.prototype.constructor = Projectile;

module.exports = Projectile;