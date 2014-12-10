var Outline = require('./outline.react');
var NodeActionCreators = require('../actions/NodeActionCreators');
var React = require('react');
var key = require('keymaster');

var App = React.createClass({

  componentDidMount: function() {
    key('j', function() {
      NodeActionCreators.nextVisibleNode();
    });

    key('k', function() {
      NodeActionCreators.previousVisibleNode();
    });

    key('space', function() {
      NodeActionCreators.toggleCollapseNode();
    });

  },

  render: function() {
    return (
      <div className="outlineapp">
        <Outline />
      </div>
    );
  }

});

module.exports = App;