function superState(state=0,action){

        switch(action.type){
            case "Initialize":
                return state=0;
                break;
            case "Home":
                return state=1;
                break;
            case "Modelinfo":
                return state=2;
                break;
            case "ActuatorInfo":
                    return state=3;
                    break;
            case "TestModel":
                return state=4;
            case "LogIn":
                return state=5;
            case "Register":
                return state=6;
            default:
                return state;

        }
}
export default superState;