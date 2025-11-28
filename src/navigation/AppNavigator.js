import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

import LoginScreen from "../features/auth/screens/LoginScreen";
import HomeScreen from "../features/dashboard/screens/HomeScreen";
import LoadingScreen from "../features/auth/screens/LoadingScreen";

const Stack = createNativeStackNavigator();

export default function AppNavigator() {
    const { user, loading } = useContext(AuthContext);

    if (loading) { return <LoadingScreen /> };

    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{ headerShown: false }}>
                {
                    user ? (
                        <Stack.Screen name="Home" component={HomeScreen}></Stack.Screen>
                    ) : (
                        <Stack.Screen name="Home" component={LoginScreen}></Stack.Screen>
                    )
                }
            </Stack.Navigator>
        </NavigationContainer>
    );
}