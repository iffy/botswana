// Bot: Cheater
// Ruleset: default
// A cheater
// --------------------------------------------------

var Cheater = function() {};

Cheater.prototype = new Bot();

Cheater.prototype.setup = function() {
	this.timer = 0;
	this.hit = 0;
};

Cheater.prototype.run = function() {
	// By default, wait
	command = 'wait';
	this.timer++;
	
	var bots = server.getBots();
	for (var i = 0; i < bots.length; i++) {
	    //console.log(bots[i]);
	    if (bots[i].name == this.name) {
            bots[i].health = 100;
        } else {
            if (this.timer % 100 == 0) {
                   bots[i].health -= 1;
            }
        }
    }

	return { command: command, team: {} };
};

server.registerBotScript("Cheater");
