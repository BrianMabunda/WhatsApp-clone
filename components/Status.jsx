import { ScrollView, StyleSheet, Text, View } from "react-native";
import store from "../reducers/store";

function Status() {
    return (
        <View style={styles.container}>
            <View style={styles.info}>
            <Text>Terra</Text>
            <Text>monday</Text>
            </View>

            <ScrollView 
            horizontal={true} 
            style={styles.statuses}
            snapToAlignment="center"
            >
                <View 
                style={styles.box}
                onTouchStart={()=>{
                    store.dispatch({"type":"StatusView"});
                }}
                >
                    <Text>Hello</Text>
                </View>
            </ScrollView>
        </View>
    );
}
const styles=StyleSheet.create({
    container:{
        flex:.125,
        backgroundColor:"blue",
        alignSelf:"flex-end",
        width:"100%",
        position:"relative",
        flexDirection:"column",
        zIndex:0,
    },
    info:{
            flexDirection:"row",
            justifyContent:"space-between",
    },
    box:{
        height:60,
        width:50,
        backgroundColor:"gray",
        marginLeft:5,
        marginRight:5,
        borderBottomWidth:10,
        borderBottomColor:"black",
        
    },
})

export default Status;