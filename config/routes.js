/**
 * Route Mappings
 * (sails.config.routes)
 * CoffeeScript for the front-end.
 *
 * For more information on routes, check out:
 * http://links.sailsjs.org/docs/config/routes
 */

module.exports.routes = {

  //-------------------------------
  // User controller 
  //-------------------------------

  '/landing': 'LandingController.index', //Landing View
  '/': 'LandingController.flux', //Main Flux App

  //-------------------------------
  // User controller 
  //-------------------------------

  //Views
  '/login':'UserController.login',
  
  //Auth
  '/logout':'UserController.logout',
  '/login/auth':'UserController.auth',
  
};
