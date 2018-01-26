var Projectile = require('./Projectile.js')
var Pattern = require('./Pattern.js')

var Enemy = function(state, enemyData)
{

	Phaser.Sprite.call(this, state.game, enemyData.posX, enemyData.posY, enemyData.sprite);
	this.state = state;
	this.game = state.game;
	this.game.physics.enable(this);

	this.body.velocity.x = enemyData.velX;
	this.body.velocity.y = enemyData.velY;
	this.life = enemyData.life;
	this.bulletVelocity = enemyData.bulletVelocity;
	this.bSprite = enemyData.bulletSprite;
	this.shootColdDown = enemyData.coolDown;
	this.damage = enemyData.damage;

	this.pattern = new Pattern(
		this, enemyData.pattern.type, 
		this.shootColdDown, enemyData.pattern.nProj, 
		enemyData.pattern.scope
	);
	this.shootSound = this.game.add.audio('shootSound');

};
Enemy.prototype = Object.create (Phaser.Sprite.prototype);
Enemy.prototype.constructor = Enemy;


Enemy.prototype.hurt = function (dmg) {
	this.life -= dmg;
	if (this.life <= 0)
			this.kill();
};

Enemy.prototype.createBullet = function (dirX ,dirY) {
	this.shootSound.play();
	let bullet = new Projectile(
		this.state, this.game, 
		this.x, this.y, 
		dirX*this.bulletVelocity, dirY*this.bulletVelocity,
		this.damage, true, this.bSprite
		);
	this.game.add.existing(bullet);
	this.state.enemyBullets.push(bullet);
	//debug(bullet, this)
}

module.exports = Enemy;
function debug(bullet, e){
	console.log('Created bullet  from enemy ', +  e.id + ' with ( ' + bullet.body.velocity.x +', ' + bullet.body.velocity.y + ' ) velocity');
}