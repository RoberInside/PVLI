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
var Projectile = require('./Projectile.js')


var Enemy = function(state, game, x, y){
	Phaser.Sprite.call(this, game, 0, 0, 'enemy');
	this.game = game;
	this.game.physics.enable(this);
	this.state = state;
	this.x = x;
	this.y = y;
	this.hasShot = false;
};
Enemy.prototype = Object.create (Phaser.Sprite.prototype);
Enemy.prototype.constructor = Enemy;

Enemy.prototype.move = function() {

	if(this.x < window.innerWidth - 50 && this.y < 100){
		this.body.velocity.setTo(200, 0);
	}else if(this.x >= window.innerWidth -100 && this.y < window.innerHeight-75){
		this.body.velocity.setTo(0, 200);
	}else if(this.x >= window.innerWidth-100 && this.y >= window.innerHeight-75){
		this.body.velocity.setTo(-200, 0);
	}
	else if(this.x <= 50 && this.y >= 50){
		this.body.velocity.setTo(0, -200);
	}





};

Enemy.prototype.kill = function() {
	//TODO
};
Enemy.prototype.update = function () {
	this.move();
	this.shoot();
};
Enemy.prototype.shoot = function () {
	if (!this.hasShot){

		this.state.bullets.push(new Projectile(this.state, this.game, this.x, this.y, -5, 0));
		this.hasShot = true;

	let scope = inRadians(90);
	let initialAngle = (Math.PI - scope) /2;
	let finalAngle = initialAngle + scope;
	let nBullets = 3;
	let incr = scope / nBullets;
		for (var i = initialAngle; i < finalAngle; i+= incr)
		{
			let vx = Math.cos(i);
			let vy = Math.sin(i);
			this.createBullet(vx, vy);
		}
	this.hasShot = true;

	}
}

Enemy.prototype.createBullet = function (vx ,vy) {
	let bullet = new Projectile(this.state, this.game, this.x, this.y, vx*50, vy*50);
		this.game.add.existing(bullet);
		this.state.bullets.push(bullet);

}
function inRadians(degrees) {
	return (degrees*Math.PI/180);
}
module.exports = Enemy;
},{"./Projectile.js":4}],3:[function(require,module,exports){
var Player = function (state, game, x, y, health) {
	Phaser.Sprite.call(this, game, x, y, 'ship');
	this.health = health || 100;
	this.anchor.set( 0.5, 0.5);
	this.weapon = {};
	this.game = game;
	this.game.physics.enable(this);
	//this.setPhysics();
};

Player.prototype = Object.create(Phaser.Sprite.prototype);
Player.prototype.constructor = Player;

Player.prototype.move = function (x, y) {
	this.x = x;
	this.y = y;
};
Player.prototype.shot = function() {
	this.weapon.shoot();
};
Player.prototype.kill = function() {
	// TODO
};
Player.prototype.damage = function (dmg) {
	this.health -= dmg;
	if (this.health <= 0)
		this.kill();
};
Player.prototype.swapWaepon = function(newWeapon) {
	this.weapon = new weapon(newWeapons);
};
Player.prototype.setPhysics = function () {
	//this.body.collideWorldBounds = true;
	this.body.onWorldBounds = new Phaser.Signal();
	this.body.onWorldBounds.add(hitWorldBounds, this.state);
}
Player.prototype.hitWorldBounds = function() {
	
};

module.exports = Player;

},{}],4:[function(require,module,exports){
var Projectile = function (state, game, posX, posY, velX, velY) {
	Phaser.Sprite.call(this, game, posX, posY, 'shoot');
	this.game = game;
	this.game.physics.enable(this);

	this.x = game.world.centerX;
	this.y = this.game.world.centerY;

	this.body.velocity.setTo(velX, velY);
	this.anchor.setTo(0.5, 0.5);
	console.log('a proyectile created');
	console.log('velocity: ' + this.body.velocity)
	this.showPos = ()=>{
		console.log("Projectile vel: " + this.body.velocity);
	}

}

Projectile.prototype = Object.create(Phaser.Sprite.prototype);
Projectile.prototype.constructor = Projectile;

module.exports = Projectile;
Projectile.prototype.showPosition = function() {

	console.log('porjectile position:' + this.x + ", " + this.y+ "\n");
};
},{}],5:[function(require,module,exports){
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
    this.game.load.baseURL = 'https://RoberInside.github.io/SeriousWagon/src/';
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
    this.game.load.image('ship', 'images/ship.png');
    this.game.load.image('enemy', 'images/enemy.png');
    this.game.load.image('shoot', 'images/shoot.png');
  },

  create: function () {
    this.game.state.start('play');

    console.log('gig');
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

},{"./play_scene.js":6,"uniq":1}],6:[function(require,module,exports){
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


},{"./Enemy.js":2,"./Player.js":3}]},{},[5]);
