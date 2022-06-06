import React, { useState } from 'react';
import {StyleSheet,Image,Text,View} from 'react-native'
import store from '../reducers/store';


var num =2;

var styles = StyleSheet.create({
  selectedCall:{
      alignSelf:"flex-end",
      backgroundColor:"green",
      height:"100%",
      width:"30%",
      justifyContent:"center",
      borderBottomColor:"black",
    borderBottomWidth:10,
      
  },
  unselectedCall:{
      alignSelf:"flex-end",
      backgroundColor:"green",
      height:"100%",
      width:"30%",
      justifyContent:"center",
      borderBottomColor:"green",
    borderBottomWidth:10,
      
  },
  selectedChat:{
    alignSelf:"flex-end",
    backgroundColor:"green",
    height:"100%",
    width:"30%",
    justifyContent:"center",
    borderBottomColor:"black",
    borderBottomWidth:10,
  },

  container: {
    flex:0.2,
    backgroundColor: 'green',
    position:"relative",
    flexDirection:"row",
    height:"30%",
  },
  secondHeader:{
    height:"100%",
    width:"100%",
    backgroundColor:"green",
    flexDirection:"row",
    justifyContent:"flex-start",
    
  },
  firstHeader:{
    height:"50%",
    width:"100%",
    backgroundColor:"green",
    justifyContent:"space-around",
    flexDirection:"row",
    alignItems:"center",
  },
  options:{
    position:'relative',
    backgroundColor:"green",
    flexDirection:"row",
    justifyContent:"space-between",
    left:"-100%",
    height:"50%",
    width:"100%",
    alignSelf:"flex-end",
    
  }
  ,
  headerText:{
    backgroundColor:"green",
    color:"white",
    alignSelf:"center",
    fontSize:20,
  }
  ,
  selectedStatus:{
    alignSelf:"flex-end",
    backgroundColor:"green",
    height:"100%",
    width:"30%",
    justifyContent:"center",
    borderBottomColor:"black",
    borderBottomWidth:10,
    
  }
  ,
  unselectedStatus:{
    alignSelf:"flex-end",
    backgroundColor:"green",
    height:"100%",
    width:"30%",
    justifyContent:"center",
    borderBottomColor:"green",
    borderBottomWidth:10,
    
  }
  ,
  text:{
    color:'red',
    backgroundColor: 'white',
  },
  gameName:{
    fontSize:30,
     marginRight:"40%",
  },
search:{
  width :30,
  height:30,
},
settings:{
  width :30,
  height:30,
},
UnselectedChat:{
  alignSelf:"flex-end",
  backgroundColor:"green",
  height:"100%",
  width:"30%",
  justifyContent:"center",
  borderBottomColor:"green",
  borderBottomWidth:10,
}


});




function Header() {
  const [chat,setChat]=useState(styles.selectedChat);
  const [status,setStatus]=useState(styles.unselectedStatus);
  const [call,setCall]=useState(styles.unselectedCall);
  const [Num,setNum]=useState(num);
    return (
        <View style={styles.container}>
      
      <View style={styles.secondHeader}> 
        <View style={styles.firstHeader}>
          <Text style={styles.gameName}>LetsChat</Text>
          <Image style={styles.search} source={require('../assets/search.svg')} />
          <Image style={styles.search} source={require('../assets/gear.svg')} />
    
        </View>
        <View style={styles.options}>

        <View style={chat} onTouchStart={()=>{
          //styles.chats.borderBottomColor="green";
          setChat(styles.selectedChat)
          setStatus(styles.unselectedStatus);
          setCall(styles.unselectedCall);
          store.dispatch({"type":"Chats"})//Go to Status HomeSheet
          console.log(store.getState().bState)
          
          num=8;
          
        }}>
          <Text style={styles.headerText}>CHATS</Text>
        </View>
        <View style={status} onTouchStart={()=>{
          //styles.chats.borderBottomColor="green";
          setCall(styles.unselectedCall);
          setChat(styles.UnselectedChat);
          setStatus(styles.selectedStatus);
          store.dispatch({type:"Status"});//Go to Status TabSheet
          console.log(store.getState().bState);
        
      }}>
          <Text style={styles.headerText}>STATUS</Text>
        </View>
        <View style={call} onTouchStart={()=>{
          //styles.chats.borderBottomColor="green";
          setChat(styles.UnselectedChat);
          setStatus(styles.unselectedStatus);
          setCall(styles.selectedCall);
          setNum(6)
          num=Num;
          setNum(num);
        
      }}>
          <Text style={styles.headerText}>CHATS</Text>
        </View>
        
        </View>
      </View>
     
    </View>

    );
}

export {Header,num};