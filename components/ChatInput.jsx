import React, { useState } from 'react';
import { Button, StyleSheet, TextInput,TextInputBase,Image,TouchableOpacity,View } from 'react-native';
import MessageArea from './MessageArea';
import store from '../reducers/store';

var toBeSent={
    key:0,
    time:"09:20 Tuesday 17 May 2022",
    text:"",
    user:false,
}
const data1={
    //name:"Brian",
    chatStatus:"Sent",
    time:"08:00 Monday 25 May 2022",
    text:"Quos ducimus cum fdgdfgdfgdfgdfg ",
    user:true,
}
const apiCall =async (data)=>{
    fetch("http://127.0.0.1:5000/sendText",{method:"Post",headers:{'Content-Type':'application/json'},body:JSON.stringify(data)})
}
function ChatInput(props) {
    //variable for storing text
    const [chatText,setChatText]=useState("");
    //Variable for input container
    const [text,setText]=useState(styles.textSmall)
    //clears the text input after the button is pressed
   
    return (
        <View style={styles.ChatInputContainer}>
            <TextInput multiline="true"
                       scrollEnabled="true"
                       allowFontScaling="true"
                       autoFocus
                       value={chatText}
                       onChangeText={(text)=>{
                           //Get Text From TextInput element
                           setChatText(text)
                           if(text.length>72)
                                setText(styles.textBig);
                            else
                            setText(styles.textSmall);

                        }} 
                       style={text} />
                <TouchableOpacity style={styles.submit}
                                  onPress={()=>{
                                        //Send the data to the server and save state to display on the 
                                        //console.log(chatText);
                                        setChatText("");
                                        setText(styles.textSmall);
                                        toBeSent.text=chatText;
                                        if(chatText.length>1){

                                            apiCall(toBeSent);
                    
                                        }
                                        store.dispatch({"type":"Send","payload":toBeSent})

                                        console.log(store.getState().sent);
                                  }}>
                    <Image style={styles.submitPic} source={require("../assets/check.svg")} />
                </TouchableOpacity>
        </View>
    );
}
const styles =StyleSheet.create({
    submitPic:{
        height:50,
        width:50,
    },
    ChatInputContainer:{
        flexDirection:"row",
        display:"flex",
        position:'relative',
        
        
        
    },
    textSmall:{
        borderWidth:5,
        borderColor:"gray",
        width:260,
        height:50,
        borderRadius:15,
    },
    textBig:{
        borderWidth:5,
        borderColor:"gray",
        width:260,
        height:150,
        borderRadius:15,
    },
  
    submit:{
        height:50,
        width:50,
        
        borderRadius:25,
    }
})

export default ChatInput;