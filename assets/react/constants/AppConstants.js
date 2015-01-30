

var keyMirror = require('keymirror');

module.exports = {

  ActionTypes: keyMirror({
    
    //-------------------------------------------------------
    //View actions 
    //-------------------------------------------------------
    SELECT_USER: null,
    CREATE_USER:null,

    //-------------------------------------------------------
    //Server actions 
    //-------------------------------------------------------
    SET_APP_SECTION:null,
    
    //-------User--------------------------------------------
    RECEIVE_USERS: null,
    SET_SESSION_USER:null,


  }),

  PayloadSources: keyMirror({
    SERVER_ACTION: null,
    VIEW_ACTION: null
  })

};
