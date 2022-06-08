import { ScrollView, StyleSheet, Text, View, Image} from "react-native";
import store from "../reducers/store";

function Status() {
    return (
        <View style={styles.container}>
            <View style={styles.userInfo}>
                <View style={styles.picContainer} onTouchStart={()=>{
                    store.dispatch({"type":"StatusView"});
                }}>
                    <Image  style={styles.StatusPic} source={require("../assets/icon.png")}/>
                </View>
                <Text  style={styles.contactName}>Nkateko</Text>
                <Text  style={styles.statusTime}>1 minute ago</Text>
            </View>
        </View>
    );
}
const styles=StyleSheet.create({
    container:{
        flex:.125,
        
        // alignSelf:"flex-end",
        width:"100%",
        position:"relative",
        flexDirection:"column",
        zIndex:0,
        justifyContent:"center",
        alignContent:"center",
        borderWidth:3,
        borderColor:"silver",
    },
    info:{
            flexDirection:"row",
            justifyContent:"space-between",
    },
    box:{
        height:60,
        width:50,
        backgroundColor:"gray",
        marginLeft:5,
        marginRight:5,
        borderBottomWidth:10,
        borderBottomColor:"black",
        
    },
    picContainer:{
        height:65,
        width:65,
        borderRadius:50,
        borderWidth:5,
        marginTop:6,
        marginLeft:7.5,
        borderColor:"green",
    },
    StatusPic:{
        
        borderRadius:50,
        height:"100%",
       width:"100%",
        
    },
    userInfo:{
        flex:1,
        //top:-200,
        // alignSelf:"center",
        flexDirection:"row",
        justifyContent:"flex-start",
    },
    statusTime:{
        fontSize :12,
        fontStyle:"Italic",
        alignSelf:"center",
        marginLeft:60,
        color:"silver"
        
        
    },
    contactName:{
        fontSize :20,
        alignSelf:"center",
        marginHorizontal:10,
        color:"silver"
    },
})

export default Status;