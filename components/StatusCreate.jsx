import React, { useEffect, useState } from 'react';
import { View, StyleSheet, Text, TouchableOpacity, Image} from 'react-native';
import {  Camera, 
} from "expo-camera";
import store from '../reducers/store';
import * as ImagePicker from 'expo-image-picker';
let ip;
// ip="192.168.43.16"
ip="localhost"


function StatusCreate(props) {
    const [hasPermission,setHasPermission]=useState(null);
    const [image,setImage]=useState(null);
    // const [camera,setCamera]=useState(null);
    const [imguri,setImgUri]=useState(null);
    // const [type, setType]=useState(Camera.Constants.Type.back);

    const [cameraPermission, setCameraPermission] = useState(null);
    const [galleryPermission, setGalleryPermission] = useState(null);
  
    const [camera, setCamera] = useState(null);
    const [imageUri, setImageUri] = useState(null);
    const [type, setType] = useState(Camera.Constants.Type.back);
  

    const permisionFunction = async () => {
        // here is how you can get the camera permission
        const cameraPermission = await Camera.requestPermissionsAsync();
    
        setCameraPermission(cameraPermission.status === 'granted');
    
        const imagePermission = await ImagePicker.getMediaLibraryPermissionsAsync();
        console.log(imagePermission.status);
    
        setGalleryPermission(imagePermission.status === 'granted');
    
        if (
          imagePermission.status !== 'granted' &&
          cameraPermission.status !== 'granted'
        ) {
          alert('Permission for media access needed.');
        }
      };
    
    const pickImage=async()=>{
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes:ImagePicker.MediaTypeOptions.All,
            allowsEditing:true,
            aspect:[4,3],
            quality:1,
        })
        console.log(result)
        if(!result.cancelled){ 
            setImgUri(result.uri)
        }
    }
    const takePicture=async()=>{
        if(camera){
            const data=await camera.takePictureAsync(null);
            console.log("------");

            setImgUri(data.uri);
        }
    }
     
    
     const createFormData=(data)=>{

            const form=new FormData();
            form.append('image',data);
            form.append('key',999);
            fetch(`http://${ip}:5000/uploadPic`,{method:"Post",body:form})
     }
    useEffect(()=>{

        permisionFunction();
    },[]);

    //if(hasPermission ===null)
       // return <View />
    if(hasPermission ===false)
        return (
            //Going back to status without  taking picture
        <View style={styles.container}>
            <Text>No Acess to camera</Text>
  
        </View>)
    
    return (
        //Displaying live camera
        <View style={styles.container}>
            {(imguri===null)?<Camera style={styles.picture} type={type} ref={(ref)=>setCamera(ref)}>
                <TouchableOpacity style={styles.capture} onPress={()=>{
                    //createFormData();
                    takePicture();
                    
                    
                }}>

                </TouchableOpacity>
                <TouchableOpacity style={styles.picSelect} onPress={()=>{
                    store.dispatch({"type":"Modelinfo"});
                    store.dispatch({"type":"Status"})
                }} >
                    <Image  style={styles.icon} source={require("../assets/cross-circle-free-icon-font.png")} resizeMode={"contain"}/>
                </TouchableOpacity>
            </Camera>:<View style={styles.container}>
                <View style={styles.imgContainer}>
                    <Image source={{uri:imguri}} style={styles.picture} resizeMode={"cover"}/>
                </View>
                <View style={styles.optionContainer}>
                <TouchableOpacity style={styles.picSelect} onPress={()=>{
                // store.dispatch({"type":"Home"});
                // store.dispatch({"type":"Status"})
                pickImage();
                (async()=>setImgUri(image));
                
            }}>
                <Image  style={styles.icon} source={require("../assets/thumbtack.png")}/>
                </TouchableOpacity>
                <TouchableOpacity style={styles.picSelect} onPress={()=>{
                    
                    setImgUri(null);
                    

                    
                    
                } }>
                    <Image  style={styles.icon} source={require("../assets/camera.svg")} resizeMode={"contain"}/>
                </TouchableOpacity>
                <TouchableOpacity style={styles.picSelect} onPress={()=>{
                    if(imguri!==null){
                        createFormData(imguri);
                        store.dispatch({"type":"Modelinfo"});
                        store.dispatch({"type":"Status"});

                    }
                   else
                      console.log(imguri);
                    
                } }>
                    <Image  style={styles.icon} source={require("../assets/angle-circle-right-free-icon-font.png")} resizeMode={"contain"}/>
                </TouchableOpacity>
                </View>
                </View>
                } 
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
    picture:{
        zIndex:0,
        height:"100%",
        width:"100%",
        // borderWidth:5,
        // borderColor:"red"
    },
    capture:{
        height:75,
        width:75,
        backgroundColor:"red",
        borderRadius:50,
        borderWidth:5,
         borderColor:"gray",
        alignSelf:"center",
        top:"80%",
    },
    back:{
        height:50,
        width:50,
        backgroundColor:"red",
        // borderRadius:50,
        // borderWidth:5,
        // borderColor:"gray",
        left:10,
    },
    picSelect:{
        height:50,
        width:50,
         borderWidth:2,
         borderRadius:50,
         borderColor:"rgb(38, 46, 25)",
        marginHorizontal:5,
    },
    optionContainer:{
        zIndex:1,
        flexDirection:"row",
        justifyContent:"space-around",
        height:50,
        top:-100,
    },
    imgContainer:{
        height:"100%",
    },
    icon:{
        height:"100%",
        width:"100%"
    }
});

export default StatusCreate;