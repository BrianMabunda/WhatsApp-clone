require("react/package.json"); // react is a peer dependency. 
import { Button, Image, SafeAreaView, StyleSheet, Text, View, ViewComponent, AppRegitry ,TouchableOpacity,ScrollView} from 'react-native'
require("react-native/package.json"); // react-native is a peer dependency. 

require("prop-types/package.json"); // prop-types is a peer dependency. 

require("react-native-svg/package.json"); // react-native-svg is a peer dependency.
var expoChartKit = require("expo-chart-kit")

function SensorActuator(props) {
    return (
        <View>
    <Text>
     Bezier Line Chart
    </Text>
</View>
    );
}

export default SensorActuator;