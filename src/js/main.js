'use strict';

var PlayScene = require('./play_scene.js');


var BootScene = {
  preload: function () {
    // load here assets required for the loading screen
    this.game.load.image('preloader_bar', 'images/preloader_bar.png');
  },

  create: function () {
    this.game.state.start('preloader');
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
    this.game.load.image('shoot', 'images/shoot.png')
  },

  create: function () {
    this.game.state.start('play');
    console.log('gig');
  }
};


window.onload = function () {

  var game = new Phaser.Game(window.innerWidth, window.innerHeight, Phaser.AUTO, 'game');

  game.state.add('boot', BootScene);
  game.state.add('preloader', PreloaderScene);
  game.state.add('play', PlayScene);
  //game.state.add('menu', MenuScene);
  //game.state.add('pause', PauseScene);

  game.state.start('boot');
};
