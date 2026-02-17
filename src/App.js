// import LoginScreen from "./features/auth/screens/LoginScreen";
import { NavigationContainer } from "@react-navigation/native";
import AuthProvider from "./context/AuthContext";
import AppNavigator from "./navigation/AppNavigator";import { LogBox } from 'react-native';

// Ignorar warning de texto suelto en librerías
LogBox.ignoreLogs([
  'Text strings must be rendered within a <Text> component'
]);

// CUERPO DEL APP
export default function App() {
  return (
    <AuthProvider>
      <NavigationContainer>
        <AppNavigator />
      </NavigationContainer>
    </AuthProvider>
  );
}

