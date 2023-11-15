import { View, Text } from 'react-native'
import React from 'react'


const BottomTab = () => {
    return (
        <View style={{
            flexDirection: "row",
            justifyContent: "space-around",
            width: "90%",
            paddingTop: 20,
            paddingBottom: 20,
            marginBottom:10,
            backgroundColor: "#D30505",
            borderRadius:50
        }}>
            <Text style={{
                color: "white"
            }}>
                Home
            </Text>
            <Text style={{
                color: "white"
            }}>
                Home
            </Text>
        </View>
    )
}

export default BottomTab