'use strict';
var Player = require('./Player.js');
var Enemy = require('./Enemy.js');
var bg;


const MAX_ENEMIES = 50;

var PlayScene = {
  create: function () {
   //Provisional Background. TODO: make the BG an animation
    this.bullets = []
    bg = this.game.add.tileSprite(0, 0, 800, 600,'bg');
   //Enable Physics engine
  this.game.physics.startSystem(Phaser.Physics.ARCADE);
  initObjects(this);
  },

  update: function () {
    //background scroll speed every 4s
   bg.tilePosition.y += window.innerHeight * this.game.time.elapsedMS / 1000 * 0.25; 
   this.ship.move(this.input.mousePointer.x, this.input.mousePointer.y);
   this.enemies.forEach((e)=> e.update());
  // for (let b of this.bullets) b.showPos();
  }
};

module.exports = PlayScene;
function initObjects(playScene){
   playScene.ship = new Player(playScene, playScene.game, playScene.game.world.centerX, playScene.game.world.centerY);
   playScene.ship.anchor.setTo(0.5, 0.5);

   playScene.game.add.existing(playScene.ship)

   playScene.enemies = playScene.game.add.group();

/*
   for (var i = 0; i < MAX_ENEMIES; i++) {
   	enemies.add(new Enemy(playScene));
   }
   */
   playScene.enemies.add(new Enemy(playScene, playScene.game, 50, 100));

    playScene.enemies.forEach(
    function (e){
      e.anchor.setTo(0.5, 0.5);
    }

  )
}

function initPhysics(state) {
  state.game.physics.startSystem(Phaser.Physics.ARCADE);


}

