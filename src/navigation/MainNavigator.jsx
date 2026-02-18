import { StyleSheet } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";

import MainList from "../features/dashboard/screens/MainListScreen";
import HomeScreen from "../features/dashboard/screens/HomeScreen";
import SettingsScreen from "../features/dashboard/screens/SettingsScreen";
// import SettingsScreen from "../features/settings/screens/SettingsScreen";
// import ProfileScreen from "../features/profile/screens/ProfileScreen";

const Tab = createBottomTabNavigator();

export default function MainNavigator() {
    return (
        <Tab.Navigator screenOptions={({ route }) => ({
            headerShown: false,
            tabBarActiveTintColor: "#0AA9B3",
            tabBarInactiveTintColor: "#20596A",
            tabBarIcon: ({ focused, color, size }) => {
                let iconName;

                if (route.name === "Principal") {
                    iconName = "home";
                } else if (route.name === "Configuracion") {
                    iconName = "settings";
                } else if (route.name === "Menu") {
                    iconName = "menu";
                }

                return <Ionicons name={iconName} size={32} color={color} />;
            }
        })}>
            {/* SCREEN DE FRONT INICIAL */}
            <Tab.Screen
                name="Principal"
                component={HomeScreen}
                options={{tabBarLabel: "Principal"}}
            />
            {/* SCREEN DE MENU GENERAL  */}
            <Tab.Screen
                name="Menu"
                component={MainList}
                options={{tabBarLabel: "Menu"}}
            />
            {/* SCREEN DE CONFIGURACION O MAS DETALLES */}
            <Tab.Screen
                name="Configuracion" 
                component={SettingsScreen}
                options={{tabBarLabel: "Configuracion"}}
            />
        </Tab.Navigator>
    );
}

const styles = StyleSheet.create({
    icons: {
        paddingHorizontal: 50,
        fontSize: 15
    }
})
