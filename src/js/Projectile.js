var Projectile = function (state, game, posX, posY, velX, velY) {
	Phaser.Sprite.call(this, game, posX, posY, 'shoot');
	this.game = game;
	this.game.physics.enable(this);
	this.x = game.world.centerX;
	this.y = this.game.world.centerY;
	this.body.velocity.setTo(velX, velY);
	this.anchor.setTo(0.5, 0.5);
	console.log('a proyectile created');

}

Projectile.prototype = Object.create(Phaser.Sprite.prototype);
Projectile.prototype.constructor = Projectile;

module.exports = Projectile;
Projectile.prototype.showPosition = function() {

	console.log('porjectile position:' + this.x + ", " + this.y+ "\n");
};