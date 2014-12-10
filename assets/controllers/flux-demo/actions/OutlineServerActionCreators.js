var AppDispatcher = require('../dispatcher/appDispatcher');

module.exports = {

  receiveAll: function(rawNodes) {
    AppDispatcher.handleServerAction({
      type: "RECEIVE_RAW_NODES",
      rawNodes: rawNodes
    });
  },

};