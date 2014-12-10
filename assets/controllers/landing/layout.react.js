var React = require('react'),
    RouteHandler = require('react-router').RouteHandler,

    // -- App Templates
    Sidebar = require('./components/Sidebar.react'),
    Logo = require('./components/Logo.react'),
    Header = require('./components/Header.react'),
    
    menu = [
        {text:'Dashboard',icon:'fa fa-home',action:'app',type:'Route'},
        {text:'Forms',icon:'fa fa-pencil',
            menuItems:[
                {text:'Account',type:'Route',action:'two'},
                {text:'Buttons'},
                {text:'Crticle'}
            ]
        },
        {text:'Statistics',icon:'fa fa-area-chart',
            menuItems:[
                {text:'Account'},
                {text:'Buttons'},
                {text:'Crticle'}
            ]
        }
    ]

var App = React.createClass({

  render: function() {
    return (
    	<div>
    		<Logo />
	    	<Sidebar menuItems={menu} />
	    	<div className="wrap">
                <Header />
	    		 <RouteHandler/>
	    	</div>
    	</div>
    );
  }
});

module.exports = App;