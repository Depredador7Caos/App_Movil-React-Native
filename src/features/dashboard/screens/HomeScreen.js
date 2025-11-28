import { View, Text, StyleSheet, Pressable } from "react-native";
import { useContext } from "react";
import { AuthContext } from "../../../context/AuthContext";

export default function HomeScreen() {

    const { user, logout } = useContext(AuthContext);

    return (
        <View style={styles.container}>

            <Text style={styles.title}>Bienvenido 👋</Text>

            <View style={styles.card}>
                <Text style={styles.label}>Usuario:</Text>
                <Text style={styles.value}>{user?.usuario}</Text>

                <Text style={styles.label}>Nombre:</Text>
                <Text style={styles.value}>{user?.nombre}</Text>
            </View>

            <Pressable style={styles.btnLogout} onPress={logout}>
                <Text style={styles.logoutText}>Cerrar sesión</Text>
            </Pressable>

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        justifyContent: "center",
        alignItems: "center",
        padding: 20,
    },
    title: {
        fontSize: 28,
        fontWeight: "bold",
        marginBottom: 20,
    },
    card: {
        width: "90%",
        padding: 20,
        backgroundColor: "#f3f3f3",
        borderRadius: 12,
        marginBottom: 40,
        elevation: 3
    },
    label: {
        fontSize: 16,
        color: "#555",
        marginTop: 10,
    },
    value: {
        fontSize: 18,
        fontWeight: "bold",
        color: "#333",
    },
    btnLogout: {
        width: 200,
        padding: 15,
        backgroundColor: "#e63946",
        borderRadius: 10,
        alignItems: "center",
    },
    logoutText: {
        color: "#fff",
        fontSize: 18,
        fontWeight: "bold",
    }
});
