import React, { useEffect, useState } from 'react';
import {Image, StyleSheet,Text,View} from 'react-native'
import store from '../reducers/store';
import  {Read,Write}  from './handleDeviceMemory';

const resp1 ={"Chats":[{"Time":"09:00","key":999,"text":"Abuti"}]}
const resp2={"Contacts":[{"Key":999,"Name":"Nkateko","contacts":1}]}

var num=90;

function Message(props) {
    //console.log(Read("909"))
    const [contact,setContact]=useState("waiting");
    const [chat,setChat]=useState("waiting");
    const [name,setName]=useState("None");
    const [time,setTime]=useState("None");
    const [text,setText]=useState("None");
    /* fetch("http://192.168.43.16:5000").
        then(resp1=>console.log(resp1))
        */
        const API= async(request)=>{
        
            try {
                var response;
                if(request=="chat")
                    response=await fetch("http://localhost:5000/chats");
                    
                else
                    response=await fetch(`http://localhost:5000/contacts`);
                const Data=await response.json();
                if(Data!=Response){
                    if(request=="chat")
                        setChat(Data)
                    else{
                        setContact(Data);
                    }
                }
            } catch (error) {
                console.log(error);
            }
        }
        useEffect(()=>{
            API("contact");
            API("chat");
            
        },[])
        if(chat!="waiting" && contact!="waiting"){
            console.log(chat.Chats[chat.Chats.length-1].Time);
            //setName(contact.Contacts[0].name);
            
        }
    return (
        

        <View style={styles.message} onTouchStart={()=>{
            console.log("Switching to Message Area");
            store.dispatch({"type":"MessageArea"});
        }}>
            <Image style={styles.profilePic} source={require("../assets/icon.png")}/>
            <View style={styles.contactInfo}>
                <Text style={styles.contact}>{(contact!="waiting")?contact.Contacts[0].name:"LoL"}</Text>
                <Text style={styles.lastSeen}>{(chat!="waiting")?chat.Chats[chat.Chats.length-1].Time:"LOL"}</Text>
            </View>
            <View style={styles.messageInfo}>

                <Image style={styles.messageStatus} source={require("../assets/clock.svg")}/>
                <Text style={styles.messageSummary}>{(chat!="waiting")?chat.Chats[chat.Chats.length-1].text:"LOL"}</Text>
                <Text style={styles.unreadCount}>6</Text>

            </View>
        </View>

    );
}
const styles=StyleSheet.create({
  
    message:{
        height:"10%",
        width:"100%",
        backgroundColor:"gray",
        flexDirection:"row",
        display:"flex",
        zIndex:0,
    },
    messageInfo:{
        alignSelf:"flex-end",
        width:"77.5%",
        height:"40%",
        backgroundColor:"gray",
        flexDirection:"row",
        left:"-72.5%",
        marginBottom:"2%",
    },
    contactInfo:{
        backgroundColor:"gray",
        flexDirection:"row",
        justifyContent:"space-between",
        height:"40%",
        width:"77.5%",
        marginLeft:"1%",
        left:"5%",
    },
    profilePic:{
        height:50,
        width:50,
        borderRadius:50,
        backgroundColor:"gray",
        alignSelf:"center",
        left:"2.5%",
    },
    messageStatus:{
        height:17.5,
        width:17.5,
        top:5,
        marginRight:5,
    },
    contact:{
        fontSize:25,
    },
    messageSummary:{
        fontSize:20,
        width:"82%",
        backgroundColor:"gray",
    },
    unreadCount:{
        borderRadius:"50%",
        fontSize:15,
        alignContent:"flex-end",
        backgroundColor:"white",
        height:20,
        width:20,
        paddingLeft:"1.75%",
        paddingBottom:"6%",
        alignSelf:"center",
    },
    lastSeen:{
        alignSelf:"center",
        fontSize:12,
        
    }
});

export default Message;