var OutlineStore = require('../stores/OutlineStore');
var Node = require('./node.react');

function getStateFromStores() {
  return {
    nodes: OutlineStore.getAll(),
    selected: OutlineStore.getSelected(),
  };
}

var React = require('react');

var Outline = React.createClass({

  getInitialState: function() {
    return getStateFromStores();
  },

  componentDidMount: function() {
    OutlineStore.addChangeListener(this._onChange);
  },

  render: function() {
    var rootNode = this.state.nodes;
    var selected = this.state.selected;
    return (
      <div className="outline-section">
        <Node
          key={rootNode.key}
          node={rootNode}
          selected={selected}
        />
      </div>
    );

  },

  /**
   * Event handler for 'change' events coming from the MessageStore
   */
  _onChange: function() {
    this.setState(getStateFromStores());
  }

});

module.exports = Outline;