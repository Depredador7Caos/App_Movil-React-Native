import { createNativeStackNavigator } from "@react-navigation/native-stack";

import MainList from "../dashboard/screens/MainListScreen";

// LLAMADO DE LOS SCREENS
import AddSolicitud from "./screens/AddSolicitud";
import GetSolicitudes from "./screens/GetSolicitudes";

const MainStack = createNativeStackNavigator();

export default function MainStackScreen() {
    return(
        <MainStack.Navigator>
            <MainStack.Screen 
                name="MainList" 
                component={MainList} 
                options={{ title: 'Menú de Procesos' }} 
            />

            {/* CONTENIDO DE MENU */}
            <MainStack.Screen name="AddSolicitud" component={AddSolicitud} options={{ title: 'Solicitud Mantenimeinto' }}/>
            <MainStack.Screen name="GetSolicitudes" component={GetSolicitudes} options={{ title: 'Lista solicitudes mantenimeinto' }}/>
        </MainStack.Navigator>
    );
}