import { Text, View, Button } from "react-native";
import { useContext } from "react";
import { AuthContext } from "../../../context/AuthContext";

export default function HomeScreen() {
    const { user, logout } = useContext(AuthContext);

    return (
        <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
            <Text style={{ fontSize: 22 }}>Bienvenido {user.nombre}!</Text>

            <Button title="Cerrar sesión" onPress={logout} />
        </View>
    );
}
