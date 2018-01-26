'use strict';
var Player = require('./Player.js');
var LevelManager = require('./LevelManager.js')
var bg;


const MAX_ENEMIES = 50;

var PlayScene = {
  create: function () {
   //Provisional Background. TODO: make the BG an animation
    this.bullets = []
    bg = this.game.add.tileSprite(0, 0, 800, 600,'bg');
   //Enable Physics engine
  this.timer = new Phaser.Timer(this.game, false);
  this.game.physics.startSystem(Phaser.Physics.ARCADE);
  this.LevelManager = new LevelManager(this);
  initObjects(this);
  },

  update: function () {
    //background scroll speed every 4s
   bg.tilePosition.y += window.innerHeight * this.game.time.elapsedMS / 1000 * 0.25;
    //Make the player move
   this.player.move(this.input.mousePointer.x, this.input.mousePointer.y);

  }
};

module.exports = PlayScene;
function initObjects(playScene){
   playScene.player = new Player(playScene, playScene.game, playScene.game.world.centerX, playScene.game.world.centerY);
   playScene.player.anchor.setTo(0.5, 0.5);
   playScene.game.add.existing(playScene.player)
   playScene.enemies = playScene.game.add.group();

   playScene.LevelManager.init();

}