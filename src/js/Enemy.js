var Projectile = require('./Projectile.js')
var Pattern = require('./Pattern.js')

/*var Enemy = 
function(
	state, game, x, y, vx, vy, life, sprite, damage,
	coolDown, bulletSprite, pType, pScope, pNProjectiles, pV
)*/
var Enemy = function(state, enemyData)
{

	Phaser.Sprite.call(this, state.game, 0, 0, enemyData.sprite);
	this.game = state.game;
	this.state = state;
	this.game.physics.enable(this);
	this.body.collideWorldBounds = true;
	this.body.bounce.setTo(1.0, 1.0);
	this.body.velocity.x = enemyData.velX;
	this.body.velocity.y = enemyData.velY;
	this.life = enemyData.life;
	this.bulletVelocity = enemyData.bulletVelocity;
	this.bSprite = enemyData.bulletSprite;
	this.shootColdDown = enemyData.coolDown;

	this.pattern = new Pattern(
		this, enemyData.pattern.type, 
		this.shootColdDown, enemyData.pattern.nProj, 
		enemyData.pattern.scope
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

Enemy.prototype.createBullet = function (dirX ,dirY) {
	console.log("Create Bullet with " + vx +", " + vy+ " velocity");
	let bullet = new Projectile(
		this.state, this.game, 
		this.x, this.y, 
		dirX*this.bulletVelocity, dirY*this.bulletVelocity
		);
	bullet.
	this.game.add.existing(bullet);
	this.state.bullets.push(bullet);

}

module.exports = Enemy;
