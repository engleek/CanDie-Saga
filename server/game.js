var util = require('util'),
    EventEmitter = require('events').EventEmitter;

var characters = require('../client/js/config/characters');
var phobias    = require('../client/js/config/phobias');

//+ Jonas Raoni Soares Silva
//@ http://jsfromhell.com/array/shuffle [v1.0]
function shuffle(o){ //v1.0
    for(var j, x, i = o.length; i; j = Math.floor(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
    return o;
};

function Game () {

  EventEmitter.call(this);

  this.players     = [];
  this.full        = false;
  this.currentRoom = 0;
  this.roomList    = [1, 2];
  this.currentTurn = 0;
  
  characters = shuffle(characters);
  phobias    = shuffle(phobias);
  
  this.availableSheets = [];
  for (var i = 0; i < 4; i++) {
    console.log(i);
    this.availableSheets.push(characters[i]);
    this.availableSheets[i].phobia = phobias[i];
  }
    
}

util.inherits(Game, EventEmitter);

Game.MAXPLAYERS = 4;

Game.prototype.broadcast = function (source, data) {
  
  this.players.forEach(function (player, index) {
    if (player != source && player.client.readyState == 1) { // is socket still open?
      player.send(data);
    }
  });
};

Game.prototype.addPlayer = function (player) {  

  if (this.full) return;
  
  this.players.forEach(function (otherPlayer, index) {
    console.log(player.sheet);
    player.send({
      event: 'new:player',
      id: index,
      img: otherPlayer.sheet.img,
      genre: otherPlayer.sheet.genre
    });
  });

  this.players.push(player);

  player.id    = this.players.length -1;  
  player.sheet = this.availableSheets.pop();
  
  player.send({
    event: 'private:sheet',
    sheet: player.sheet
  });
    
  this.broadcast(player, {
    event: 'new:player',
    id: this.players.length - 1,
    genre: player.sheet.genre,
    img: player.sheet.img
  });
  
  if (this.players.length == Game.MAXPLAYERS) {
    this.full = true;
  }
  
  if (this.players.length > 1) {

    this.broadcastMessage('Début du jeu dans 10 secondes!');

    // Launch timeout
    (function (game) {
      var seconds = 10;
      var countdown = setInterval(function () { 
        game.broadcastMessage('Début du jeu dans ' + (--seconds) + ' secondes…');
      }, 1000);

      setTimeout(function () {
        clearInterval(countdown);
        game.start();
        game.broadcastMessage('L\'aventure commence!');
      }, 10 * 1000);
    })(this);
  }
};

Game.prototype.broadcastMessage = function (msg) {
  this.broadcast(null, {
    event: 'message',
    content: msg
  });
};

Game.prototype.start = function () {
  this.full = true;
  this.broadcastMessage('Premier tour!');
//  this.broadcastMessage('Premier tour, ' + this.players[this.currentTurn].name + '!');
  this.broadcast(null, {
    event: 'game:start',
    turn: this.players[this.currentTurn].id,
    playerName: this.players[this.currentTurn].name
  });
};

Game.prototype.submitChoice = function (player, choice, index) {

  console.log('choice submitted', index);
  
  if (player == this.players[this.currentTurn]) {
  
    console.log('choice accepted');
    
    this.currentRoom = this.roomList.splice(Math.floor(Math.random() * this.roomList.length), 1);
  
    this.currentTurn = (this.currentTurn < this.players.length - 1) ? this.currentTurn + 1 : 0;
  
    this.broadcast(null, {
      event: 'nextRoom',
      room: this.currentRoom,
      choiceIndex: index,
      turn: this.players[this.currentTurn].id,
      playerName: this.players[this.currentTurn].name
    });
  
    this.broadcastMessage('Au tour de ' + this.players[this.currentTurn].name + '!');
    
  } else {
    player.send({ event: 'message', content: 'Attends ton tour!' });
  }
  
};

module.exports = Game;