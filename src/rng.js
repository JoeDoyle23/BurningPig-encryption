var crypto = require('crypto');

function SecureRandom() {}

SecureRandom.prototype.nextBytes = function(ba) {
      var random = crypto.randomBytes(ba.length);
      for(var i = 0; i < ba.length; ++i) 
		ba[i] = random[i];
    };
	
module.exports = SecureRandom;
