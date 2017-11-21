var Player = function (state, x, y, health) {
	Phaser.Sprite.call(this, state, x, y, 'player');
	this.health = health || 100;
	this.anchor.set( 0.5, 0.5);
	this.weapon = {};
	//this.setPhysics();
};

Player.prototype = Object.create(Phaser.Sprite.prototype);
Player.prototype.constructor = Player;

Player.prototype.move = function (x, y) {
	this.x = x;
	this.y = y;
};
Player.prototype.shot = function() {
	this.weapon.shoot();
};
Player.prototype.kill = function() {
	// TODO
};
Player.prototype.damage = function (dmg) {
	this.health -= dmg;
	if (this.health <= 0)
		this.kill();
};
Player.prototype.swapWaepon = function(newWeapon) {
	this.weapon = new weapon(newWeapons);
};
Player.prototype.setPhysics = function () {
	//this.body.collideWorldBounds = true;
	this.body.onWorldBounds = new Phaser.Signal();
	this.body.onWorldBounds.add(hitWorldBounds, this.state);
}
Player.prototype.hitWorldBounds = function() {
	
};

module.exports = Player;
