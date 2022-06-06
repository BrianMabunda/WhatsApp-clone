import { StyleSheet, Text, View } from "react-native";
import Status from './Status';
function StatusArea() {
    return (
        <View style={styles.container}>
            <Status />
        </View>
    );
}
const styles=StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:"red",
        alignSelf:"flex-end",
        width:"100%",
        position:"relative",
        height:100,
        zIndex:0,
    },
})

export default StatusArea;