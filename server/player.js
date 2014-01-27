var util = require('util'),
    EventEmitter = require('events').EventEmitter;

function Player (client) {

  EventEmitter.call(this);
  
  this.client = client;
  this.name   = '';
  
}

util.inherits(Player, EventEmitter);

Player.prototype.setName = function (name) {
  this.name = name;

  this.client.game.broadcast(this, {
    event: 'change:name',
    name: name,
    id: this.id
  });
};

Player.prototype.setSheet = function (sheet) {
  this.sheet = sheet;
}

Player.prototype.send = function (data) {
  this.client.send(JSON.stringify(data));
};

module.exports = Player;