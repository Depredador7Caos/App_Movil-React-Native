import { View, Text, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useContext } from "react";

import { AuthContext } from "../../../context/AuthContext";

// IMPORTACION DE COMPONENTES
import ButtonDanger from "../../../components/buttonDanger";

export default function HomeScreen() {

    const { user, logout } = useContext(AuthContext);

    console.log(user);

    return (
        <SafeAreaView style={styles.screenComplete} edges={['top', 'bottom']}>
            {/* MENU PARTE SUPERIOR TOP */}
            <View style={styles.mainTop}>

            </View>
            
            {/* CONTENIDO */}
            <View style={styles.container}>
                <Text style={styles.title}>Bienvenido 👋</Text>

                <View style={styles.card}>
                    <Text style={styles.label}>Usuario:</Text>
                    <Text style={styles.valores}>{user?.usuario}</Text>

                    <Text style={styles.label}>Nombre:</Text>
                    <Text style={styles.valores}>{user?.nombre}</Text>

                    <Text style={styles.label}>matricula:</Text>
                    <Text style={styles.valores}>{user?.matricula}</Text>
                </View>

                <ButtonDanger title="Cerrar sesión" onPress={logout}/>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    screenComplete: {
        flex: 1,
        backgroundColor: "#fff",
        // alignItems: "center",
    },
    container: {
        flex: 1,
        backgroundColor: "#fff",
        justifyContent: "center",
        alignItems: "center",
        padding: 20,
    },
    mainBottom: {
        height: 70,
        justifyContent: "center",
        alignItems: "center",
        borderTopWidth: 1,
        borderColor: "#eeeeee8f",
        backgroundColor: "#007585"
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
    valores: {
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
