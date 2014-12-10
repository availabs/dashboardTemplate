var App = require('./components/app.react');
var OutlineStartingData = require('./data/OutlineStartingData');
var OutlineWebAPIUtils = require('./utils/OutlineWebAPIUtils');
var React = require('react');

OutlineStartingData.init();

OutlineWebAPIUtils.getAllNodes();

React.render(
  <App />,
  document.getElementById('react')
);