var React = require('react');

var SelectedMarker = React.createClass({

  render: function() {
    var selected = this.props.selected;
    var currNodeKey = this.props.currNodeKey;
    if (typeof selected == 'undefined') {
      return false;
    } else {
      if (selected == currNodeKey) {
        return (
          React.DOM.span({className: "selectedNode"}, ">>")
        );
      } else {
        return false
      }
    }
  }
});

module.exports = SelectedMarker;