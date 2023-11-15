import { NavigationContainer } from "@react-navigation/native"
import { createStackNavigator } from '@react-navigation/stack';
import Welcome from "./Screens/Welcome";
import Home from "./Screens/Home";
import Signup from "./Screens/Signup";
import Login from "./Screens/Login";

const Stack = createStackNavigator();

function StackNavigation() {
    return (
        <Stack.Navigator screenOptions={{
            headerShown:false
        }}>
            <Stack.Screen  name="Welcome" component={Welcome} />
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="Signup" component={Signup} />
            <Stack.Screen name="Login" component={Login} />
        </Stack.Navigator>
    );
}


export default StackNavigation

