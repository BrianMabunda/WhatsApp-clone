import { StyleSheet, Text, View } from "react-native";
import {Status,UserStatus} from './Status';
import store from "../reducers/store";
import { useEffect } from "react";
function StatusArea() {
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
            //console.log(store.getState().contacts.Contacts);
            const body=new FormData();
            body.append("names",JSON.stringify(contacts.names));
            body.append("keys",JSON.stringify(contacts.keys));
            const response=await fetch(`http://localhost:5000/get/${contacts.names}/${contacts.keys}`);
            const Data=await response.json();
            if(Data!=Response){
                //setImage(Data.Image[Data.Image.length-1].img);
                // console.log(Data.Image[3]);
                Data.Image.forEach(element => {
                    console.log(element);
                });
                //itt=0;
            }
        } catch (error) {
            console.log(error);
        }
    }
    useEffect(()=>{
        API();
    },[])
    return (
        <View style={styles.container}>
            <UserStatus />
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