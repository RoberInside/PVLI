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
    this.game.load.image('boos1', 'images/Boss1.png');
    this.game.load.image('boos2', 'images/Boos2.png');
    this.game.load.image('boos3', 'images/Boos3.png');
    this.game.load.image('boos4_1', 'images/Boos4_1.png');
    this.game.load.image('boos4_2', 'images/Boos4_2.png');
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
