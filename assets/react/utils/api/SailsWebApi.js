'use strict';
/*
 * This file is provided by Facebook for testing and evaluation purposes
 * only. Facebook reserves all rights not expressly granted.
 *
 *.
 */

var io = require('./sails.io.js')();
var ServerActionCreators = require('../../actions/ServerActionsCreator');


module.exports = {

  initAdmin: function(user){

    ServerActionCreators.setAppSection('admin');
    ServerActionCreators.setSessionUser(user);

    this.read('user');
    
  
  },
  initCmpgn: function(user,campaign){

    ServerActionCreators.setAppSection('cmpgn');
    ServerActionCreators.setSessionUser(user);
    ServerActionCreators.setSessionCampaign(campaign);
    
    this.read('user');
    this.recieveVoters(campaign.id)
  
  },

  //---------------------------------------------------
  // Sails Rest Route
  //---------------------------------------------------
  create: function(type,data){
    io.socket.post('/'+type,data,function(resData){
      //ToDo Check for Errors and Throw Error Case
      console.log('utils/sailsWebApi/createUser',resData);

      //add new user back to store through 
      ServerActionCreators.receiveData(type,[resData]);
    });
  },
  
  read: function(type) {
    io.socket.get('/'+type,function(data){     
      //console.log('utils/sailsWebApi/getUsers',data);
      ServerActionCreators.receiveData(type,data);
    });
  },


  update: function(type,data){
    io.socket.put('/'+type+'/'+data.id,data,function(resData){
      //ToDo Check for Errors and Throw Error Case
      console.log('utils/sailsWebApi/updateData',resData);

      //add new user back to store through 
      ServerActionCreators.receiveData(type,[resData]);
    });
  },

  delete: function(type,id){
    io.socket.delete('/'+type+'/'+id,function(resData){
      //ToDo Check for Errors and Throw Error Case
      console.log('utils/sailsWebApi/delete',resData,id);

      //Delete 
      ServerActionCreators.deleteData(type,id);
    });
  },

  //---------------------------------------------------
  // Voters
  //---------------------------------------------------
  recieveVoters: function(campaignId){
    console.time('loadVoters');
    io.socket.get('/campaign/'+campaignId+'/voterData',function(resData){
      console.timeEnd('loadVoters');
      //ToDo Check for Errors and Throw Error Case
      
      //add new user back to store through 
      ServerActionCreators.receiveVoters(resData);
    });
  },


};
