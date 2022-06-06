import { useEffect, useState } from "react";
import { StyleSheet, Image, View,Text } from "react-native";
import store from "../reducers/store";
let itt=0;


function StatusView() {
    //max 350
    const [prog,setProg]=useState(0);
    //set(time,setTime);
    
    var Styles=StyleSheet.create({
        loadindBar:{
            height:10,
            width:prog,
            backgroundColor:"green",
            borderRadius:25,
            /* borderWidth:10,
            borderColor:"green", */
        },
        loadindBarContainer:{
            width:350,
            backgroundColor:"gray",
            alignSelf:"center",
        }
    });


    
    
    /* useEffect(()=>{
        const progress=setInterval(() => {
            itt+=11.7;
            setProg(itt);
             console.log(itt)
        }, 1000);
    setTimeout(() => {
        clearInterval(progress);
        console.log("done")
        store.dispatch({"type":"Home"})
        store.dispatch({"type":"Status"})
        itt=0;
    }, 30000);
},[]) */
    
    return (
        <View style={styles.container}>
            <View style={styles.userInfo}>
                <Image style={styles.profilePic} source={require("../assets/icon.png")}/>
                <Text >Nkateko</Text>
                <Text>Time of status</Text>
            </View>
            <View style={Styles.loadindBarContainer}>
                <View style={Styles.loadindBar} /> 
            </View>
            <View style={styles.display}> 
                <Image style={styles.displayImage} source={require("../assets/icon.png")}/>
            </View>
        </View>
    );
}

const styles=StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:"red",
        width:"100%",
        flexDirection:"column",


    },
    display:{
        height:500,
        width:350,
        alignSelf:"center",
        top:70,
    },
    displayImage:{
        height:"100%",
        width:"100%",
    },
    profilePic:{
        height:50,
        width:50,
        alignContent:"center",
        
        //top:25,
        borderRadius:25,
    },
    userInfo:{
        height:50,
        //top:-200,
        backgroundColor:"blue",
        marginTop:10,
        flexDirection:"row",
        marginBottom:10,
    },
    
})

export default StatusView;