import React from 'react';

function user(state=0,action) {
    if(action.type==="setUser"){
        state=action.payload;
        return action.payload;
        console.log("hello world");
    }
    else if(action.type==="clearUser"){
        state=0;
        return state;
    }
    else
        return state;
}

export default user;