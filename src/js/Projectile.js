var Projectile = function (sprite, damage, velocity, range) {
		this.sprite = sprite;
		this.damage = damage;
		this.velocity = velocity;
		this.range = range;
		this.body.velocity.setTo(velocity, 0);

}

Projectile.prototype = Object.create(Phaser.Sprite.constructor);
Projectile.prototype.constructor = Projectile;
