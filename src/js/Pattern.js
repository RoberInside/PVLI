function inRadians(degrees) {
  return (degrees*Math.PI/180);
}

var Pattern = function (enemy, type, cadency, nProjectiles, scope) {
  this.enemy = enemy;
  this.nProjectiles = nProjectiles;
  this.scope = inRadians(scope);
  this.type = type;
  this.sentido = true;
  this.patterns = {};
  this.tick = function(){
  	this.patterns[this.type](this);
  };
  enemy.game.time.events.loop(cadency, this.tick, this);

  //WAVE PATTERN
  this.patterns.Wave = function(self) {
    var initialAngle = Math.PI - self.scope;
    for (var i = 0; i < self.nProjectiles; i++)
    {
      let theta = initialAngle + (self.scope/(nProjectiles+1))*i;
      let dx = Math.cos(theta);
      let dy = Math.sin(theta);
      self.enemy.createBullet(dx, dy);
    }

  };
  //SPRING PATTERN
  this.patterns.Spring = function (self) {
    self.initialAngle = Math.PI - self.scope;
    self.finalAngle = initialAngle + scope;
    self.incr = scope/self.nProjectiles;
    if (self.theta > self.finalAngle || self.theta < initialAngle) self.sentido = !self.sentido;
    self.sentido ? self.theta -= self.incr : self.theta += self.incr; 
    let dx = Math.cos(self.theta);
    let dy = Math.sin(self.theta);

    enemy.createBullet(dx, dy);

  };

  //64245395
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
        self.sentido = true;
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
