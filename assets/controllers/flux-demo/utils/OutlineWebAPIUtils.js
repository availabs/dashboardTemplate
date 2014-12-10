var OutlineServerActionCreators = require('../actions/OutlineServerActionCreators');

module.exports = {

  getAllNodes: function() {
    // simulate retrieving data from a database
    var rawNodes = JSON.parse(localStorage.getItem('nodes'));

    // simulate success callback
    OutlineServerActionCreators.receiveAll(rawNodes);
  }

};