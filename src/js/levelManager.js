const Level00 = require('../data/level00.js');
//const Level01 = require('../data/Level01.js');
var Level01 = Level02 = Level03 = Level04 = [];
const levels =
[
  Level00,
  Level01,
  Level02,
  Level03,
  Level04
]
function LevelManager(state) {
  this.state = state;
  this.game = state.game;
  this.index = -1;//As we preinclement the first time we use it
  this.level = [];
  this.levelIdx = 0;

  this.init = function () {
    this.level = levels[this.levelIdx];
    this.nextAddInstant();
  }
  this.chageLevel = function (newLevel) {
    this.level = levels[newLevel];
  }
  this.nextLevel = function () {
    if (this.levelIdx + 1 < levels.lenght){
      this.level = levels[++this.levelIdx];
    }
    else
      return false;
  }
  this.nextAddInstant = function () {
    this.state.game.time.events.add(state.timer.ms + this.level[this.index +1].time, this.instanciateInstant, this);
    this.index++;
  }
  this.instanciateInstant = function () {
    this.nextAddInstant();
    for (var i = 0; i < this.level[this.index].enemies.length; i++) {
      let enemyData = this.level[this.index].enemies[i];
      let newEnemy = new Enemy(
          this.state, this.game, enemyData.posX, enemyData.posY, enemyData.velX, enemyData.velY,
          enemyData.life, enemyData.sprite, enemyData.damag, enemyData.coolDown, enemyData.bulletSprite,
          enemyData.patron.tipo, enemyData.patron.scope, enemyData.patron.nProj, enemyData.bulletSpeed
        );
        newEnemy.anchor.setTo(0.5, 0.5);
      this.state.enemies.add(newEnemy);//add new enemy
    }
  }
}

module.exports = LevelManager;

function getJSON(path) {
  var request = new XMLHttpRequest();
  request.open("GET", path, false);
  request.send(null);
  return JSON.parse(request.responseText);
}
