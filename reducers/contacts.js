import React from 'react';

function contacts(state=0,action) {
    if(action.type==="setContacts"){
        state=action.payload;
        return action.payload;
        console.log("hello world");
    }
    else if(action.type==="clearContacts"){
        state=0;
        return state;
    }
    else
        return state;
}

export default contacts;