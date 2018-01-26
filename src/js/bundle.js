(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict"

function unique_pred(list, compare) {
  var ptr = 1
    , len = list.length
    , a=list[0], b=list[0]
  for(var i=1; i<len; ++i) {
    b = a
    a = list[i]
    if(compare(a, b)) {
      if(i === ptr) {
        ptr++
        continue
      }
      list[ptr++] = a
    }
  }
  list.length = ptr
  return list
}

function unique_eq(list) {
  var ptr = 1
    , len = list.length
    , a=list[0], b = list[0]
  for(var i=1; i<len; ++i, b=a) {
    b = a
    a = list[i]
    if(a !== b) {
      if(i === ptr) {
        ptr++
        continue
      }
      list[ptr++] = a
    }
  }
  list.length = ptr
  return list
}

function unique(list, compare, sorted) {
  if(list.length === 0) {
    return list
  }
  if(compare) {
    if(!sorted) {
      list.sort(compare)
    }
    return unique_pred(list, compare)
  }
  if(!sorted) {
    list.sort()
  }
  return unique_eq(list)
}

module.exports = unique

},{}],2:[function(require,module,exports){
module.exports.level00 =
[
  {
    time : 100,
    enemies:
      [
        {
          posX:300,
          posY:300,
          velX:200,
          velY:0,
          life:100,
          sprite:'enemy',
          damag:30,
          coolDown:500,
          bulletSprite:'shoot',
          patron:
            {
              tipo:"Wave",
              scope:90.0,
              nProj:5
              }
            }
          ]
      },
      {
        time : 100,
        enemies:
          [
            {
              posX:300,
              posY:300,
              velX:200,
              velY:0,
              life:100,
              sprite:'enemy',
              damag:30,
              coolDown:500,
              bulletSprite:'shoot',
              patron:
                {
                  tipo:"Wave",
                  scope:90.0,
                  nProj:5
                  }
                }
              ]
          }
        ]

},{}],3:[function(require,module,exports){
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

},{"../data/level00.js":2}],4:[function(require,module,exports){
const Projectile = require('./Projectile.js');


var Player = function (state, game, x, y, health, coolDown, bulletSprite) {
	Phaser.Sprite.call(this, game, x, y, 'player');
	this.health = health || 1000;
	this.anchor.set( 0.5, 0.5);
	this.coolDown = coolDown;
	this.bulletSpeed = 60;
	this.game = game;
	this.bulletSprite = bulletSprite;
	this.state = state;	
	this.game.physics.enable(this);
	this.canShoot = true;
};

Player.prototype = Object.create(Phaser.Sprite.prototype);
Player.prototype.constructor = Player;


Player.prototype.setCanShoot = function(value){
	this.canShoot = value;
}
Player.prototype.damage = function(dmg) {
	if (this.alive && this.health > 0){
		this.health -= dmg;
		console.log(this.health)
		if (this.health <= 0)
			this.kill();
	}
	
};
Player.prototype.move = function (x, y) {
	this.x = x;
	this.y = y;
};
Player.prototype.kill = function() {
	// TODO
	console.log("Muerto")
};
Player.prototype.shoot = function() {
	if (this.canShoot){
		this.canShoot = false;
		this.game.time.events.add(this.coolDown, this.setCanShoot, this, true);
		this.createBullet();
	}
};
Player.prototype.createBullet = function() {
	let bullet = new Projectile(
		this.state, this.game, this.x, this.y - this.height/2,
		 0, -this.bulletSpeed,
		  this.damage, false, this.shootSprite
		  );
	this.game.add.existing(bullet);
	this.state.playerBullets.push(bullet);

};

module.exports = Player;

},{"./Projectile.js":5}],5:[function(require,module,exports){
var Projectile = function (state, game, posX, posY, velX, velY, damage, enemybullet, sprite) {
	Phaser.Sprite.call(this, game, posX, posY, sprite);

	this.game = game;
	this.state = state;
	this.enemybullet = enemybullet;
	this.game.physics.enable(this);
	this.body.velocity.setTo(velX, velY);
	this.anchor.setTo(0.5, 0.5);

	this.damage = damage;
	this.checkWorldBounds = true;
	//this.outOfBoundsKill  = true; don't know if we should use it as we have to pop out this from the bullet array
	this.onOffWorld = function(){
		this.enemybullet ?
			this.state.enemyBullets.splice(this.state.enemyBullets.indexOf(this), 1):
			this.state.playerBullets.splice(this.state.playerBullets.indexOf(this), 1);
		this.kill();
	}
	this.events.onOutOfBounds.add(this.onOffWorld, this);
}

Projectile.prototype = Object.create(Phaser.Sprite.prototype);
Projectile.prototype.constructor = Projectile;


module.exports = Projectile;	


},{}],6:[function(require,module,exports){
'use strict';

var PlayScene = require('./play_scene.js');

/////////////////
var unique = require('uniq');

var data = [1, 2, 2, 3, 4, 5, 5, 5, 6];

console.log(unique(data));
/////////////////

var BootScene = {
  preload: function () {

    //Web page
    this.game.load.baseURL = 'https://roberinside.github.io/SeriousWagon/src/';
    this.game.load.crossOrigin = 'anonymous';

    // load here assets required for the loading screen
     this.game.load.image('button', 'images/button.png');
     this.game.load.image('menuBg', 'images/menuBg.jpg');
  },

  create: function () {
    this.game.state.start('menu');
  }
};


var PreloaderScene = {
  preload: function () {
    this.loadingBar = this.game.add.sprite(0, 240, 'preloader_bar');
    this.loadingBar.anchor.setTo(0, 0.5);
    this.load.setPreloadSprite(this.loadingBar);

    // TODO: load here the assets for the game
    this.game.load.image('bg', 'images/background.png');

    this.game.load.image('player', 'images/player.png');
    this.game.load.image('enemy', 'images/enemy.png');
    this.game.load.image('enemy1', 'images/enemy1.png');
    this.game.load.image('enemy2', 'images/enemy2.png');
    this.game.load.image('enemy3', 'images/enemy3.png');
    this.game.load.image('enemy4', 'images/enemy4.png');
    this.game.load.image('boss1', 'images/Boss1.png');
    this.game.load.image('boss2', 'images/Boss2.png');
    this.game.load.image('boss3', 'images/Boss3.png');
    this.game.load.image('boss4_1', 'images/Boss4_1.png');
    this.game.load.image('boss4_2', 'images/Boss4_2.png');
    this.game.load.image('player_shoot', 'images/player_shoot.png');
    this.game.load.image('enemy_shoot', 'images/enemy_shoot.png');
    this.game.load.image('boss1_shoot', 'images/Boss1_shoot.png');
    this.game.load.image('boss2_shoot', 'images/Boss2_shoot.png');
    this.game.load.image('boss3_shoot', 'images/Boss3_shoot.png');
    this.game.load.image('boss4_1_shoot', 'images/Boss4_1_shoot.png');
    this.game.load.image('boss4_2_shoot', 'images/Boss4_2_shoot.png');

  },

  create: function () {
    this.game.state.start('play');
  }
};

/*var PauseScene = {
  preload: function(){
    this.game.load.image('button', 'images/button.png');

  },

  create: function(){

//this.game.state.start('pause');
    var key = game.input.keyboard.addKey(Phaser.keyboard.ESC);
    key.onDown.add(pauseMenu, this);

  },

  pauseMenu: function() {

     var button = game.add.button(game.world.centerX, game.world.centerY, 'button',
     actionOnClick, this, 2, 1, 0);
  },
  actionOnClick: function() {

    button != button;

  },
};*/
var MenuScene = {
preload: function(){

  this.game.load.image('preloader_bar', 'images/preloader_bar.png');


 this.menuBg = this.game.add.sprite(
      this.game.world.centerX, this.game.world.centerY, 'menuBg'
    );
  this.menuBg.anchor.setTo(0.5, 0.5);

},
start: function(){

      this.game.state.start('preloader');
},

create: function(){

    var button = this.game.add.button(this.game.world.centerX - 150,
      this.game.world.centerY, 'button',this.start, this, 0, 0, 0);

},


};

window.onload = function () {

  var game = new Phaser.Game(window.innerWidth, window.innerHeight, Phaser.AUTO, 'game');

  game.state.add('boot', BootScene);
  game.state.add('preloader', PreloaderScene);
  game.state.add('play', PlayScene);
  game.state.add('menu', MenuScene);
  //game.state.add('pause', PauseScene);

  game.state.start('boot');
};

},{"./play_scene.js":7,"uniq":1}],7:[function(require,module,exports){
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

},{"./LevelManager.js":3,"./Player.js":4}]},{},[6]);
