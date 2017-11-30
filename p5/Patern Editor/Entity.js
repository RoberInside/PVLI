var Entity = function (x, y, id, origin) {
	this.x = x;
	this.y = y;

	this.dir = {x: 0, y:0};
	this.dir.x = 0;
	this.dir.y = 0;
	this.color = color(255, 255, 255);
	this.radius = 50;
	this.id = id;
	this.over = false;

}
Entity.prototype.isPressed = function(mx, my) {
	return(dist(mx, my, this.x, this.y)< 50);
};
Entity.prototype.draw = function() {
	if (this.over){
		fill(129,229,245 );
	}
	ellipse (this.x, this.y, this.radius, this.radius);
	fill(255, 255, 255);
};
Entity.prototype.calculate = function () {
	this.dir.x = origin.x - this.x;
	this.dir.y = origin.y - this.y;
};
