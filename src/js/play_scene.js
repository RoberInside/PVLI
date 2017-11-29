'use strict';
var Player = require('./Player.js');
var Enemy = require('./Enemy.js');



const MAX_ENEMIES = 50;

var PlayScene = {
  create: function () {
   //Provisional Background. TODO: make the BG an animation
    this.bullets = []
    this.bg = this.game.add.sprite(
      this.game.world.centerX, this.game.world.centerY, 'bg'
    );
  this.bg.anchor.setTo(0.5, 0.5);
   //Enable Physics engine
  this.game.physics.startSystem(Phaser.Physics.ARCADE);
  initObjects(this);
  },

  update: function () {
   this.ship.move(this.input.mousePointer.x, this.input.mousePointer.y);
   this.enemies.forEach((e)=> e.update());
   for (var b of this.bullets) b.showPosition();
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
   playScene.enemies.add(new Enemy(playScene, playScene.game, window.innerWidth/2, 0));

}

function initPhysics(state) {
  state.game.physics.startSystem(Phaser.Physics.ARCADE);


}
