var Projectile = function (state, game, posX, posY, velX, velY) {
	Phaser.Sprite.call(this, game, posX, posY, 'shoot');
	this.game = game;
	this.game.physics.enable(this);
<<<<<<< HEAD
	this.x = game.world.centerX;
	this.y = this.game.world.centerY;
=======
>>>>>>> Enem_Fondo
	this.body.velocity.setTo(velX, velY);
	this.anchor.setTo(0.5, 0.5);
	console.log('a proyectile created');
	console.log('velocity: ' + this.body.velocity)
	this.showPos = ()=>{
		console.log("Projectile vel: " + this.body.velocity);
	}

}

Projectile.prototype = Object.create(Phaser.Sprite.prototype);
Projectile.prototype.constructor = Projectile;

module.exports = Projectile;
Projectile.prototype.showPosition = function() {

	console.log('porjectile position:' + this.x + ", " + this.y+ "\n");
};