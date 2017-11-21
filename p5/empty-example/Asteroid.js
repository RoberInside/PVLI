var Entity = function (x, y, id) {
	this.x = x;
	this.y = y;
	this.color = color(255, 255, 255);
	this.radius = 50;
	this.id = id;
	this.over = false;

}
Entity.prototype.isPressed = function(mx, my) {
	return(dist(mx, my, this.x, this.y)< 50);
};
Entity.prototype.move = function() {
	while(!mouseReleased())
	{
		this.x = mouseX;
		this.y = mouseY;
	}
};
Entity.prototype.draw = function() {
	if (this.over){
		fill(129,229,245 );
	}
	ellipse (this.x, this.y, this.radius, this.radius);
	fill(255, 255, 255);
};
