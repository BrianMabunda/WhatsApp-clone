import { StyleSheet, Text, View } from "react-native";
import {Status,UserStatus} from './Status';
import store from "../reducers/store";
import { useEffect, useState } from "react";
function StatusArea() {
    const [statusData,setStatusData]=useState(null);
    console.log("Hello");
    console.log(store.getState().contacts)
    const API= async()=>{
        
        try {
            let contacts={
                names:[],
                keys:[],
            };
            store.getState().contacts.Contacts.forEach(element => {
                contacts.names.push(element.name)
                contacts.keys.push(element.key)
            });
            let ip;
            // ip="192.168.43.16"
            ip="localhost"
            const response=await fetch(`http://${ip}:5000/get/${contacts.names}/${contacts.keys}`);
            const Data=await response.json();
            if(Data!=Response){
                store.dispatch({"type":"setStatuses","payload":Data});
                  setStatusData(store.getState().status.Image);
            }
        } catch (error) {
            console.log(error);
        }
    }
    useEffect(()=>{
        
        if(store.getState().status==0)
            API();
        else{
            setStatusData(store.getState().status.Image);
            console.log(store.getState().status)
        }

    },[])
    return (
        <View style={styles.container}>
            {console.log(statusData)}
            {(statusData!==null)?(<UserStatus data={statusData[0]} />):<View />}
            {(statusData!==null)?(<Status data={statusData[1]} />):<View />}
        </View>
    );
}
const styles=StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:"rgb(38, 46, 25)",
        alignSelf:"flex-end",
        width:"100%",
        position:"relative",
        height:100,
        zIndex:0,
        
    },
})

export default StatusArea;