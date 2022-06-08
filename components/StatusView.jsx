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
            borderRadius:25,
        }
    });
  //Progress bar simulation
    useEffect(()=>{
        const progress=setInterval(() => {
            itt+=1;
            setProg(itt);
             console.log(itt)
        }, 10);
    setTimeout(() => {
        clearInterval(progress);
        console.log("done")
        store.dispatch({"type":"Home"})
        store.dispatch({"type":"Status"})
        itt=0;
    }, 8000);
},[])
    
    return (
        <View style={styles.container}>
            <View style={styles.userInfo}>
                <Image style={styles.profilePic} source={require("../assets/icon.png")}/>
                <Text  style={styles.contactName}>Nkateko</Text>
                <Text  style={styles.statusTime}>1 minute ago</Text>
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
        backgroundColor:"rgb(38, 46, 25)",
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
        borderRadius:25,
    },
    userInfo:{
        height:50,
        marginTop:10,
        flexDirection:"row",
        justifyContent:"flex-start",
        marginBottom:10,
    },
    statusTime:{
        fontSize :13,
        alignSelf:"center",
        marginLeft:60,
        color:"silver",
    },
    contactName:{
        fontSize :20,
        alignSelf:"center",
        marginHorizontal:10,
        color:"silver",
    },
})

export default StatusView;