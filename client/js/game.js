var messageContainer = document.querySelector('#message');
var characterContainer = document.querySelector('.characters');
var roomContainer = document.querySelector('.rooms');

function Game () {
  
  var game = this;
  
  var started = false;
  
  var lastChoice;
  
  var config = {
    characters: require('./config/characters'),
    phobias:    require('./config/phobias'),
    rooms:      require('./config/rooms')
  };
  
  var templates = {
    character: require('../templates/character.hbs'),
    room:      require('../templates/room.hbs')
  };
  
  var sheet = {};
  
  var players = {};

  var socket = new WebSocket('ws://' + window.location.hostname + ':1234');

      socket.onopen = function () {
        console.log('Socket is open');
      };
      
      socket.onmessage = function (msg) {
        var data = JSON.parse(msg.data);
  
        console.log(data.event);
  
        switch (data.event) {
        
          case 'message':
            messageContainer.innerHTML = data.content;
            break;

          case 'private:sheet':
            sheet = data.sheet;
            characterContainer.innerHTML += templates.character(sheet);
            break;

          case 'new:player':
            console.log('A new player has entered the game', data);
            players[data.id] = { genre: data.genre, img: data.img };
            break;

          case 'change:name':
            console.log('Player changed name', data.name);
            players[data.id].name = data.name;
            console.log(players[data.id].name);
            
            var el = document.createElement('div');
                el.innerHTML = templates.character(players[data.id]);

            characterContainer.appendChild(el);
            break;
            
          case 'game:start':
            console.log('Game started');
            
            if (!started) {
              started = true;
              characterContainer.classList.add('aside');
  
              var roomText = config.rooms[0];
                  roomText.replace('<avatar>', data.playerName);
              
              var el = document.createElement('div');
                  el.innerHTML = templates.room({ content: roomText });
                  
                  roomContainer.appendChild(el);
              
              var choice = el.querySelector('.choice');
              lastChoice = choice;
              choice.selectedIndex = -1;
              choice.addEventListener('change', function (event) {
                socket.send(JSON.stringify({
                  event: 'choice',
                  choice: event.target.value,
                  index: choice.selectedIndex
                }));
                console.log('index', index);
              });
            }
            
            break;
            
          case 'nextRoom': 

            if (lastChoice) {
              lastChoice.selectedIndex = data.choiceIndex;
            }

            var el = document.createElement('div');
                el.innerHTML = templates.room({ content: config.rooms[data.room] });
                
                roomContainer.appendChild(el);
            
            var choice = el.querySelector('.choice');
            if (choice) {
              lastChoice = choice;
              choice.selectedIndex = -1;
              choice.addEventListener('change', function (event) {
                socket.send(JSON.stringify({
                  event: 'choice',
                  choice: event.target.value,
                  index: choice.selectedIndex
                }));
                console.log('index', index);
              });
            }

            break;
        }
      }
  
  this.setName = function (name) {
    console.log('setName');
    socket.send(JSON.stringify({
      event: 'change:name',
      name: name
    }));
  }
  
}

window.game = new Game();


//Game.actions = {
//  
//  newChar: function (form) {
//    console.log(form.querySelector('.charname').value);
//    
//    return false;
//  },
//  
//  animateCards: function () {
//    var animatedCards = document.querySelectorAll('.animated');
//    
//    for (var i = 0; i < animatedCards.length; i++) {
//      var card = animatedCards[i];
//      
//      card.style.webkitTransform = 'rotate(' + Math.ceil(Math.random() * 3 - 1.5) + 'deg)';
//      card.style.opacity = 1;
//      card.style.right = 0;
//    }
//  }
//}
//
// Generate character cards
//
//var characterContainer = document.querySelector('.characters');
//
//Game.config.characters.forEach(function (character) {
//  characterContainer.innerHTML += Handlebars.template(Game.templates.character)(character);
//});
//
// Socket
