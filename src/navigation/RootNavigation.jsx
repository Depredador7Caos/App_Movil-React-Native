import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

import AppNavigator from "./AppNavigator";
import MainNavigator from "./MainNavigator";


const Stack = createNativeStackNavigator();


export default function RootNavigation(){
    const {user, loading} = useContext(AuthContext);

    if (loading) {
        return null
    }

    return (
        <Stack.Navigator screenOptions={{headeShown: false}}>
            {
                user ? (
                    <Stack.Screen name="Main" component={MainNavigator} />
                ):(
                    <Stack.Screen name="Auth" component={AppNavigator} />
                )
            }
        </Stack.Navigator>
    );
}