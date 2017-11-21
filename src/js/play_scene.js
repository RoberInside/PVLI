'use strict';
var Player = require('./Player.js');
var Asteroid = require('./Asteroid.js');



var MAX_ASTEROIDS = 50;

var PlayScene = {
  create: function () {
   //Provisional Background. TODO: make the BG an animation
   var bg = this.game.add.sprite(
      this.game.world.centerX, this.game.world.centerY, 'bg'
    );
   bg.anchor.setTo(0.5, 0.5);
   //Enable Physics engine
   this.game.physics.startSystem(Phaser.Physics.ARCADE);
    initObjects(this);
  },

  update: function () {
   this.ship.move(this.input.mousePointer.x, this.input.mousePointer.y);
   moveAsteroids(this);
  }
};
	
module.exports = PlayScene;
function initObjects(playScene){
   playScene.ship = new Player(playScene, playScene.game.world.centerX, playScene.game.world.centerY);
   playScene.ship.anchor.setTo(0.5, 0.5);
   
   playScene.game.add.existing(playScene.ship)

   var asteroids = playScene.game.add.group();

   var info = {};//JSON_File
   for (var i = 0; i < MAX_ASTEROIDS; i++) {
   	asteroids.add(new Asteroid(playScene));
   }
}

function moveAsteroids(asterois) {
   var ps = playScene;
   var a = ps.asteroid;

   a.body.velocity.y = 100 +(ps.game.rnd.integerInRange(-50, 50));
}

function initPhysics(state) {
  state.game.physics.startSystem(Phaser.Physics.ARCADE);


}