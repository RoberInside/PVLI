var Projectile = require('./Projectile.js')


var Enemy = function(state, game, x, y){
	Phaser.Sprite.call(this, game, x, y, 'enemy');
	this.game = game;
	this.game.physics.enable(this);
	this.state = state;
	this.Pattern = undefined;
	this.hasShot = false;

};
Enemy.prototype = Object.create (Phaser.Sprite.prototype);
Enemy.prototype.constructor = Enemy;

Enemy.prototype.move = function() {
	//TODO
	console.log("Function move() from Enemy not implemented yet");
};

Enemy.prototype.kill = function() {
	//TODO
};
Enemy.prototype.update = function () {
	this.move();
	this.shoot();
};
Enemy.prototype.shoot = function () {
	if (!this.hasShot){
		this.hasShot = true;

		if (this.Pattern === undefined){
			this.Pattern = new Pattern(this, this.patternType, 90, 0.5, 50);
		}
		this.Pattern.tick();
	}
}

Enemy.prototype.createBullet = function (vx ,vy) {
	let bullet = new Projectile(this.state, this.game, this.x, this.y, vx, vy);
		this.game.add.existing(bullet);
		this.state.bullets.push(bullet);

}
module.exports = Enemy;
