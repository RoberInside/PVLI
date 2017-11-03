'use strict';

var PlayScene = {
  create: function () {
    var bg = this.game.add.sprite(
      this.game.world.centerX, this.game.world.centerY, 'bg'
    );
    bg.anchor.setTo(0.5, 0.5);

  	this.ship = this.game.add.sprite(
  	  this.game.world.centerX, this.game.world.centerY, 'ship'
  	);
  	this.ship.anchor.setTo(0.5, 0.5);
  },

  update: function  () {
  	var ship = this.ship;
  	console.log("Entra");
  	ship.x = this.input.mousePointer.x;
  	ship.y = this.input.mousePointer.y;
  }
  

};

module.exports = PlayScene;
