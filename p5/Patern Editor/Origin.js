var Origin = function () {
	this.x = 0;
	this.y = 0;
}
Origin.prototype.draw = function() {
	stroke(255, 0, 0);
	point(this.x, this.y);
};