import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

import LoadingScreen from "../features/auth/screens/LoadingScreen";
import AppNavigator from "./AppNavigator";
import MainNavigator from "./MainNavigator";



const Stack = createNativeStackNavigator();

export default function RootNavigation(){
    const {user, loading} = useContext(AuthContext);
    
    if (loading) return <LoadingScreen />;

    return (
        <Stack.Navigator screenOptions={{headeShown: false}}>
            {
                user ? (
                    <Stack.Screen name="Home" component={MainNavigator} />
                ):(
                    <Stack.Screen name="Login" component={AppNavigator} />
                )
            }
        </Stack.Navigator>
    );
}