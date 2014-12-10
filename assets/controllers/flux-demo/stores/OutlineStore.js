var AppDispatcher = require('../dispatcher/appDispatcher');
var EventEmitter = require('events').EventEmitter;
var merge = require('react/lib/merge');

var CHANGE_EVENT = 'change';

var _nodes = {};
var _selected = -1;

var OutlineStore = merge(EventEmitter.prototype, {

  emitChange: function() {
    this.emit(CHANGE_EVENT);
  },

  /**
   * @param {function} callback
   */
  addChangeListener: function(callback) {
    this.on(CHANGE_EVENT, callback);
  },

  get: function(id) {
    return _nodes[id];
  },

  getAll: function() {
    return _nodes;
  },

  getSelected: function() {
    return _selected;
  }

});


OutlineStore.dispatchToken = AppDispatcher.register(function(payload) {
  var action = payload.action;

  switch(action.type) {

    case "RECEIVE_RAW_NODES":
      _nodes = action.rawNodes;
      OutlineStore.emitChange();
      break;

    case "SELECT_NODE":
      _selected = action.key;
      OutlineStore.emitChange();
      break;

    case "NEXT_VISIBLE_NODE":
      if (typeof _selected != 'undefined') {
        _selected = _selected + 1;
      }
      console.log('just simple increase:' + _selected);
      OutlineStore.emitChange();
      break;

    case "PREVIOUS_VISIBLE_NODE":
      if (typeof _selected != 'undefined') {
        _selected = _selected - 1;
      }
      console.log('just simple decrease:' + _selected);
      OutlineStore.emitChange();
      break;

    case "TOGGLE_COLLAPSE_NODE":
      _nodes.collapsed = !_nodes.collapsed;
      console.log('toggling collapse on key:' + _selected);
      OutlineStore.emitChange();
      break;

    default:
      // do nothing
  }

});

module.exports = OutlineStore;