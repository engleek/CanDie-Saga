(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
module.exports = [
  {
    genre: 'Nain',
    img: 'avatar_nain.jpg',
    attributes: [
      'petit',
      'bagarreur',
      'avare',
      'forte odeur de pieds'
    ]
  },
  {
    genre: 'Hipster',
    img: 'avatar_hipster.jpg',
    attributes: [
      'blasé/cynique',
      'bottes Arena vintage',
      'chemise chaude vintage',
      'power of grunge'
    ]
  },
  {
    genre: 'Micro-ondes',
    img: 'avatar_robot.jpg',
    attributes: [
      'Biiips expressifs',
      'Coeur d\'acier',
      'Toujours à l\'heure'
    ]
  },
  {
    genre: 'Philosophe',
    img: 'avatar_philosophe.jpg',
    attributes: [
      'Aime les livres',
      'Fan de Schopenhauer et Kierkegaard',
      'Pacifiste',
      'Ennui puissant'
    ]
  },
  {
    genre: 'Pirate',
    img: 'avatar_pirate.jpg',
    attributes: [
      'Cache oeil',
      'Jambe de bois',
      'Résistant à l\'alcool',
      'Addicte au YoHo!'
    ]
  },
  {
    genre: 'Chat',
    img: 'avatar_chat.jpg',
    attributes: [
      'Nonchalant',
      'N\'aime pas l\'eau',
      'Crâche des puissantes boules de poils',
      'Doux & mignon'
    ]
  },
  {
    genre: 'Elfe',
    img: 'avatar_elfe.jpg',
    attributes: [
      'Nictalope',
      'Prétecieux',
      'Compétence en tir à l\'arc'
    ]
  },
  {
    genre: 'Vendeur Informatique',
    img: 'avatar_vendeur.jpg',
    attributes: [
      'Apple fan',
      'Bonimenteur',
      'Énorme ambition professionnelle'
    ]
  }
];
},{}],2:[function(require,module,exports){
module.exports = [
  {
    name: 'Ailurophobe',
    meaning: 'Chats',
    img: 'phobie_chat.jpg'
  }, {
    name: 'Coulrophobe',
    meaning: 'Clowns',
    img: 'phobie_constipation.jpg'
  }, {
    name: 'Apopathodiaphulatophobe',
    meaning: 'Être constipé',
    img: 'phobie_constipation.jpg'
  }, {
    name: 'Phasmophobe',
    meaning: 'Fantômes',
    img: 'phobie_fantome.jpg'
  }, {
    name: 'Pyrophobe',
    meaning: 'Feu',
    img: 'phobie_feu.jpg'
  }, {
    name: 'Myrmécophobe',
    meaning: 'Fourmis',
    img: 'phobie_fourmis.jpg'
  }, {
    name: 'Agoraphobe',
    meaning: 'Grands espaces et foules',
    img: 'phobie_grand_espace.jpg'
  }, {
    name: 'Papyruquantitatophobe',
    meaning: 'Logique administrative',
    img: 'phobie_administration.jpg'
  }, {
    name: 'Photophobe',
    meaning: 'Lumière vive',
    img: 'phobie_lumiere_vive.jpg'
  }, {
    name: 'Achluophobe',
    meaning: 'Noir',
    img: 'phobie_noir.jpg'
  }, {
    name: 'Claustrophobe',
    meaning: 'Petits espaces',
    img: 'phobie_petite_espace.jpg'
  }, {
    name: 'Alektorophobe',
    meaning: 'Poulets',
    img: 'phobie_poulet.jpg'
  }, {
    name: 'Pédophobe',
    meaning: 'Poupées ou enfants',
    img: 'phobie_poupee.jpg'
  }, {
    name: 'Téléphonophobe',
    meaning: 'Téléphones',
    img: 'phobie_telephone.jpg'
  }, {
    name: 'Paraskevidékatriaphobe',
    meaning: 'Vendredi 13',
    img: 'phobie_vendredi_13.jpg'
  }, {
    name: 'Velocytophobe',
    meaning: 'Vitesse',
    img: 'phobie_vitesse.jpg'
  }
];
},{}],3:[function(require,module,exports){
module.exports = {

  // Hall d'entrée
  0: "<p>Vous êtes arrivé dans le hall d'entrée du donjon. Vous ne savez pas encore vraiment pourquoi vous êtes là, et surtout avec cette équipe loufoque. Mais une chose est sûre, pas question de moisir ici.</p><p>Sur votre droite, vous constatez deux chemins. L'un semble plutôt descendre vers les profondeurs, l'autre continue à droite.</p> <p>Vous vous arrêtez déjà pour choisir d'une direction à prendre. Ne souhaitant pas attendre, <pseudo> prends la décision d'aller vers la <select class='choice'><option>gauche</option><option>droite</option></select>.</p>",
  
  1: "<p>Un peu bruyamment, vous arrivez dans la nouvelle salle. Les murs sont couverts de motifs rougeoyant et la salle semble être richement décorée. Vous restez sans voix et êtes persuadé de trouver des trésors oubliés. Rien de tout cela cependant. Mais, au centre de la pièce, on peut y voir une ancienne colonne grecque de petite taille. Sur cette dernière est posé, un téléphone d'or!</p><p><perso> s'avance de quelque pas, et le précieux objet se met à sonner.</p><p>Ni une ni deux, vous foncez vers le téléphone et vous <select class='choice'><option>décrochez le combiné</option><option>le massacrez à gros coup de poing</option><option>débranchez la prise (si ça existe dans un donjon)</option></select></p>",
  
  2: "<p>Quel étrange endroit!</p><p>C'est visiblement une chambre froide, mais il y a pourtant un blizzard terrible. Vous avancez courageusement à travers la neige. Lorsque la tempête se calme, vous constatez qu'il y a des lutins qui vous attendent. Ils vous expliquent que vous êtes à la fabrique de cadeaux du père Noël. <select class='choice'><option>Parler aux elfes</option><option>tenter de looter tout ça</option></select>.</p>"
};
},{}],4:[function(require,module,exports){
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

},{"../templates/character.hbs":5,"../templates/room.hbs":6,"./config/characters":1,"./config/phobias":2,"./config/rooms":3}],5:[function(require,module,exports){
// hbsfy compiled Handlebars template
var Handlebars = require('hbsfy/runtime');
module.exports = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, helper, functionType="function", escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  
  return "small";
  }

function program3(depth0,data) {
  
  var buffer = "", stack1, helper;
  buffer += "\n      <form>\n        <input type=\"text\" class=\"charname\" value=\"";
  if (helper = helpers.name) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.name); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\" disable/>\n      </form>\n      ";
  return buffer;
  }

function program5(depth0,data) {
  
  
  return "\n      <form onsubmit=\"var input = this.querySelector('.charname'); game.setName(input.value); input.setAttribute('disabled', true); return false;\">\n        <input type=\"text\" placeholder=\"Nom?\" class=\"charname\"/>\n      </form>\n      ";
  }

function program7(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n    <ul>\n      ";
  stack1 = helpers.each.call(depth0, (depth0 && depth0.attributes), {hash:{},inverse:self.noop,fn:self.program(8, program8, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n    </ul>\n    ";
  return buffer;
  }
function program8(depth0,data) {
  
  var buffer = "";
  buffer += "\n      <li>"
    + escapeExpression((typeof depth0 === functionType ? depth0.apply(depth0) : depth0))
    + "</li>\n      ";
  return buffer;
  }

function program10(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n    <p class='warning' title='"
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.phobia)),stack1 == null || stack1 === false ? stack1 : stack1.meaning)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "'>"
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.phobia)),stack1 == null || stack1 === false ? stack1 : stack1.name)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "<img class=\"phobia\" src=\"media/"
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.phobia)),stack1 == null || stack1 === false ? stack1 : stack1.img)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\"></p>\n    ";
  return buffer;
  }

  buffer += "  <section class=\"card character ";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.name), {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\">\n    <h2>\n      ";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.name), {hash:{},inverse:self.program(5, program5, data),fn:self.program(3, program3, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n    </h2>\n    <img class=\"avatar\" src=\"media/";
  if (helper = helpers.img) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.img); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\"/>\n    <h3>";
  if (helper = helpers.genre) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.genre); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</h3>\n    ";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.attributes), {hash:{},inverse:self.noop,fn:self.program(7, program7, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n    ";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.phobia), {hash:{},inverse:self.noop,fn:self.program(10, program10, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n  </section>";
  return buffer;
  });

},{"hbsfy/runtime":14}],6:[function(require,module,exports){
// hbsfy compiled Handlebars template
var Handlebars = require('hbsfy/runtime');
module.exports = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, helper, functionType="function";


  buffer += "<section class='card room'>\n  ";
  if (helper = helpers.content) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.content); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n</section>";
  return buffer;
  });

},{"hbsfy/runtime":14}],7:[function(require,module,exports){
"use strict";
/*globals Handlebars: true */
var base = require("./handlebars/base");

// Each of these augment the Handlebars object. No need to setup here.
// (This is done to easily share code between commonjs and browse envs)
var SafeString = require("./handlebars/safe-string")["default"];
var Exception = require("./handlebars/exception")["default"];
var Utils = require("./handlebars/utils");
var runtime = require("./handlebars/runtime");

// For compatibility and usage outside of module systems, make the Handlebars object a namespace
var create = function() {
  var hb = new base.HandlebarsEnvironment();

  Utils.extend(hb, base);
  hb.SafeString = SafeString;
  hb.Exception = Exception;
  hb.Utils = Utils;

  hb.VM = runtime;
  hb.template = function(spec) {
    return runtime.template(spec, hb);
  };

  return hb;
};

var Handlebars = create();
Handlebars.create = create;

exports["default"] = Handlebars;
},{"./handlebars/base":8,"./handlebars/exception":9,"./handlebars/runtime":10,"./handlebars/safe-string":11,"./handlebars/utils":12}],8:[function(require,module,exports){
"use strict";
var Utils = require("./utils");
var Exception = require("./exception")["default"];

var VERSION = "1.3.0";
exports.VERSION = VERSION;var COMPILER_REVISION = 4;
exports.COMPILER_REVISION = COMPILER_REVISION;
var REVISION_CHANGES = {
  1: '<= 1.0.rc.2', // 1.0.rc.2 is actually rev2 but doesn't report it
  2: '== 1.0.0-rc.3',
  3: '== 1.0.0-rc.4',
  4: '>= 1.0.0'
};
exports.REVISION_CHANGES = REVISION_CHANGES;
var isArray = Utils.isArray,
    isFunction = Utils.isFunction,
    toString = Utils.toString,
    objectType = '[object Object]';

function HandlebarsEnvironment(helpers, partials) {
  this.helpers = helpers || {};
  this.partials = partials || {};

  registerDefaultHelpers(this);
}

exports.HandlebarsEnvironment = HandlebarsEnvironment;HandlebarsEnvironment.prototype = {
  constructor: HandlebarsEnvironment,

  logger: logger,
  log: log,

  registerHelper: function(name, fn, inverse) {
    if (toString.call(name) === objectType) {
      if (inverse || fn) { throw new Exception('Arg not supported with multiple helpers'); }
      Utils.extend(this.helpers, name);
    } else {
      if (inverse) { fn.not = inverse; }
      this.helpers[name] = fn;
    }
  },

  registerPartial: function(name, str) {
    if (toString.call(name) === objectType) {
      Utils.extend(this.partials,  name);
    } else {
      this.partials[name] = str;
    }
  }
};

function registerDefaultHelpers(instance) {
  instance.registerHelper('helperMissing', function(arg) {
    if(arguments.length === 2) {
      return undefined;
    } else {
      throw new Exception("Missing helper: '" + arg + "'");
    }
  });

  instance.registerHelper('blockHelperMissing', function(context, options) {
    var inverse = options.inverse || function() {}, fn = options.fn;

    if (isFunction(context)) { context = context.call(this); }

    if(context === true) {
      return fn(this);
    } else if(context === false || context == null) {
      return inverse(this);
    } else if (isArray(context)) {
      if(context.length > 0) {
        return instance.helpers.each(context, options);
      } else {
        return inverse(this);
      }
    } else {
      return fn(context);
    }
  });

  instance.registerHelper('each', function(context, options) {
    var fn = options.fn, inverse = options.inverse;
    var i = 0, ret = "", data;

    if (isFunction(context)) { context = context.call(this); }

    if (options.data) {
      data = createFrame(options.data);
    }

    if(context && typeof context === 'object') {
      if (isArray(context)) {
        for(var j = context.length; i<j; i++) {
          if (data) {
            data.index = i;
            data.first = (i === 0);
            data.last  = (i === (context.length-1));
          }
          ret = ret + fn(context[i], { data: data });
        }
      } else {
        for(var key in context) {
          if(context.hasOwnProperty(key)) {
            if(data) { 
              data.key = key; 
              data.index = i;
              data.first = (i === 0);
            }
            ret = ret + fn(context[key], {data: data});
            i++;
          }
        }
      }
    }

    if(i === 0){
      ret = inverse(this);
    }

    return ret;
  });

  instance.registerHelper('if', function(conditional, options) {
    if (isFunction(conditional)) { conditional = conditional.call(this); }

    // Default behavior is to render the positive path if the value is truthy and not empty.
    // The `includeZero` option may be set to treat the condtional as purely not empty based on the
    // behavior of isEmpty. Effectively this determines if 0 is handled by the positive path or negative.
    if ((!options.hash.includeZero && !conditional) || Utils.isEmpty(conditional)) {
      return options.inverse(this);
    } else {
      return options.fn(this);
    }
  });

  instance.registerHelper('unless', function(conditional, options) {
    return instance.helpers['if'].call(this, conditional, {fn: options.inverse, inverse: options.fn, hash: options.hash});
  });

  instance.registerHelper('with', function(context, options) {
    if (isFunction(context)) { context = context.call(this); }

    if (!Utils.isEmpty(context)) return options.fn(context);
  });

  instance.registerHelper('log', function(context, options) {
    var level = options.data && options.data.level != null ? parseInt(options.data.level, 10) : 1;
    instance.log(level, context);
  });
}

var logger = {
  methodMap: { 0: 'debug', 1: 'info', 2: 'warn', 3: 'error' },

  // State enum
  DEBUG: 0,
  INFO: 1,
  WARN: 2,
  ERROR: 3,
  level: 3,

  // can be overridden in the host environment
  log: function(level, obj) {
    if (logger.level <= level) {
      var method = logger.methodMap[level];
      if (typeof console !== 'undefined' && console[method]) {
        console[method].call(console, obj);
      }
    }
  }
};
exports.logger = logger;
function log(level, obj) { logger.log(level, obj); }

exports.log = log;var createFrame = function(object) {
  var obj = {};
  Utils.extend(obj, object);
  return obj;
};
exports.createFrame = createFrame;
},{"./exception":9,"./utils":12}],9:[function(require,module,exports){
"use strict";

var errorProps = ['description', 'fileName', 'lineNumber', 'message', 'name', 'number', 'stack'];

function Exception(message, node) {
  var line;
  if (node && node.firstLine) {
    line = node.firstLine;

    message += ' - ' + line + ':' + node.firstColumn;
  }

  var tmp = Error.prototype.constructor.call(this, message);

  // Unfortunately errors are not enumerable in Chrome (at least), so `for prop in tmp` doesn't work.
  for (var idx = 0; idx < errorProps.length; idx++) {
    this[errorProps[idx]] = tmp[errorProps[idx]];
  }

  if (line) {
    this.lineNumber = line;
    this.column = node.firstColumn;
  }
}

Exception.prototype = new Error();

exports["default"] = Exception;
},{}],10:[function(require,module,exports){
"use strict";
var Utils = require("./utils");
var Exception = require("./exception")["default"];
var COMPILER_REVISION = require("./base").COMPILER_REVISION;
var REVISION_CHANGES = require("./base").REVISION_CHANGES;

function checkRevision(compilerInfo) {
  var compilerRevision = compilerInfo && compilerInfo[0] || 1,
      currentRevision = COMPILER_REVISION;

  if (compilerRevision !== currentRevision) {
    if (compilerRevision < currentRevision) {
      var runtimeVersions = REVISION_CHANGES[currentRevision],
          compilerVersions = REVISION_CHANGES[compilerRevision];
      throw new Exception("Template was precompiled with an older version of Handlebars than the current runtime. "+
            "Please update your precompiler to a newer version ("+runtimeVersions+") or downgrade your runtime to an older version ("+compilerVersions+").");
    } else {
      // Use the embedded version info since the runtime doesn't know about this revision yet
      throw new Exception("Template was precompiled with a newer version of Handlebars than the current runtime. "+
            "Please update your runtime to a newer version ("+compilerInfo[1]+").");
    }
  }
}

exports.checkRevision = checkRevision;// TODO: Remove this line and break up compilePartial

function template(templateSpec, env) {
  if (!env) {
    throw new Exception("No environment passed to template");
  }

  // Note: Using env.VM references rather than local var references throughout this section to allow
  // for external users to override these as psuedo-supported APIs.
  var invokePartialWrapper = function(partial, name, context, helpers, partials, data) {
    var result = env.VM.invokePartial.apply(this, arguments);
    if (result != null) { return result; }

    if (env.compile) {
      var options = { helpers: helpers, partials: partials, data: data };
      partials[name] = env.compile(partial, { data: data !== undefined }, env);
      return partials[name](context, options);
    } else {
      throw new Exception("The partial " + name + " could not be compiled when running in runtime-only mode");
    }
  };

  // Just add water
  var container = {
    escapeExpression: Utils.escapeExpression,
    invokePartial: invokePartialWrapper,
    programs: [],
    program: function(i, fn, data) {
      var programWrapper = this.programs[i];
      if(data) {
        programWrapper = program(i, fn, data);
      } else if (!programWrapper) {
        programWrapper = this.programs[i] = program(i, fn);
      }
      return programWrapper;
    },
    merge: function(param, common) {
      var ret = param || common;

      if (param && common && (param !== common)) {
        ret = {};
        Utils.extend(ret, common);
        Utils.extend(ret, param);
      }
      return ret;
    },
    programWithDepth: env.VM.programWithDepth,
    noop: env.VM.noop,
    compilerInfo: null
  };

  return function(context, options) {
    options = options || {};
    var namespace = options.partial ? options : env,
        helpers,
        partials;

    if (!options.partial) {
      helpers = options.helpers;
      partials = options.partials;
    }
    var result = templateSpec.call(
          container,
          namespace, context,
          helpers,
          partials,
          options.data);

    if (!options.partial) {
      env.VM.checkRevision(container.compilerInfo);
    }

    return result;
  };
}

exports.template = template;function programWithDepth(i, fn, data /*, $depth */) {
  var args = Array.prototype.slice.call(arguments, 3);

  var prog = function(context, options) {
    options = options || {};

    return fn.apply(this, [context, options.data || data].concat(args));
  };
  prog.program = i;
  prog.depth = args.length;
  return prog;
}

exports.programWithDepth = programWithDepth;function program(i, fn, data) {
  var prog = function(context, options) {
    options = options || {};

    return fn(context, options.data || data);
  };
  prog.program = i;
  prog.depth = 0;
  return prog;
}

exports.program = program;function invokePartial(partial, name, context, helpers, partials, data) {
  var options = { partial: true, helpers: helpers, partials: partials, data: data };

  if(partial === undefined) {
    throw new Exception("The partial " + name + " could not be found");
  } else if(partial instanceof Function) {
    return partial(context, options);
  }
}

exports.invokePartial = invokePartial;function noop() { return ""; }

exports.noop = noop;
},{"./base":8,"./exception":9,"./utils":12}],11:[function(require,module,exports){
"use strict";
// Build out our basic SafeString type
function SafeString(string) {
  this.string = string;
}

SafeString.prototype.toString = function() {
  return "" + this.string;
};

exports["default"] = SafeString;
},{}],12:[function(require,module,exports){
"use strict";
/*jshint -W004 */
var SafeString = require("./safe-string")["default"];

var escape = {
  "&": "&amp;",
  "<": "&lt;",
  ">": "&gt;",
  '"': "&quot;",
  "'": "&#x27;",
  "`": "&#x60;"
};

var badChars = /[&<>"'`]/g;
var possible = /[&<>"'`]/;

function escapeChar(chr) {
  return escape[chr] || "&amp;";
}

function extend(obj, value) {
  for(var key in value) {
    if(Object.prototype.hasOwnProperty.call(value, key)) {
      obj[key] = value[key];
    }
  }
}

exports.extend = extend;var toString = Object.prototype.toString;
exports.toString = toString;
// Sourced from lodash
// https://github.com/bestiejs/lodash/blob/master/LICENSE.txt
var isFunction = function(value) {
  return typeof value === 'function';
};
// fallback for older versions of Chrome and Safari
if (isFunction(/x/)) {
  isFunction = function(value) {
    return typeof value === 'function' && toString.call(value) === '[object Function]';
  };
}
var isFunction;
exports.isFunction = isFunction;
var isArray = Array.isArray || function(value) {
  return (value && typeof value === 'object') ? toString.call(value) === '[object Array]' : false;
};
exports.isArray = isArray;

function escapeExpression(string) {
  // don't escape SafeStrings, since they're already safe
  if (string instanceof SafeString) {
    return string.toString();
  } else if (!string && string !== 0) {
    return "";
  }

  // Force a string conversion as this will be done by the append regardless and
  // the regex test will do this transparently behind the scenes, causing issues if
  // an object's to string has escaped characters in it.
  string = "" + string;

  if(!possible.test(string)) { return string; }
  return string.replace(badChars, escapeChar);
}

exports.escapeExpression = escapeExpression;function isEmpty(value) {
  if (!value && value !== 0) {
    return true;
  } else if (isArray(value) && value.length === 0) {
    return true;
  } else {
    return false;
  }
}

exports.isEmpty = isEmpty;
},{"./safe-string":11}],13:[function(require,module,exports){
// Create a simple path alias to allow browserify to resolve
// the runtime on a supported path.
module.exports = require('./dist/cjs/handlebars.runtime');

},{"./dist/cjs/handlebars.runtime":7}],14:[function(require,module,exports){
module.exports = require("handlebars/runtime")["default"];

},{"handlebars/runtime":13}]},{},[4])