import { View, Text, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import Icon from "react-native-vector-icons/Fontisto"

const BottomTab = ({ navigation }) => {

    const [isHomeActive, setIsHomeActive] = useState(true);


    const navigateToHome = () => {
        setIsHomeActive(true);
        navigation.navigate("Home");
    }
    const navigateToSOS = () => {
        setIsHomeActive(false)
        navigation.navigate("SOS");
        setIsHomeActive(true);
    }

    return (
        <View style={{
            flexDirection: "row",
            justifyContent: "space-around",
            width: "90%",
            paddingTop: 10,
            paddingBottom: 10,
            marginBottom: 10,
            backgroundColor: "#D30505",
            borderRadius: 50
        }}>
            <TouchableOpacity
                onPress={navigateToHome}
                style={{
                    backgroundColor: isHomeActive ? "white" : "#D30505",
                    padding: 10,
                    borderRadius: 50
                }}>
                <Icon
                    name="home"
                    color={isHomeActive ? "#D30505" : "white"}
                    size={25}
                />
            </TouchableOpacity>

            <TouchableOpacity
                onPress={navigateToSOS}
                style={{
                    backgroundColor: isHomeActive ? "#D30505" : "white",
                    padding: 10,
                    borderRadius: 50
                }}>
                <Text style={{
                    color: isHomeActive ? "white" : "#D30505",
                    fontSize: 22,
                    fontWeight: "600"
                }}>
                    SOS
                </Text>
            </TouchableOpacity>
        </View>
    )
}

export default BottomTab
