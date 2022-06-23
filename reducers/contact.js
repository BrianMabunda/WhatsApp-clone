import React from 'react';

function contact(state=0,action) {
    if(action.type==="setContact"){
        state=action.payload;
        return action.payload;
        console.log("hello world");
    }
    else if(action.type==="clearContact"){
        state=0;
        return state;
    }
    else
        return state;
}

export default contact;