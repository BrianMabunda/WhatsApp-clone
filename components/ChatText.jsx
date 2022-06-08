import React, { useState } from 'react';
import { StyleSheet, View, Text,Image } from 'react-native';




function ChatText(props){
    const data=props.data;
    //const [container,setcontainer]=useState(0);
    let container;
    let message;
    /*if(data.text.length<=25)
        container=(styles.smallContactMassageContainer);
    else
        container=(styles.mediumContactMassageContainer);*/
    //sets the boolen variable for the chat position
    (data.key===0?data.user=true:data.user=false);
    if(data.text.length<=25){
        if(data.user===false || data.user==="false" ){
            container=(styles.smallContactMassageContainer);
            message=styles.contactMessage;
        }
        else{
            container=(styles.smallUserMassageContainer);
            message=styles.userMessage;
        }
    }
    else{
        if(data.user===false || data.user==="false" ){
            container=(styles.mediumContactMassageContainer);
            message=styles.contactMessage;
        }
        else{
            
            message=styles.userMessage;
            container=(styles.mediumUserMassageContainer);
        }
    }
    return(
        <View style={container}>
            <View style={message}>
                <Text style={styles.text}>
                    {data.text}
                </Text>
                <Image style={styles.metaPic} source={require("../assets/check.svg")}/> 
            </View>
            <Text style={styles.chatTime}>{data.Time}</Text>
        </View>
    );
    
}
const styles = StyleSheet.create({
    smallContactMassageContainer:{
        borderRadius:25,
        
        maxWidth:"35%",
    },
    mediumContactMassageContainer:{
        borderRadius:25,
        
        maxWidth:"75%",
    },
    smallUserMassageContainer:{
        borderRadius:25,
        maxWidth:"35%",
        alignSelf:"flex-end",
    },
    mediumUserMassageContainer:{
        borderRadius:25,
        alignSelf:"flex-end",           
        
        maxWidth:"75%",
    },
    contactMessage:{

        flexDirection:"row",
        textAlign:"left",
        borderColor:"blue",
        borderWidth:5,
        borderRadius:15,
        
    },
    userMessage:{

        flexDirection:"row",
        textAlign:"left",
        borderColor:"rgb(59, 84, 64)",
        borderWidth:1,
        borderRadius:15,
        
    },
    metaPic:{
        height:10,
        width:10,
        alignSelf:"center",
        //flexBasis:"flex-end",
        
    },
    metaData:{
        flexDirection:"row",
        justifyContent:"flex-end",
    },
    text:{
        fontSize:15,
        color:"silver"
        
        },
    chatTime:{
        alignSelf:"center",
        },
    
});
export default ChatText




;