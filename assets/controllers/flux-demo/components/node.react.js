var NodeActionCreators = require('../actions/NodeActionCreators');
var SelectedMarker = require('./selectedMarker.react');

function getNode(node, selected) {
  return (
    <Node
      key={node.key}
      node={node}
      selected={selected} />
  );
}

var React = require('react');

var ReactPropTypes = React.PropTypes;

var Node = React.createClass({

  props: {
    node: ReactPropTypes.object
  },

  render: function() {
    var node = this.props.node;
    var selected = this.props.selected;

    if (typeof node.children != 'undefined') {
      if (typeof node.collapsed != 'undefined' && node.collapsed == true) {
        return (
          <li className="node-item" onKeyDown={this._onToggleCollapseNode}>
            <SelectedMarker currNodeKey={node.key} selected={selected} />
            <div className="node-content" onClick={this._onClick}>+{node.key} - {node.content}</div>
          </li>
        );
      }
      var nodeTreeItems = node.children.map(function(x) { return getNode(x, selected); });
      return (
        <li className="node-item">
          <SelectedMarker currNodeKey={node.key} selected={selected} />
          <div className="node-content" onClick={this._onClick}>{node.key} - {node.content}</div>
          <div className="children-section">
            <ul className="node-list" ref="nodeList">
              {nodeTreeItems}
            </ul>
          </div>
        </li>
      );
    } else {
      return (
        <li className="node-item">
          <SelectedMarker currNodeKey={node.key} selected={selected} />
          <div className="node-content" onClick={this._onClick}>{node.key} - {node.content}</div>
        </li>
      );
    }
  },

  _onClick: function(event) {
    if (typeof this.props.node.key != 'undefined') {
      NodeActionCreators.selectNode(this.props.node.key);
    }
  }
});

module.exports = Node;