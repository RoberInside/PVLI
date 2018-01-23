function inRadians(degrees) {
  return (degrees*Math.PI/180);
}

var Pattern = function (enemy, type, cadency, nProjectiles, scope, vel) {
  this.enemy = enemy;
  this.nProjectiles = nProjectiles;
  this.scope = inRadians(scope);
  this.type = type;
  this.patterns = {};
  this.tick = function(){
  	this.patterns[this.type](this);
  };
  enemy.game.time.events.loop(cadency, this.tick, this);

  //WAVE PATTERN
  this.patterns.Wave = function(self) {
    let initialAngle = (Math.PI - self.scope) /2;
    let finalAngle = initialAngle + self.scope;
    let incr = self.scope/self.nProjectiles;
    for (var i = initialAngle; i < finalAngle; i+= incr) {
      var dx = Math.cos(i);
      var dy = Math.sin(i);
      enemy.createBullet(dx, dy);
    }
  };
  //SPRING PATTERN
  this.patterns.Spring = function (self) {
    self.initialAngle = (Math.PI - scope)/2;
    self.finalAngle = initialAngle + scope;
    self.incr = scope/self.nProjectiles;
    self.theta > self.finalAngle ? self.theta -= self.incr : self.theta += self.incr;
    let dx = Math.cos(self.theta);
    let dy = Math.sin(self.theta);

    enemy.createBullet(dx, dy);

  };
  this.changePatternTo = function (newType) {
    /*
     * TODO: this function has to:
     * - Set last pattern attributes to null
     * - Initialize the new pattern attributes
     */
     // set last pattern attrs to null
     switch (this.type) {
       case "Wave": break;
       case "Spring":
       this.initialAngle = undefined;
       this.finalAngle = undefined;
       this.theta = undefined;
       break;
       default:

     }
     //Initialize new attrs.
     switch (newType) {
       case "Wave": break;
      case "Spring":
       this.initialAngle = 0;
       this.finalAngle = 0;
       this.theta = 0;
       break;
       default:

     }
     this.type = newType;
  }
};



module.exports = Pattern;
