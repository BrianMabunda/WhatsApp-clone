import React from 'react';


function sentText(state=0,action) {
        if(action.type==="Send"){
            state=action.payload;
            return action.payload;
        }
        else if(action.type==="Clear"){
            state=0;
            return state;
        }
        else
            return state;
            
  
}

export default sentText;