var Projectile = require('./Projectile.js')
var Pattern = require('./Pattern.js')

var Enemy = function(
	state, game, x, y, vx, vy, life, sprite, damage,
	coolDown, bulletSprite, pType, pScope, pNProjectiles, pV
){
	Phaser.Sprite.call(this, game, 0, 0, sprite);
	this.game = game;
	this.state = state;
	this.game.physics.enable(this);
	this.body.collideWorldBounds = true;
	this.body.bounce.setTo(1.0, 1.0);
	this.body.velocity.x = vx;
	this.body.velocity.y = vy;
	this.life = life;
	this.bSprite = bulletSprite;
	this.shootColdDown = coolDown;

	this.pattern = new Pattern(
		this, pType, this.shootColdDown, pNProjectiles, pScope, pV
	);
	//this.game.time.events.add(this.shootColdDown, this.shoot, this); lo hace solo una vez

};
Enemy.prototype = Object.create (Phaser.Sprite.prototype);
Enemy.prototype.constructor = Enemy;

Enemy.prototype.damage = function (dmg) {
	this.life -= dgm;
	if (this.life <= 0)
			this.kill();
};

Enemy.prototype.createBullet = function (vx ,vy) {
	console.log("Create Bullet with " + vx +", " + vy+ " velocity");
	let bullet = new Projectile(this.state, this.game, this.x, this.y, vx, vy);
	this.game.add.existing(bullet);
	this.state.bullets.push(bullet);

}

module.exports = Enemy;
