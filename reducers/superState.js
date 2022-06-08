function superState(state=0,action){

        switch(action.type){
            case "Home":
                return state=0;

                break;
            case "MessageArea":
                return state=1;
                break;
            case "StatusView":
                return state=2;
                break;
            case "Camera":
                    return state=3;
                    break;
            default:
                return state;

        }
}
export default superState;