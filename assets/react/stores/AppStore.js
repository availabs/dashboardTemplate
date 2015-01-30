'use strict';
/**
 * App Store Saves Overall Application Settings 
 * So Layout Template can be reused.
 */

var AppDispatcher = require('../dispatcher/AppDispatcher');
var Constants = require('../constants/AppConstants');
var EventEmitter = require('events').EventEmitter;

var assign = require('object-assign');

var ActionTypes = Constants.ActionTypes;
var CHANGE_EVENT = 'change';

var _appSection = null;

var _menus = {
  admin:[
    {text:'Dashboard',icon:'fa fa-home',action:'one',type:'Route'},
    {text:'Page Two',icon:'glyphicon glyphicon-globe',action:'two',type:'Route'},
    {text:'User Admin',icon:'fa fa-users',action:'userAdmin',type:'Route'}         
  ],
 
}


var AppStore = assign({}, EventEmitter.prototype, {

  emitChange: function() {
    this.emit(CHANGE_EVENT);
  },
  /**
   * @param {function} callback
   */
  addChangeListener: function(callback) {
    this.on(CHANGE_EVENT, callback);
  },
  
  removeChangeListener: function(callback) {
    this.removeListener(CHANGE_EVENT, callback);
  },

  getMenu: function() {
    console.log('appstore.getmenu',_menus[_appSection])
    return _menus[_appSection];
  }

  
  

});

AppStore.dispatchToken = AppDispatcher.register(function(payload) {
  var action = payload.action;

  switch(action.type) {

    case ActionTypes.SET_APP_SECTION:
      console.log('set app section in app store')
      _appSection = action.section
      AppStore.emitChange();
    break;

    default:
      // do nothing
  }

});

module.exports = AppStore;
