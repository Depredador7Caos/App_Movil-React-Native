import LoginScreen from "./features/auth/screens/LoginScreen";

import AuthProvider from "./context/AuthContext";
import AppNavigator from "./navigation/AppNavigator";

// CUERPO DEL APP
export default function App() {
    return (
       
        <AuthProvider> {/* ALAMACEN DE DATOS USUARIO LOGEADO */}
            <AppNavigator /> {/* NAVEGAION DE APP */}
        </AuthProvider>
    );
}

