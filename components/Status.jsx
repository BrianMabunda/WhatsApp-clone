import { useEffect, useState } from "react";
import { ScrollView, StyleSheet, Text, View, Image, TouchableOpacity} from "react-native";
import store from "../reducers/store";

function Status(props) {
    const [statusImage,setStatusImage]=useState("");
    const [name,setName]=useState("")
    const data=props.data;
    
    useEffect(()=>{
        if(data!=null){
            setStatusImage(data.images[data.images.length-1]);
            
            setName(data.name)
        }

    },[])
    return (
        <View style={styles.container}>
            <View style={styles.userInfo}>
                <View style={styles.picContainer} onTouchStart={()=>{
                    store.dispatch({"type":"setContact","payload":data.images});
                    store.dispatch({"type":"StatusView"});
                }}>
                    <Image  style={styles.StatusPic} source={{uri:statusImage}}  />
                </View>
                <Text  style={styles.contactName}>{name}</Text>
                <Text  style={styles.statusTime}>1 minute ago</Text>
            </View>
        </View>
    );
}
function UserStatus(props) {
    const [statusImage,setStatusImage]=useState(" ");
    const data=props.data;
    
    useEffect(()=>{
        if(data!=null){
            setStatusImage(data.images[data.images.length-1]);
            store.dispatch({"type":"setContact","payload":data.images});
            console.log("got here")
        }

    },[])
    return (
        <View style={styles.container}>
            <View style={styles.userInfo}>
                <View style={styles.picContainer} onTouchStart={()=>{
                    store.dispatch({"type":"StatusView"});
                }}>
                   <Image  style={styles.StatusPic} source={{uri:statusImage}}/> 
                </View>
                <Text  style={styles.contactName}>You</Text>
                <Text  style={styles.statusTime}>1 minute ago</Text>
                <TouchableOpacity style={styles.add} onPress={()=>{
                    store.dispatch({"type":"StatusCreate"});
                }}>

                    <Image  style={styles.StatusPic} source={require("../assets/plus.svg")}/> 
                </TouchableOpacity>
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
    add:{
        height:30,
        width:30,
        borderRadius:25,
        alignSelf:"center",
        left:50,
    },
    
})

export {UserStatus,Status};