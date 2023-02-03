import React from 'react'
import { useState ,useEffect} from 'react'
import { Button, Image, SafeAreaView, StyleSheet, Text, View, ViewComponent, AppRegitry ,TouchableOpacity,ScrollView} from 'react-native'
import {Table,Cell} from  'react-native-table-component'
import { Dimensions } from 'react-native'
import store from '../reducers/store';
const vw=Dimensions.get('window').width
const vh=Dimensions.get('window').height
const scale=Dimensions.get('window').scale
// var data;

const custumTable=(props)=>{
    return(
        <View style={stylesCT.container}>
        <View style={stylesCT.containerSensor}>
        <Text style={{position:"relative","alignSelf":"center","textAlign":"center","top":0.035 * vh,fontSize:20}}>
           {props.name}
                </Text>
        </View>
        <View style={stylesCT.container2}>
            <View style={stylesCT.head}>
                <View style={stylesCT.bx}><Text>Name</Text></View>
                <View style={stylesCT.bx}><Text>Temparature</Text></View>
                <View style={stylesCT.bx}><Text>{(props.name==="Servo")?"Angle":"RPM"}</Text></View>
            </View>
            <View style={stylesCT.row}>
                <View style={stylesCT.bx}><Text>{(props.data1===undefined)?"60":props.data1.Name}</Text></View>
                <View style={stylesCT.bx}><Text>
                    {(props.data1===undefined)?"60":props.data1.Temperature}
                    </Text></View>
                <View style={stylesCT.bx}><Text>
                {(props.data1===undefined)?"70":(props.name==="Servo")?props.data1.Angle:props.data1.Rpm}
                    </Text></View>
                </View>
            <View style={stylesCT.row}>
                <View style={stylesCT.bx}><Text>{(props.data1===undefined)?"60":props.data2.Name}</Text></View>
                <View style={stylesCT.bx}><Text>{(props.data1===undefined)?"60":props.data2.Temperature}</Text></View>
                <View style={stylesCT.bx}><Text>{(props.data1===undefined)?"60":(props.name==="Servo")?props.data2.Angle:props.data2.Rpm}</Text></View>
                </View>
        </View>
    </View>
    );
}
const stylesCT=StyleSheet.create({
    container:{
        display:"flex",
        flexDirection:"row",
        height:120,
        width:250
    },
    containerSensor:{
        position:"relative",
        backgroundColor:"green",
        height:100,
        width:100,
        alignSelf:"center",
        borderTopLeftRadius:50,
        borderBottomLeftRadius:50,
        top:10
    },
    container2:{
        height:120,
        // backgroundColor:"red",
    },
    head:{
        display:"flex",
        flexDirection:"row",
        backgroundColor:"green",
        opacity:1,
        height:40,
        width:300,
        borderTopLeftRadius:20,
        
        

    },
    row:{
        display:"flex",
        flexDirection:"row",
        backgroundColor:"gray",
        height:40,
        width:300,

    },
    bx:{
        height:"100%",
        width:90,
        borderColor:"red",
        alignItems:"center",
        justifyContent:"center"
    }

})


function MainScreen(props) {

    const [data,setData]=useState("")
    useEffect(()=>{
        fetch("http://127.0.0.1:5000/")
        .then(response=>response.json())
        .then(json=>{
            setData(json);
            console.log(json)
        })
        .catch((error)=>{console.log(error)})

    },[])
    // setInterval(() => {
        // fetch("http://127.0.0.1:5000/")
        // .then(response=>response.json())
        // .then(json=>{
        //     setData(json);
        // })
        // .catch((error)=>{console.log(error)})
    // }, 2000);
  

    return (
        <View style={{"height":vh,"width":"100%", borderRadius:25,}}>
            <View style={styles.header}>
                <View style={styles.profilePicContainer}>
                <Image source={require("../assets/icon.png")} style={{"height":"100%","width":"100%", borderRadius:25,}}></Image>
                </View>
                <Text style={{"left":-0.1*vw}}>
                    {`Brian Mabunda`}
                </Text>
                <Text style={{"left":-0.07*vw}}>
                    {`UserType: Operator`}
                </Text>

            </View>

            <View style={styles.systemSummaryContainer}>
            <TouchableOpacity style={{ "height":300,"width":330,}} onPress={()=>{
                store.dispatch({"type":"Modelinfo"});
            }

            }>
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
            </TouchableOpacity>
            </View>
            <View style={styles.systemAcuatorsContainer}>
                <ScrollView  style={styles.systemAcuators}>
                <Text style={styles.midText} >System Acutaors</Text>
                <Text></Text>
                {(data==="")?custumTable({name:"Servo"}):custumTable({name:"Servo",data1:data.Actuators[2],
                                                                    data2:data.Actuators[3]})}
                <Text></Text>
                {(data==="")?custumTable({name:"DC Motor"}):custumTable({name:"DC Motor",data1:data.Actuators[0],
                                                                    data2:data.Actuators[1]})}
                
                {/* {custumTable({name:"DC Motor"})} */}
                {/* {custumTable()} */}
                </ScrollView>
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
        height:60,
        width:60,
        marginLeft:10
    },
    systemSummary:{
        position:"relative",
        height:280,
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
        height:0.65*vh,
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
        height:(0.4*vh),
        width:"100%",
        backgroundColor:"lightgreen",
        position:"relative",
        top:-1*0.15*vh
    },
    systemAcuators:{
        width:360,
        height:(0.4*vh),
        backgroundColor:"silver",
        alignSelf:"center",
        borderRadius:20,
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

export default MainScreen;