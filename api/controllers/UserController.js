/**
 * UserController
 *
 * @description :: Server-side logic for managing users
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */
var bcrypt = require('bcrypt');

module.exports = {

	admin: function(req, res, next) {

	    // Get an array of all users in the User collection(e.g. table)
	    User.find().exec(function foundUsers(err, users) {
	      if (err) return next(err);
	      // pass the array down to the /views/index.ejs page
	      getNavData(function(navData){
		      res.view({
		      	marketarea:0,
		        users: users,
		        page:'userAdmin',
		        panel:'none',
		        title:"User Admin | NJTDM",
		        nav:navData
		      });
	  	  });
	    });
	},
	auth: function(req, res, next) {

		// Check for username and password in params sent via the form, if none
		// redirect the browser back to the sign-in form.
		if (!req.param('username') || !req.param('password')) {
			// return next({err: ["Password doesn't match password confirmation."]});

			var usernamePasswordRequiredError = [{
				name: 'usernamePasswordRequired',
				message: 'You must enter both a username and password.'
			}]

			// Remember that err is the object being passed down (a.k.a. flash.err), whose value is another object with
			// the key of usernamePasswordRequiredError
			req.session.flash = {
				err: usernamePasswordRequiredError
			}

			res.redirect('/login');
			return;
		}

		// Try to find the user by there username address. 
		// findOneByusername() is a dynamic finder in that it searches the model by a particular attribute.
		// User.findOneByusername(req.param('username')).done(function(err, user) {
		User.findOneByUsername(req.param('username'), function foundUser(err, user) {
			if (err) return next(err);

			// If no user is found...
			if (!user) {
				var noAccountError = [{
					name: 'noAccount',
					message: 'The username  "' + req.param('username') + '" was not found.'
				}]
				req.session.flash = {
					err: noAccountError
				}
				res.redirect('/login');
				return;
			}

			// Compare password from the form params to the encrypted password of the user found.
			bcrypt.compare(req.param('password'), user.encryptedPassword, function(err, valid) {
				if (err) return next(err);

				// If the password from the form doesn't match the password from the database...
				if (!valid) {
					var usernamePasswordMismatchError = [{
						name: 'usernamePasswordMismatch',
						message: 'Invalid username and password combination.'
					}]
					req.session.flash = {
						err: usernamePasswordMismatchError
					}
					res.redirect('/login');
					return;
				}

				// Log user in
				req.session.authenticated = true;
				req.session.User = user;

				// Change status to online
				user.online = true;
				user.save(function(err, user) {
					if (err) return next(err);

					// Inform other sockets (e.g. connected sockets that are subscribed) that this user is now logged in
					User.publishUpdate(user.id, {
						loggedIn: true,
						id: user.id,
						name: user.name,
						action: ' has logged in.'
					});

					//Redirect to their profile page (e.g. /views/user/show.ejs)
					res.redirect('/');
				});
			});
		});
	},
	logout: function(req, res, next) {

		User.findOne(req.session.User.id, function foundUser(err, user) {

			var userId = req.session.User.id;

			if (user) {
				// The user is "logging out" (e.g. destroying the session) so change the online attribute to false.
				User.update(userId, {
					online: false
				}, function(err) {
					if (err) return next(err);

					// Inform other sockets (e.g. connected sockets that are subscribed) that the session for this user has ended.
					User.publishUpdate(userId, {
						loggedIn: false,
						id: userId,
						name: user.name,
						action: ' has logged out.'
					});

					// Wipe out the session (log out)
					req.session.destroy();

					// Redirect the browser to the sign-in screen
					res.redirect('/login');
				});
			} else {

				// Wipe out the session (log out)
				req.session.destroy();

				// Redirect the browser to the sign-in screen
				res.redirect('/login');
			}
		});
	},
	login:function(req,res){
		res.view();
	}
	
};
