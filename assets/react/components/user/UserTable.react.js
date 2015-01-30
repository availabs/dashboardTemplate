'use strict';
var React = require('react'),
    
    // -- Components 
    
    // -- Action Creators
    SailsWebApi = require('../../utils/api/SailsWebApi');
    

var UserRow = React.createClass({
    
     _onClick: function(id){
        //UserActionsCreator.selectUser(this.props.user.id);
        //console.log('clicked');
    },

    render: function(){
        return (
        
            <tr onClick={this._onClick} className={this.props.classString} >
                <td > 
                    <i  className="eicon-plus-circled"></i>
                    <i  className="eicon-minus-circled"></i>
                </td>
                <td><a href="/profile/{this.props.user.id}">{this.props.user.id}</a></td>
                <td>{this.props.user.name}</td>
                <td>{this.props.user.username}</td>
                <td>{this.props.user.email}</td>
                <td></td>
                <td>
                    <i className="fa fa-user"></i>
                </td> 
                <td>
                    <a data-toggle="modal" data-target="#deleteModal" data-backdrop="false" className="btn btn-sm btn-danger">
                        Delete
                    </a>
                </td>
            </tr>
        )
        
    }
    
})


var UserTable = React.createClass({
    
    _deleteUser : function(){
        SailsWebApi.delete('user',this.props.editUser);
    },
    render: function(){

        var scope = this,
            users = this.props.users,
            editUser = this.props.editUser;
        
        var rows = Object.keys(users).map(function(key){
            var classString = '';
            if( users[key].id === editUser){
                classString = 'active'
            }
            return (
                <UserRow key={key} user={users[key]} classString={classString} />
            )
        });
        var deleteModal = this.deleteModal();
        return (
            <div>
                <table className="table table-hover">
                    <thead><tr>
                        <th></th>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Username</th>
                        <th>Email</th>
                        <th>Campaigns</th>
                        <th></th>
                        <th></th>
                    </tr>
                    </thead>
                    <tbody>
                        {rows}
                    </tbody>
                </table>
                {deleteModal}
            </div>
        )
    },
    deleteModal:function(){
        var username = this.props.users[this.props.editUser] ? this.props.users[this.props.editUser].name : '';
        return (
            <div id="deleteModal" className="modal fade" tabIndex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">

                        <div className="modal-header">
                            <button type="button" className="close" data-dismiss="modal" aria-hidden="true">×</button>
                            <h4 className="modal-title" id="myModalLabel2">Delete User</h4>
                        </div>
                        <div className="modal-body">
                            <h4>Are you sure you want to delete {username}?</h4>     
                        </div>
                        
                        <div className="modal-footer">
                           <br />
                            <button type="button" className="btn btn-danger" data-dismiss="modal">Cancel</button>
                            <button type="button" className="btn btn-info" onClick={this._deleteUser} data-dismiss="modal">Delete</button>
                        </div>

                    </div>
                </div>
            </div>
        )
    }
});

module.exports = UserTable;