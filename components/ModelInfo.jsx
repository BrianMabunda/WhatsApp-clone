import React from 'react'
import { useState ,useEffect} from 'react'
import { Button, Image, TouchableOpacity, StyleSheet, Text, View} from 'react-native'
import { Dimensions } from 'react-native'
import store from '../reducers/store';
const vw=Dimensions.get('window').width
const vh=Dimensions.get('window').height
const scale=Dimensions.get('window').scale

function ModelInfo(props) {
    return (
        <View style={styles.systemSummaryContainer}>
            
            <View style={styles.header}>
                <TouchableOpacity style={styles.profilePicContainer} onPress={()=>{store.dispatch({"type":"Home"});}}>

                <Image source={require("../assets/cross-circle-free-icon-font.png")} style={{"height":"100%","width":"100%", borderRadius:50,}}></Image>
                </TouchableOpacity>
                <Text style={{position:"relative",fontSize:30,alignSelf:"center",right:0.1*vw,marginRight:10}}>
                    {`System Configuration`}
                </Text>
            </View>

            <View style={styles.systemSummary}>
                <Text style={styles.midText} >System Statistics</Text>
                <View style={styles.infoTab}>
                    <Text style={styles.leftSum}>System Status :  </Text>
                    <Text style={styles.rightSum}>Online</Text>
  
                </View>
                <View style={styles.infoTab}>
                    <Text style={styles.leftSum} >System RunningTime :  </Text>
                    <Text style={styles.rightSum2}>30 minutes</Text>
                
                </View>

                <View style={styles.infoTab}>
                    <Text style={styles.leftSum}>Fruit Type :  </Text>
                    <Text style={styles.rightSum2}>Avocado</Text>
                </View>

                <View style={styles.infoTab}> 
                    <Text style={styles.leftSum2}>Classification Accuracy :</Text>
                    <Text style={styles.rightSum}>80%</Text>
                 </View>

                <View style={styles.infoTab}>
                     <Text style={styles.leftSum2}>Number of Fruits Classified : </Text> 
                     <Text style={styles.rightSum}>80%</Text>
                </View>
                </View>
                <Text></Text>
                <Text></Text>
                <View style={styles.systemAcuatorsContainer}>
                
                    <View style={styles.systemAcuators}>
                        <TouchableOpacity onPress={()=>{
                            store.dispatch({"type":"TestModel"});
                        }}>
                        <Text>Test Model</Text>
                        </TouchableOpacity>
                    </View>
                
                </View>
        </View>
    );
}

const styles=StyleSheet.create({
    header:{
        height:0.1*vh,
        width:'100%',
        backgroundColor:"silver",
        flexDirection:"row",
        justifyContent:"space-between",
        alignItems:"center",
        position:"relative",
        marginTop:1*0.05*vh,

    },
    profilePicContainer:{
        position:"relative",
        top:0.065*vh,
        height:40,
        width:40,
    },
    systemSummary:{
        position:"relative",
        height:0.6* vh,
        width:330,
        borderRadius:20,
        backgroundColor:"silver",
        alignSelf:"center",
        alignItems:"center",
        top:0.05*vh,
        display:"flex",
        flexDirection:"column",
        justifyContent:"space-around"
    },
    systemSummaryContainer:{
        height:vh,
        width:vw,
        backgroundColor:"lightgreen",
        alignItems:"center",
        position:"relative",
    },
    midText:{
        fontSize:20,
        alignSelf:'center',
        color:"white"
    },
    systemAcuatorsContainer:{
        height:(0.25*vh),
        width:"100%",
        backgroundColor:"lightgreen",
        position:"relative",
        // top:-1*0.15*vh
    },
    systemAcuators:{
        width:0.80*vw,
        height:(0.23*vh),
        backgroundColor:"silver",
        alignSelf:"center",
        borderRadius:20,
        position:"relative",
        top:0.015*vh
    },
    infoTab:{
        height:50,
        width:300,
        backgroundColor:"transparent",
        display:"flex",
        flexDirection:"row",
        justifyContent:"space-between",
        fontSize:1.8,
        alignItems:"center",

    },
    leftSum:{
        fontSize:17,
        color:"white"
    },
    leftSum2:{
        fontSize:14,
        color:"white"
    },
    rightSum:{
        fontSize:17,
        color:"green"
    },
    rightSum2:{
        fontSize:13,
    }
    
})


export default ModelInfo;