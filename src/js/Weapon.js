var Weapon = function (type) {
	this.cadency;
	this.damage;
	this.range;
	this.velocity;
	this.sprite;
}
Weapon.prototype.constructor = function(type) {
		switch(type){
			case 'basic':
			this.cadency = 0.2 *1000;//ms
			this.damage = 20;
			this.range = 200;
			this.velocity = 100
			this.sprite/*TODO*/;
			break;
			case 'laser':
			this.cadency = 2*1000;//ms
			this.damage = 100;
			this.range = 500;
			this.velocity = 300;
			this.sprite/*TODO*/
			break;
			//...
		}
};
Weapon.prototype.shoot = function() {
	/*TODO: Cadency and stuff*/
	//Pseudo code
	/*
	if (timeElipsed >= this.cadency)
		resetTimer();
	*/
	var proyectile = new Proyectile (this.sprite, this.damage, this.velocity, this.range);
};