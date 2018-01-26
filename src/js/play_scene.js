'use strict';
var Player = require('./Player.js');
var LevelManager = require('./LevelManager.js')
var bg;

var PlayScene = {

create: function () {
   //Provisional Background. TODO: make the BG an animation
  this.enemyBullets = [];
  this.playerBullets = []

  bg = this.game.add.tileSprite(0, 0, 800, 600,'bg');
   //Enable Physics engine
  this.timer = new Phaser.Timer(this.game, false);
  this.game.physics.startSystem(Phaser.Physics.ARCADE);

  this.LevelManager = new LevelManager(this);
  this.game.physics.setBoundsToWorld();
  initObjects(this);
  this.timer = new Phaser.Timer(this.game, false);
},

update: function () {
    //background scroll speed every 4s

   bg.tilePosition.y += window.innerHeight * this.game.time.elapsedMS / 1000 * 0.25;
   //Move the player to de cursor position
   this.player.move(this.input.mousePointer.x, this.input.mousePointer.y);
   //check if player have to shoot
   if (this.game.input.mousePointer.isDown) this.player.shoot();
   
   //Check playerBullets-enemies collisons
   /*No acaba de funcionar per no me da tiempo a más,
    en cuanto se crea la bala del player el collison devuelve true, lo cual tiene poco sentido porque
    en todo caso el overlap debería ser con el player pero el player no aparece para nada en esta funcion*/
   /*
    
   this.enemies.forEach(function(enemy){
    for(var pb of enemy.state.playerBullets){
        if (collides(enemy, pb)){
            console.log("Se supone que has acertado a un enemigo")
            enemy.hurt(pb.damage);
            if (pb.alive) pb.kill();
            enemy.state.playerBullets.splice(enemy.state.playerBullets.indexOf(pb), 1);
        }
    }
   });*/

   //Check enemyBullets-player collisons
   for(var b of this.enemyBullets)
   {
    if (collides(b, this.player)){
        this.player.damage(b.damage);
        if (b.alive) b.kill();
        this.enemyBullets.splice(this.enemyBullets.indexOf(b), 1);
    }
   }
}
  
};


module.exports = PlayScene;
function initObjects(playScene){

    playScene.player = new Player(playScene, playScene.game, playScene.game.world.centerX, playScene.game.world.centerY, 100, 300, 'player_shoot');
    playScene.player.anchor.setTo(0.5, 0.5);
    playScene.game.add.existing(playScene.player)
    playScene.enemies = playScene.game.add.group();

   playScene.LevelManager.init();
}
function collides(A, B){
  return Phaser.Rectangle.intersects(A.getBounds(), B.getBounds());
}
