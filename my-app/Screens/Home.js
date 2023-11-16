import { SafeAreaView, Text, View, Image, TouchableOpacity } from "react-native";
import BottomTab from "../Components/BottomTab";


function Home({ navigation }) {
    return (
        <SafeAreaView style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: "white" }}>
            <View style={{
                flex: 0.2,
                width: "100%",
                paddingStart: 15,
                paddingTop: 20,
                paddingEnd: 15,
                justifyContent: 'space-between',
                alignItems: "center",
                flexDirection: "row"
            }}>
                <View >
                    <Text style={{
                        color: "#BD0606",
                        fontWeight: "600",
                        fontSize: 18
                    }}>WELCOME</Text>
                    <Text
                        style={{
                            fontWeight: "600",
                            fontSize: 22
                        }}>Muhammad Osama</Text>
                </View>

                <Image
                    source={require("../assets/logo-color.png")}
                    style={{ width: "10%", height: 60 }}
                    resizeMode="cover"
                />


            </View>

            <View style={{
                flex: 0.6,
                width: "100%",
                alignItems: "center",
                justifyContent: "center",
            }}>
                <Text style={{
                    color: "#BD0606",
                    fontWeight: "600",
                    textAlign: "center",
                    fontSize: 35,
                    paddingBottom: 25,
                    width: "75%"
                }}>Emergency Help Needed ?</Text>

                <Image
                    source={require("../assets/emergengyCall.png")}
                    style={{ width: "85%", height: 300 }}
                    resizeMode="cover"
                />

                <TouchableOpacity>

                </TouchableOpacity>

            </View>

            <View style={{
                flex: 0.2,
                width: "100%",
                justifyContent: "flex-end",
                alignItems: "center"
            }}>
                <BottomTab navigation={navigation} />
            </View>
        </SafeAreaView>
    );
}

export default Home;