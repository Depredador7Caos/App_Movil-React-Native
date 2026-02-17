import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

// IMPORTAR SCREENS
import HomeScreen from "../features/dashboard/screens/HomeScreen";
import SettingsScreen from "../features/dashboard/screens/SettingsScreen";

const Tab = createBottomTabNavigator();

export default function MainNavigator() {
    return (
        <Tab.Navigator screenOptions={{ headerShown: false }}>
            <Tab.Screen name="Configuracion" component={SettingsScreen} />
        </Tab.Navigator>
    );
}