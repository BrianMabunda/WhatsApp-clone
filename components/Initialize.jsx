import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { View ,Text, Image,StyleSheet} from 'react-native';

import { Dimensions } from 'react-native';
import store from '../reducers/store';
import AsyncStorage from "@react-native-async-storage/async-storage";
const vw=Dimensions.get('window').width
const vh=Dimensions.get('window').height
const ip ="127.0.0.1";




function Initialize(props) {
     //console.log(Write("Hello"));
    // console.log(Read('@Storage_Key'));
    //  ---------------------------------------
    const [chats,setChats]=useState("");
    const [contacts,setContact]=useState("");
    const [profilePIcs,setProfilePIcs]=useState("");
    const [statuses,setStatuses]=useState("");
    const [prog,setProg]=useState(0);
    const [names,setNames]=useState("");

    
   
    const Styles=StyleSheet.create({
        loadingBarContainer:{
            height:vh*0.01,
            width:vw,
            borderWidth:5,
            borderColor:"silver",
            flexDirection:"column",
            justifyContent:"center",
            marginBottom:0.05*vh
        },
        loadingBarSlider:{
            backgroundColor:"green",
            height:10,
            width:prog,
        }
    })
    

    
     
    useEffect(()=>{
       var itt=0;
        const timer=setInterval(() => {
                if (itt>25 && itt<(Dimensions.get('window').width)-5)
                    setProg(itt);
                else   
                    console.log("Update")
                itt+=1;
                if (itt===(Dimensions.get('window').width)){
            
                    store.dispatch({"type":"Home"});
                    console.log(store.getState().State)
                    console.log(store.getState().State)
                    clearInterval(timer);
                    console.log(`->${itt}`)
                    
                }
            }, 10);
       
    },[])
    // setInterval(() => {
    //      apiCall("chats");
    //      apiCall("contacts");
    //     if (contacts !="" && chats !=""){

    //         Write("contacts",contacts);
    //         Write("chats",chats)
    //     }
    // }, 500);
    //  
    //     console.log(statuses)
    //     Write("chats",chats);
        console.log(contacts)
        

    return (
        <View style={styles.container}>
            <Text style={styles.textHeader}>Fruit Selector</Text>
            <View>
                <Image style={styles.image} source={require("../assets/whatsapp.png")} resizeMode={"cover"} />
            </View>
            <Text style={styles.text}>Initializing...</Text>
            <View style={Styles.loadingBarContainer}>
                <View style={Styles.loadingBarSlider}>

                </View>
            </View>
        </View>
    );
}
const styles=StyleSheet.create({

    container:{
        backgroundColor:"white",
        height:vh,
        width:vw,
        flexDirection:"column",
        justifyContent:"space-between",
    },
    image:{
        height:0.5*vh,
        width:vw
    },
    text:{
        textAlign:'center',
        fontSize:25,
        fontFamily:'Bauhaus 93',
    },
    textHeader:{
        textAlign:"left",
        fontSize:30,
        paddingLeft:vw*0.05
    }
    


})

export default Initialize;