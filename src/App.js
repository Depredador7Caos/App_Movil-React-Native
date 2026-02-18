// import LoginScreen from "./features/auth/screens/LoginScreen";
import { NavigationContainer } from "@react-navigation/native";
import RootNavigation from "./navigation/RootNavigation";
import AuthProvider from "./context/AuthContext";


import { LogBox } from 'react-native';

// Ignorar warning de texto suelto en librerías
LogBox.ignoreLogs([
  'Text strings must be rendered within a <Text> component'
]);

// CUERPO DEL APP
export default function App() {
  return (
    <AuthProvider>
      <NavigationContainer>
        <RootNavigation />
      </NavigationContainer>
    </AuthProvider>
  );
}

