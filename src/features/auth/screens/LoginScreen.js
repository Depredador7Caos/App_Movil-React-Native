import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, TextInput, View, Image } from "react-native";
import { useContext, useState } from "react";
import { loginUser } from "../../../api/loginUser";
import { AuthContext } from "../../../context/AuthContext";

// CARGA EL LOGO DE LOGIN
import logo from '../../../../assets/logo.png';

// COMPONENTES
import Boton from "../../../components/buttons";

export default function LoginScreen() {

    // STATES
    const [usuario, setUsuario] = useState("");
    const [password, setPassword] = useState("");
    const [errorMsg, setErrorMsg] = useState("");
    const { login } = useContext(AuthContext);

    // FUNCIÓN LOGIN
    const handleLogin = async () => {
        const data = await loginUser(usuario, password);

        if (data.status === "success") {
            login(data.data);
            // console.log("Usuario correcto:", data.user);
        } else {
            setErrorMsg(data.message);
        }
    };

    // RETURN
    return (
        <SafeAreaProvider>
            <SafeAreaView style={styles.containerBase}>
                <View style={styles.container}>
                    <StatusBar style="dark" />

                    <Image style={styles.imgPerfil} source={logo} />

                    <View style={{ marginBottom: 20 }}>
                        <Text style={styles.textCenter}>Inicio de sesión!</Text>

                        <View style={styles.center}>

                            {/* INPUT USUARIO */}
                            <TextInput
                                style={[styles.caja, styles.mt]}
                                value={usuario}
                                onChangeText={setUsuario}
                                placeholder="Usuario"
                                autoCapitalize="none"
                            />

                            {/* INPUT PASSWORD */}
                            <TextInput
                                style={[styles.caja, styles.mt]}
                                value={password}
                                onChangeText={setPassword}
                                placeholder="Contraseña"
                                secureTextEntry
                            />

                            {/* ERROR DEL BACK */}
                            {errorMsg !== "" && (
                                <Text style={styles.errorText}>{errorMsg}</Text>
                            )}

                            <View style={styles.contentBtn}>
                                <Boton title="Acceder" onPress={handleLogin} />
                            </View>
                        </View>
                    </View>
                </View>
            </SafeAreaView>
        </SafeAreaProvider>
    );
}

const styles = StyleSheet.create({
    containerBase: { flex: 1, backgroundColor: "#fff" },
    container: { flex: 1, backgroundColor: "#fff", alignItems: "center", justifyContent: "center" },
    textCenter: { fontSize: 24, fontWeight: "bold", textAlign: "center", marginBottom: 10 },
    caja: { width: 350, height: 55, borderWidth: 1, borderColor: "#ccc", borderRadius: 10, paddingHorizontal: 10 },
    imgPerfil: { width: 200, height: 200, marginBottom: 20, borderRadius: 100 },
    center: { justifyContent: "center", alignItems: "center" },
    contentBtn: { margin: 45 },
    mt: { marginTop: 25 },
    errorText: { width: 350, color: "#e63946", fontSize: 13, marginTop: 5, paddingLeft: 5 }
});
