/**
 * Bootstrap
 * (sails.config.bootstrap)
 *
 */

module.exports.bootstrap = function(cb) {

  // It's very important to trigger this callack method when you are finished
  // with the bootstrap!  (otherwise your server will never lift, since it's waiting on the bootstrap)
  User.count().exec(function(err,count){
  	if(err){
  		sails.log.error('Already boostrapping data');
  		return cb(err);
  	}
  	if(count > 0) return cb()
  	
  	User.create([{
  		"name":"AVAILabs",
  		"username":"avail",
		"email":"testuser@availabs.org",
		"password":"password",
		"confirmation":"password"
  	}]).exec(cb);
  
  })
};
