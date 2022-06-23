import React, { useEffect, useState } from 'react';
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
    width:"100%",
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
    flexDirection:"row",
    justifyContent:"flex-start",
    alignItems:"flex-start",
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
    marginLeft:10,
     alignSelf:"flex-end",
     justifyContent:"flex-start",

  },
search:{
  width :30,
  height:30,
},
settings:{
  width :30,
  height:30,
},
unselectedChat:{
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
  const [header,setHeader]=useState({
    chat:  styles.selectedChat,
    status:styles.unselectedStatus,
    call:  styles.unselectedCall,
  })
  const [Num,setNum]=useState(num);
  console.log(store.getState().bState);
  useEffect(()=>{
    
    switch (store.getState().bState) {
     case 0:
       setHeader({
       chat:  styles.selectedChat,
       status:styles.unselectedStatus,
       call:  styles.unselectedCall,
       })
       break;
     case 1:
       setHeader({
       chat:  styles.unselectedChat,
       status:styles.selectedStatus,
       call:  styles.unselectedCall,
       })
       break;
     
   } 
  },[])
    return (
        <View style={styles.container}>
      
      <View style={styles.secondHeader}> 
        <View style={styles.firstHeader}>
          <Text style={styles.gameName}>LetsChat</Text>
    
        </View>
        <View style={styles.options}>

        <View style={header.chat} onTouchStart={()=>{
          //styles.chats.borderBottomColor="green";
          setHeader({
            chat:  styles.selectedChat,
            status:styles.unselectedStatus,
            call:  styles.unselectedCall,
            })
          store.dispatch({"type":"Chats"})//Go to Status HomeSheet
          console.log(store.getState().bState)
          
          num=8;
          
        }}>
          <Text style={styles.headerText}>CHATS</Text>
        </View>
        <View style={header.status} onTouchStart={()=>{
          //styles.chats.borderBottomColor="green";
          setHeader({
            chat:  styles.unselectedChat,
            status:styles.selectedStatus,
            call:  styles.unselectedCall,
            })
          store.dispatch({type:"Status"});//Go to Status TabSheet
          console.log(store.getState().bState);
        
      }}>
          <Text style={styles.headerText}>STATUS</Text>
        </View>
        <View style={header.call} onTouchStart={()=>{
          //styles.chats.borderBottomColor="green";
          setHeader({
            chat:  styles.unselectedChat,
            status:styles.unselectedStatus,
            call:  styles.selectedCall,
            })
          setNum(6)
          num=Num;
          setNum(num);
        
      }}>
          <Text style={styles.headerText}>CALLS</Text>
        </View>
        
        </View>
      </View>
     
    </View>

    );
}

export {Header,num};