'use strict';
var React = require('react'),
    Link = require('react-router').Link,
    widthStyle16 = {'width': '16%'},
    widthStyle23 = {'width': '23%'};

var MenuItem = React.createClass({

    render:function(){
        if(this.props.data.menuItems){
            var menus = this.props.data.menuItems.map(function(item){
                return (
                    <MenuItem data={item} />
                )
            });

            var collapse_string = '#'+this.props.data.text+'-collapse',
                collapse_id = this.props.data.text+'-collapse';

            return (
                <li className="panel ">
                    <a className="accordion-toggle collapsed" data-toggle="collapse" data-parent="#side-nav" href={collapse_string}>
                    <i className={this.props.data.icon}></i> <span className="name">{this.props.data.text}</span></a>
                    <ul id={collapse_id} className="panel-collapse collapse ">
                        {menus}
                    </ul>
                </li>
            )
        }else{
            if(this.props.data.type === 'Route'){
                return (
                    <li>
                        <Link to={this.props.data.action}><i className={this.props.data.icon}></i> <span className="name">{this.props.data.text}</span></Link>
                    </li>
                )
            }else{
                return (
                    <li>
                        <a href={this.props.data.action}><i className={this.props.data.icon}></i> <span className="name">{this.props.data.text}</span></a>
                    </li>
                )
            }
        }
    }

})


var Sidebar = React.createClass({
    
    propTypes: {
      
      menuItems: React.PropTypes.array
    
    },
    getDefaultProps: function() {
      return {
        menuItems: [], 
      };
    },
    render: function() {
        var menus = this.props.menuItems.map(function(item){
            return (
                <MenuItem data={item} />
            )
        });

        return (
          	<nav id="sidebar" className="sidebar nav-collapse collapse">
                <ul id="side-nav" className="side-nav">
                	{menus}
            	</ul>
            </nav>
        );
    }
});

module.exports = Sidebar;




                
                
        
            