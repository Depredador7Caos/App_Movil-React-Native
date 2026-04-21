// import { Text } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
// import { SafeAreaView } from "react-native-safe-area-context";

import ConfiguracionIndice from "../../configuracion/__index";

const SeetingsStack = createNativeStackNavigator();

export default function SettingsScreen () {
    return (
        <SeetingsStack.Navigator>
            <SeetingsStack.Screen 
                name='ConfiguracionIndice'
                component={ConfiguracionIndice}
                options={{ title: "Configuración"}}
            />

            {/* <SettingsScreen.Screen name='Perfil' component={ConfiguracionIndice}/> */}
        </SeetingsStack.Navigator>
    );
};
