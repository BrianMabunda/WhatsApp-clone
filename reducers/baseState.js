import React from 'react';

function baseState(state=0,action) {
        switch(action.type){
            case "Chats":
                return state=0;
                break;
            case "Status":
                return state=1;
                break;
            case "Calls":
                    return state=2;
                    break;
            default:
                return state;

        }
}

export default baseState;