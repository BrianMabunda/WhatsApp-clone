import React, { useEffect, useState } from 'react';
import { View, StyleSheet, Text} from 'react-native';
import {  Camera, CameraType} from "expo-camera";
function StatusCreate(props) {
    const [hasPermission,setHasPermission]=useState(null);
    // const [type, setType]=useState(CameraType.back);
    useEffect(()=>{

        (async ()=>{
            const {status}=await Camera.getCameraPermissionsAsync();
            setHasPermission(status==='granted')
        })();
    },[]);
    if(hasPermission ===null)
        return <View />
    if(hasPermission ===false)
        return <Text>No Acess to camera</Text>
    
    return (
        <View style={styles.container}>
            {/* <Camera type={CameraType.back}>

            </Camera>  */}
        </View>
    );
}
const styles=StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:"white",
        width:"100%",
        flexDirection:"column",
    },
});

export default StatusCreate;