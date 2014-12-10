//---------------------------------------
// App Controller View 
// One Per Server Side Route
// 
//---------------------------------------

//  --- Libraries
var React = require('react'),
    Router = require('react-router'),
    Route = Router.Route,
    Routes = Router.Routes,
    Redirect = Router.Redirect,
    DefaultRoute = Router.DefaultRoute,
    RouteHandler = Router.RouteHandler,
    
//  --- Layout File
    App = require('./layout.react'),

//  --- Pages
    PageOne = require('./pages/page_one.react'),
    PageTwo = require('./pages/page_two.react');


//  --- Routes 
var routes = (
  <Route name="app" path="/" handler={App}>
    <Route name="two" handler={PageTwo}/>
    <DefaultRoute handler={PageOne}/>
  </Route>
);

Router.run(routes, function (Handler) {
  React.render(<Handler/>, document.body);
});

