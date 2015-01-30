'use strict';
/**
 * This file is provided by Facebook for testing and evaluation purposes
 * only. Facebook reserves all rights not expressly granted.
 *
 */

var AppDispatcher = require('../dispatcher/AppDispatcher'),
    Constants = require('../constants/AppConstants'),
    EventEmitter = require('events').EventEmitter,
    assign = require('object-assign'),

    ActionTypes = Constants.ActionTypes,
    CHANGE_EVENT = 'change';

var _editUserID = null,
    _users = {},
    _sessionUser= {};

function _addUsers(rawData) {
  //console.log('stores/UserStore/_addUsers',rawData);
  rawData.forEach(function(user) {
    
      _users[user.id] = user;
    
  });
};

function _deleteUser(id){
  //console.log('stores/userstore/deleteuser',id)
  delete _users[id];
  _editUserID = null;
}

function _setEditUserID(id){
    _editUserID = id;
};

var UserStore = assign({}, EventEmitter.prototype, {

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

  get: function(id) {
    return _users[id];
  },

  getAll: function() {
    return _users;
  },

  getEditUserId:function(){
    return _editUserID;
  },
  getSessionUser:function(){
    return _sessionUser;
  }

});

UserStore.dispatchToken = AppDispatcher.register(function(payload) {
  var action = payload.action;

  switch(action.type) {

    case ActionTypes.SET_SESSION_USER:
      _sessionUser = action.user;
      UserStore.emitChange();
    break;

    case ActionTypes.RECEIVE_USERS:
      _addUsers(action.data);
      UserStore.emitChange();
    break;

    case ActionTypes.SELECT_USER:
      _setEditUserID(action.userID);
      UserStore.emitChange();
    break;

    case ActionTypes.DELETE_USER:
      _deleteUser(action.Id);
      UserStore.emitChange();
    break;

    default:
      // do nothing
  }

});

module.exports = UserStore;
