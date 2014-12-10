var AppDispatcher = require('../dispatcher/appDispatcher');

module.exports = {

  selectNode: function(key) {
    AppDispatcher.handleServerAction({
      type: "SELECT_NODE",
      key: key
    });
  },

  nextVisibleNode: function() {
    AppDispatcher.handleServerAction({
      type: "NEXT_VISIBLE_NODE"
    });
  },

  toggleCollapseNode: function(key) {
    AppDispatcher.handleServerAction({
      type: "TOGGLE_COLLAPSE_NODE"
    });
  },

  previousVisibleNode: function() {
    AppDispatcher.handleServerAction({
      type: "PREVIOUS_VISIBLE_NODE"
    });
  }
};