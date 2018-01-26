var Player = function (state, game, x, y, health) {
	Phaser.Sprite.call(this, game, x, y, 'ship');
	this.health = health || 1000;
	this.anchor.set( 0.5, 0.5);
	this.weapon = {};
	this.game = game;
	this.game.physics.enable(this);
	//this.setPhysics();
};

Player.prototype = Object.create(Phaser.Sprite.prototype);
Player.prototype.constructor = Player;

Player.prototype.damage = function(dmg) {
	if (this.health <= 0)
		this.kill();
	else{
	this.health -= dmg;
	console.log(this.health);
	}
	
};
Player.prototype.move = function (x, y) {
	this.x = x;
	this.y = y;
};
Player.prototype.kill = function() {
	// TODO
	console.log("Muerto")
};

Player.prototype.setPhysics = function () {
	//this.body.collideWorldBounds = true;
	this.body.onWorldBounds = new Phaser.Signal();
	this.body.onWorldBounds.add(hitWorldBounds, this.state);
}
Player.prototype.hitWorldBounds = function() {
	
};

module.exports = Player;
