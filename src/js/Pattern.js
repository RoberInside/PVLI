
var Pattern = function (enemy, type, cadency, nProjectiles, scope, vel) {
  this.enemy = enemy;
  this.nProjectiles = nProjectiles;
  this.scope = scope;
  this.type = type;
  this.vel = vel;
  this.patterns = [];
  enemy.game.time.events.loop(cadency, this.tick, this);

  //WAVE PATTERN
  this.patterns.push({ Wave : function() {
    let initialAngle = (Math.PI - scope) /2;
    let finalAngle = initialAngle + scope;
    let incr = scope/this.nProjectiles;
    for (var i = initialAngle; i < finalAngle; i+= incr) {
      var vx = Math.cos(i);
      var vy = Math.sin(i);
      enemy.createBullet(vx*this.vel, vy*this.vel);
    }
  }});
  //SPRING PATTERN
  this.patterns.push({ Spring : function () {
    this.initialAngle = (Math.PI - scope)/2;
    this.finalAngle = initialAngle + scope;
    this.incr = scope/this.nProjectiles;
    this.theta > this.finalAngle ? this.theta -= this.incr : this.theta += this.incr;
    let vx = Math.cos(this.theta);
    let vy = Math.sin(this.theta);

    enemy.createBullet(vx*this.vel, vy*this.vel);

  }});
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
  this.tick = function(type){
    if (type !== this.type)
      this.changePatternTo(type);
  this.patterns[myEnum(this.type)]();
  };
};

function inRadians(degrees) {
  return (degrees*Math.PI/180);
}

function myEnum(string) {
  var index
  switch (string) {
    case 'Wave':    index = 0; break;
    case "Spring":  index = 1; break;
  }
  return index
}

module.exports = Pattern;
