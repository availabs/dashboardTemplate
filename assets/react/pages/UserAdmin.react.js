'use strict';

var React = require('react'),
    
    // -- Components 
    WidgetHeader = require('../components/WidgetHeader.react'),
    UserTable = require('../components/user/UserTable.react'),
    UserForm = require('../components/user/UserForm.react'),
    
    // -- Stores
    UserStore = require('../stores/UserStore');

    // -- Misc
var panelData = [
    {
      title:"Create Account",
      name:'createAccount',
      expanded:'true',
      formData:{
        buttonText:'Create Account',
        formType:'create'
      }
    },
    {
      title:"Edit Account",
      name:'editAccount',
      expanded:'false',
      formData:{
        buttonText:'Upadate Account',
        formType:'update'
      }
    }
];


function getStateFromStores(){
    return {
        users: UserStore.getAll(),
        editUser: UserStore.getEditUserId()
    }
};


var AccordianPanel = React.createClass({
    render: function(){
    
        var id = '#'+this.props.data.name;
        var display = 'panel-collapse collapse ';
        
        if(this.props.data.expanded == 'true'){
            display += 'in';
        }

        return (
            <div className="panel">
                <div className="panel-heading">
                    <a className="accordion-toggle" data-toggle="collapse" data-parent="#accordion2" href={id} aria-expanded={this.props.data.expanded}>
                        {this.props.data.title}
                    </a>
                </div>

                <div id={this.props.data.name} className={display} aria-expanded={this.props.data.expanded}>
                    <div className="panel-body">
                        <UserForm data={this.props.data.formData} />
                    </div>
                </div>
            </div>
        )
    }
})


var EditAccordian = React.createClass({
    
    render: function(){

        var panels = this.props.panelData.map(function(panel,i){
            return (
                <AccordianPanel key={i} data={panel} />
            )
        })
        return(
            <div className="panel-group" id="accordion2">
                {panels}
            </div>
        )

    }
});



var UserPage = React.createClass({

    getInitialState: function() {
        return getStateFromStores();
    },
    
    componentDidMount: function() {
        UserStore.addChangeListener(this._onChange);
    },

    componentWillUnmount: function() {
        UserStore.removeChangeListener(this._onChange);
    },

    render: function() {

        return (
            <div className="content container">
                <h2 className="page-title">Users <small>Management</small></h2>
                <div className="row">
                    <div className="col-lg-9">
                        <section className="widget whitesmoke">
                            <WidgetHeader />
                            <div className="body">
                               <UserTable users={this.state.users} editUser={this.state.editUser} /> 
                            </div>
                        </section>                        
                    </div>
                    <div className="col-lg-3">
                       <EditAccordian panelData={panelData} /> 
                    </div>
                </div>
            </div>
        );
    },
    
    _onChange: function() {
        var data = getStateFromStores();
        this.setState(data);
    }

});

module.exports = UserPage;