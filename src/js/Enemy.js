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


var Enemy = function(state, game, x, y, damage){
	Phaser.Sprite.call(this, game, 0, 0, 'enemy');
	this.game = game;
	this.game.physics.enable(this);
	this.body.collideWorldBounds = true;
	this.body.bounce.setTo(1.0, 1.0);
	this.body.velocity.x = 200;
	this.state = state;
	this.shootColdDown = 2000;
	this.dmg = damage;
	this.shootSound = this.game.add.audio('shootSound');
	this.game.time.events.loop(this.shootColdDown, this.shoot, this);
	//this.game.time.events.add(this.shootColdDown, this.shoot, this); lo hace solo una vez
	

};
Enemy.prototype = Object.create (Phaser.Sprite.prototype);
Enemy.prototype.constructor = Enemy;


Enemy.prototype.hurt = function (dmg) {
	this.life -= dmg;
	if (this.life <= 0)
			this.kill();
};

Enemy.prototype.createBullet = function (dirX ,dirY) {
Enemy.prototype.kill = function() {
	//TODO
};
Enemy.prototype.update = function () {/*Legado, puede que no lo usemos*/};
Enemy.prototype.shoot = function () {
	let scope = inRadians(90);
	let initialAngle = (Math.PI - scope) /2;
	let finalAngle = initialAngle + scope;
	let nBullets = 3;
	let incr = scope / nBullets;
	for (var i = initialAngle; i < finalAngle; i+= incr)
	{
		let vx = Math.cos(i);
		let vy = Math.sin(i);
		this.createBullet(vx, vy);
	}
	this.shootSound.play();
};

Enemy.prototype.createBullet = function (vx ,vy) {
	let bullet = new Projectile(this.state, this.game, this.x, this.y, vx*50, vy*50, this.dmg);
	this.game.add.existing(bullet);
	this.state.bullets.push(bullet);

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