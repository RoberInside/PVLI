/*Ir descomentando conforme se vayan implementando*/
const Enemy = require('./Enemy.js');

const level01 = require('../data/level01.js');
//const level02 = require('../data/level02.js');
//const level03 = require('../data/level03.js');
//const level04 = require('../data/level04.js');

const LEVELS = [level01/*, level02, level03, level04*/];

function LevelManager(ps/*stands for playScene*/) {
	this.level = [];
	this.levelIndex = 0;
	this.currentInstant = 0;
	this.instanciateEnemys = function(){
		var currentInstant = this.currentInstant;//save the current instant
		this.addNextInstant();//add the next callback

		for(e of level[currentInstant].enemies){
			ps.enemies.add(new Enemy (ps, e));
		}
	}
	this.addNextInstant = function () {
		ps.game.time.events.add(level[this.currentInstant].time + ps.timer.totalElapsedSeconds(), this.instanciateEnemys(), this);
		if (this.currentInstant < this.level.lenght -1)
			this.currentInstant++;	
	};
	this.init = function(){
		level = level01;
		addNextInstant();
	}
	this.nextLevel = function(){
		level = LEVELS[this.levelIndex];
		addNextInstant();
	}






}
module.exports = LevelManager;