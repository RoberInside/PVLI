'use strict';
var Player = require('./Player.js');
var Enemy = require('./Enemy.js');
var bg;


const MAX_ENEMIES = 50;

var PlayScene = {
  create: function () 
  {
  this.bullets = []
  bg = this.game.add.tileSprite(0, 0, 800, 600,'bg');
   //Enable Physics engine
  this.game.physics.startSystem(Phaser.Physics.ARCADE);
  this.music = this.game.add.audio('level1Music');
  initObjects(this);
  this.timer = new Phaser.Timer(this.game, false);
  this.endGame = function() {
    //END THE LEVEL
    console.log("GAME OVER");
    this.game.state.start('menu');
  }
  },

  update: function () {
    //background scroll speed every 4s
   bg.tilePosition.y += window.innerHeight * this.game.time.elapsedMS / 1000 * 0.25; 
   this.player.move(this.input.mousePointer.x, this.input.mousePointer.y);
   this.checkCollisons = function()
   {
    this.enemies.forEach((e)=> e.update());
    for (var b of this.bullets){
      if (Phaser.Rectangle.intersects(this.player.getBounds(), b.getBounds())){
          this.player.damage(b.dmg);
          if (!this.player.alive) 
             this.endGame();
          else
            this.player.hitSound.play();
          b.kill();
          this.bullets.pop(b);
        }
      }
    }
  }
};

module.exports = PlayScene;
function initObjects(playScene){
   playScene.player = new Player(playScene, playScene.game, playScene.game.world.centerX, playScene.game.world.centerY, 100);
   playScene.player.anchor.setTo(0.5, 0.5);
   playScene.game.add.existing(playScene.player)
   playScene.enemies = playScene.game.add.group();


   playScene.enemies.add(new Enemy(playScene, playScene.game, 50, 100, 30));

    playScene.enemies.forEach(
    function (e){
      e.anchor.setTo(0.5, 0.5);
    }

  )
}