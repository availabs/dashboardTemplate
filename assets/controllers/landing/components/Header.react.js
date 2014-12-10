var React = require('react');

var Message = React.createClass({
	render:function(){
		return (
			<li role="presentation">
		        <a href="#" className="message">
		            <img src={this.props.data.sender.img} alt="" />
		            <div className="details">
		                <div className="sender">{this.props.data.sender.name}</div>
		                <div className="text">
		                    {this.props.data.text}
		                </div>
		            </div>
		        </a>
		    </li>
		)
	}
})

var MessagesMenu = React.createClass({
	getDefaultProps: function() {
      return {
        messages: [{sender:{name:'Alex Muro',img:''},text:'Hey, John! How is it going? ...'}], 
      };
    },
	render: function(){
		var messages = this.props.messages.map(function(message){
			return (
				<Message data={message} />
			);
		});

		return (
			 <li className="dropdown">
                <a href="#" title="Messages" id="messages" className="dropdown-toggle" data-toggle="dropdown" aria-expanded="false">
                    <i className="fa fa-comments"></i>
                </a>
                <ul id="messages-menu" className="dropdown-menu messages" role="menu">
	                {messages}
	                <li role="presentation">
	                    <a href="#" className="text-align-center see-all">
	                        See all messages <i className="fa fa-arrow-right"></i>
	                    </a>
	                </li>
                </ul>
            </li>
		)
	}
});

var MenuSearch = React.createClass({
	render:function(){
		return (
			<li className="visible-phone-landscape">
                <a href="#" id="search-toggle">
                    <i class="fa fa-search"></i>
                </a>
            </li>
		)
	}
})


var Header = React.createClass({

  render: function() {
    return (
    	<header className="page-header">
    		<div className="navbar">
        		<ul className="nav navbar-nav navbar-right pull-right">
        			<MessagesMenu />
        			<li className="hidden-xs dropdown">
                        <a href="#" title="Account" id="account" className="dropdown-toggle" data-toggle="dropdown" aria-expanded="false">
                            <i className="fa fa-user"></i>
                        </a>
                        <ul id="account-menu" className="dropdown-menu account" role="menu">
                            <li role="presentation" className="account-picture">
                                <img src="img/2.jpg" alt="" />
                                Philip Daineka
                            </li>
                            <li role="presentation">
                                <a href="form_account.html" className="link">
                                    <i className="fa fa-user"></i>
                                    Profile
                                </a>
                            </li>
                            <li role="presentation">
                                <a href="component_calendar.html" className="link">
                                    <i className="fa fa-calendar"></i>
                                    Calendar
                                </a>
                            </li>
                            <li role="presentation">
                                <a href="#" className="link">
                                    <i className="fa fa-inbox"></i>
                                    Inbox
                                </a>
                            </li>
                        </ul>
                    </li>
        			<li className="visible-xs">
                        <a href="#" className="btn-navbar" data-toggle="collapse" data-target=".sidebar" title="">
                            <i className="fa fa-bars"></i>
                        </a>
                    </li>
                    <li className="hidden-xs"><a href="login.html"><i className="fa fa-sign-out"></i></a></li>
                </ul>
            </div>
    	</header>
    );
  }
});

module.exports = Header;
