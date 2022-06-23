import { useEffect, useState } from "react";
import { StyleSheet, Image, View,Text } from "react-native";
import store from "../reducers/store";
let itt=0;


const data= new FormData();
data.append("name","Image")

function StatusView() {
    //max 350
    const [prog,setProg]=useState(0);
    const [image,setImage]=useState(" ");
    
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
    const API= async()=>{
        
        try {
            
            const response=await fetch(`http://localhost:5000/getPic}`,
            {method:"POST",
            body:0,
        });
            const Data=await response.json();
            if(Data!=Response){
                setImage(Data.Image[Data.Image.length-1].img);
                console.log(Data.Image);
                itt=0;
            }
        } catch (error) {
            console.log(error);
        }
    }
  //Progress bar simulation
    useEffect(()=>{
        if(store.getState().status==0)
            API();
        else{
            setImage(store.getState().contact[store.getState().contact.length-1]);
            console.log(store.getState().contact)
        }

        const progress=setInterval(() => {
            itt+=2.5;
            setProg(itt);
            if(itt===350){

                clearInterval(progress);
                store.dispatch({"type":"clearContact"})
                 store.dispatch({"type":"Home"})
                 store.dispatch({"type":"Status"})
                
            }
             //console.log(itt)
        }, 10);
        if(itt===350){
            //clearInterval(progress);
            itt=0;

        }
    /* setTimeout(() => {
        clearInterval(progress);
        console.log("done")
        itt=0;
    }, 8000);*/
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
                <Image style={styles.displayImage} source={{uri:image}} resizeMode={"cover"}/>
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
        flex:1,
        width:350,
        alignSelf:"center",
        top:35,
    },
    displayImage:{
        height:"90%",
        width:"100%",
    },
    profilePic:{
        height:50,
        width:50,
        alignContent:"center",
        borderRadius:25,
        marginLeft:15,
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