var WEBPORT    = 3000,
    SOCKPORT   = 1234,
    MAXPLAYERS = 4;

var ws      = require('ws'),
    express = require('express');

var Player = require('./player'),
    Game   = require('./game');

var games = {};
var gameId = 0;

var webServ = express();

    webServ.use(express.static(__dirname + '/../client'));

    webServ.get('/', function(req, res){
      res.sendfile(__dirname + '/../client/index.html');
    });
    
    webServ.listen(WEBPORT, function () {
      console.log('Web server listening on port', WEBPORT);
    });

var sockServ = new ws.Server({ port: SOCKPORT }, function () {
  console.log('Socket server listening on port', SOCKPORT); 
});

    sockServ.on('connection', function (client) {
      setupGame(client);

      client.on('message', function (msg) {
        var data = JSON.parse(msg);
        
        console.log(data.event);
        
        switch (data.event) {
          
          case 'change:name':
            client.player.setName(data.name);
            break;
          
          case 'choice':
            client.game.submitChoice(client.player, data.choice, data.index);
            break;
        }
              
      });

      client.on('close', function () {
        console.log('client left');
      });
    });
    
function setupGame (client) {
  
  var player = client.player = new Player(client);
  console.log('A new player has arrived!');
  
  if (!games[gameId]) {
    games[gameId] = new Game();
  } else if (games[gameId].full) {
    gameId++;
    games[gameId] = new Game();
  }

  games[gameId].addPlayer(player);
  
  client.game = games[gameId];  
  console.log('Added to game %s (%s/%s)', gameId, client.game.players.length, Game.MAXPLAYERS);

}