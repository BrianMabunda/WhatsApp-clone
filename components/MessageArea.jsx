import React, { useEffect, useState } from 'react';
import { StyleSheet, View, Text, Image, Button, ScrollView} from 'react-native';


import store from '../reducers/store';
import ChatText from './ChatText';
import ChatInput from './ChatInput';

function MessageHeader(props) {
    let data="";
    if(props.data!="Waiting"){

        console.log(props.data.Contacts[0])
        data=props.data.Contacts[0]
    }
    return (
        <View style={styles.headerContainer} >
            <Image style={styles.profilePic}  source={require("../assets/icon.png")}/>
            <View onTouchStart={()=>{
                store.dispatch({"type":"Home"});
            }}>
                <Image style={styles.backPic}  source={require("../assets/arrow-left-long.svg")} />
            </View>
            <View style={styles.contactInfo}>
                <Text style={styles.contact}>{data.name}</Text>
                <Text>{`Last seen yesterday 08:00`}</Text>
            </View>
            <View style={styles.extrasContainer}>
                <Image style={styles.voicePic}  source={require("../assets/phone.svg")}/>
                <Image style={styles.videoPic}  source={require("../assets/video.svg")}/>
                <Image style={styles.optionsPic} source={require("../assets/search.svg")}/>
            </View>
            
        </View>
    );
}
const dat={
    //name:"Brian",
    chatStatus:"Sent",
    time:"08:00 Monday 25 May 2022",
    text:"ka fitlha cmapus",
    user:false,
}
const data1={
    //name:"Brian",
    chatStatus:"Sent",
    time:"08:00 Monday 25 May 2022",
    text:"Quos ducimus cum fdgdfgdfgdfgdfg ",
    user:true,
}
var data;
function MessageArea() {
    const [chatList,setChatList]=useState("Waiting");
    const [Chats,setChats]=useState(<View />);
    const [contact,setContact]=useState("Waiting")
    /*
    fetch("http://127.0.0.1:5000/")
    .then(response=>response.json())
    .then(json=>{
        data=json;
    })
    .catch((error)=>{console.log(error)})

    console.log(data)
    */
    

    const API= async(request)=>{
        
        try {
            var response;
            if(request=="chat")
                response=await fetch("http://192.168.43.16:5000/chats");
                
            else
                response=await fetch(`http://192.168.43.16:5000/contacts`);
            const Data=await response.json();
            if(Data!=Response){
                if(request=="chat")
                    setChatList(Data)
                else{
                    setContact(Data);
                }
            }
            
            //console.log(Data);
        } catch (error) {
            console.log(error);
        }
    }
    useEffect(()=>{
        API("chat");
        API("contact");
        //fetch("http://localhost:5000/sendText",{ method:"POST",qbody:JSON.stringify(dat)});
        //console.log(data)
    },[])
    setInterval(() => {
        if(store.getState().sent!=0)
        API("chat");
            store.dispatch({"type":"Clear"});
    }, 500);
    var chats=[];
    if(chatList!="Waiting"){
        console.log(0);
        //console.log(typeof(chatList.Chats))
        //console.log(chatList.Chats)
        //loop for adding chats from database to chat list
        chatList.Chats.forEach(chat => {
            chats[chats.length]=<ChatText data={chat} />;
        })
        //setChats(chats);
    }
    const emp={};
    
    const  [num,setNum]=useState(0);
    return (
        <View style={styles.MessaAreaContainer} >
            {(chatList!="Waiting")?<MessageHeader data={contact}/>:<View />}
            <ScrollView style={styles.container} focusable={false}> 
            {chats}
            </ScrollView>
            <ChatInput />
            

        </View>
    );
}
const styles=StyleSheet.create({
    MessaAreaContainer:{
        flex:1,
        position:"relative",
        backgroundColor:"rgb(38, 46, 25)",
        
    },
    container:{
        backgroundColor:"rgb(38, 46, 25)",
        display:"flex",
        flexDirection:"column",
        position:"relative",
        maxHeight:600,


    },
    voicePic:{
        height:30,
        width:30,
    }
    ,
    videoPic:{
        height:30,
        width:30,
        marginLeft:15,
        marginRight:15,
    }
    ,
    optionsPic:{
        height:30,
        width:30,
    }
    ,
    backPic:{
        height:25,
        width:25,
        left:-50,
        top:5,
    },
    contactInfo:{
        top:20,
        left:-20,
}
    ,
    contact:{
        fontSize:20,
        alignSelf:"flex-start"

        
    },
    headerContainer:{
        flexDirection:"row",
        backgroundColor:"green",
        width:350,
        height:80,
        position:"relative",
        top:-10,
        

    },
    profilePic:{
        height:50,
        width:50,
        justifyContent:"flex-start",
        top:25,
        borderRadius:25,
    },
    extrasContainer:{
        flexDirection:"row",
        alignSelf:"center",
        alignContent:"space-between",
        left:-5,
        top:10,
    },
})

export default MessageArea;