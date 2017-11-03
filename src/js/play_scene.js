'use strict';

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

  update: function  () {
   moveShip(this);
   moveAsteroids(this);
  }
  

};

module.exports = PlayScene;
function initObjects(playScene){
      playScene.ship = playScene.game.add.sprite(
     playScene.game.world.centerX, playScene.game.world.centerY, 'ship'
   );
   playScene.ship.anchor.setTo(0.5, 0.5);
    
    playScene.asteroid = playScene.game.add.sprite(
        700, playScene.game.world.centerY, 'asteroid'
      );
    playScene.asteroid.anchor.setTo(0.5, 0.5);
    playScene.game.physics.arcade.enable(playScene.asteroid);
    playScene.asteroid.body.velocity.x = -100;
}
function moveShip(playScene) {
   var ps = playScene;
   var ship = playScene.ship;
   ship.x = ps.input.mousePointer.x;
   ship.y = ps.input.mousePointer.y;
}

function moveAsteroids(playScene) {
   var ps = playScene;
   var a = ps.asteroid;

   a.body.velocity.y = 100 +(ps.game.rnd.integerInRange(-50, 50));
}
