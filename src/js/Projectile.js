var Projectile = function (state, game, posX, posY, velX, velY, damage, enemybullet) {
	Phaser.Sprite.call(this, game, posX, posY, 'shoot');
	this.game = game;
	this.state = state;
	this.enemybullet = enemybullet;
	this.game.physics.enable(this);
	this.body.velocity.setTo(velX, velY);
	this.anchor.setTo(0.5, 0.5);
	this.damage = damage;
	this.checkWorldBounds = true;
	//this.outOfBoundsKill  = true; don't know if we should use it as we have to pop out this from the bullet array
	this.onOffWorld = function(){
		this.enemybullet ?
			this.state.enemyBullets.splice(this.state.enemyBullets.indexOf(this), 1):
			this.state.playerBullets.splice(this.state.playerBullets.indexOf(this), 1);
		this.kill();
	}
	this.events.onOutOfBounds.add(this.onOffWorld, this);
}

Projectile.prototype = Object.create(Phaser.Sprite.prototype);
Projectile.prototype.constructor = Projectile;

module.exports = Projectile;	