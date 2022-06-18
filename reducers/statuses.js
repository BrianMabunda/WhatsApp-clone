import React from 'react';

function statuses(state=0,action) {
    if(action.type==="setStatuses"){
        state=action.payload;
        return action.payload;
        // console.log("hello world");
    }
    else if(action.type==="clearStatuses"){
        state=0;
        return state;
    }
    else
        return state;;
}

export default statuses;