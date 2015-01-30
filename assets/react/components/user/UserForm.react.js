'use strict';

var React = require('react'),
    
    
    // -- Action Creators
    SailsWebApi = require('../../utils/api/SailsWebApi'),

    // -- Stores
    UserStore = require('../../stores/UserStore');


function getStateFromStores(){
    return {
        users: UserStore.getAll(),
        editUser: UserStore.getEditUserId(),
    }
};

var UserForm = React.createClass({

    getInitialState: function() {

        return {
            user:{name:'',username:'',email:'',password:'',confirmation:'',admin:false}
        };
               
    },

    componentDidMount: function() {
        UserStore.addChangeListener(this._userChange);
        
    },

    componentWillUnmount: function() {
        UserStore.removeChangeListener(this._userChange);
    },

    _userChange: function(){
        //if this is an edit form, update the user on user events
        if(this.props.data.formType !== 'create'){
                        
            var user = getStateFromStores().users[getStateFromStores().editUser];
            if(user){
                this.setState({user:user});    
            }
        }
    },

    handleSubmit:function(e){
        var scope = this;
        e.preventDefault();
        
            setTimeout(function(){
                var errors = document.getElementsByClassName('parsley-errors-list filled');
                
                /*
                /50ms timout to let parsley parse
                /I don't love this solution
                /but it still seems better than forcing
                /jquery and parsley through commonjs
                */
                
                console.log(errors.length,errors[0],errors);
                
                
                if(errors.length === 0){
                    if(scope.props.data.formType == 'create'){
                        SailsWebApi.create('user',scope.state.user);
                        scope.setState({user:{name:'',username:'',email:'',password:'',confirmation:'',admin:false}});
                    }else if(scope.props.data.formType == 'update'){
                        SailsWebApi.update('user',scope.state.user)
                    }
                }
            },50);
    
    },
    
    handleChange: function(event) {
        var el = event.target,
            name = el.name,
            type = el.type,
            newState = this.state;

        if(el.type=='checkbox'){

            newState.user[name] = el.checked;
            //console.log('handle change',newState);
            this.setState(newState);

        }else{
            
            newState.user[name] = event.target.value;
            this.setState(newState);
        }
    },

    render: function(){
        var password = this._getPassword();
           
        return (
            <form data-parsley-validate onSubmit={this.handleSubmit}>
                
                <div className="form-group">
                    <div className="input-group input-group">
                        <span className="input-group-addon"><i className="fa fa-bars"></i></span>
                        <input className="form-control" size="16" type="text" name='name' placeholder="your name" 
                            value={this.state.user.name} onChange={this.handleChange} 
                            required="required" />
                    </div>
                </div>

                <div className="form-group">
                    <div className="input-group input-group">
                        <span className="input-group-addon"><i className="fa fa-user"></i></span>
                        <input className="form-control" size="16" type="text" name='username' placeholder="username" 
                            value={this.state.user.username} onChange={this.handleChange} 
                            required="required" />
                    </div>
                </div>

                <div className="form-group">
                    <div className="input-group input-group">
                        <span className="input-group-addon"><i className="fa fa-envelope"></i></span>
                        <input className="form-control" size="16" type="email" name="email" placeholder="email address"
                            value={this.state.user.email}
                            onChange={this.handleChange}
                            data-parsley-trigger="change"
                            data-parsley-validation-threshold="1"
                            required="required"/>
                    </div>
                </div>
                {password}
                <input type='submit' className="btn btn-lg btn-primary btn-block" value={this.props.data.buttonText} />
            </form>
        );
    },
    
    
    _getPassword:function(){
        if(this.props.data.formType == 'create'){
            return (
                <div>
                    <div className="form-group">
                        <div className="input-group input-group">
                            <span className="input-group-addon"><i className="fa fa-lock"></i></span>
                            <input className="form-control" size="16" id="password" name="password" type="password" placeholder="password"
                                value={this.state.user.password}
                                onChange={this.handleChange}
                                data-parsley-trigger="change"
                                data-parsley-minlength="6"
                                required="required" />
                        </div>
                    </div>

                    <div className="form-group">
                        <div className="input-group input-group">
                            <span className="input-group-addon"><i className="fa fa-unlock-alt"></i></span>
                            <input className="form-control" size="16" name="confirmation" type="password" placeholder="confirm password"
                                value={this.state.user.confirmation}
                                onChange={this.handleChange}
                                data-parsley-trigger="change"
                                data-parsley-minlength="6"
                                data-parsley-equalto="#password"
                                required="required"/>
                        </div>
                    </div>
                </div>
            );
        }else{
            return;
        }
    }

});

module.exports = UserForm;