import { StyleSheet, ActivityIndicator, Text, View } from "react-native";

export default function LoadingScreen() {
    return (

        <View style={styles.spinnerlogin}>
            <ActivityIndicator size="large" />
            <Text style={styles.textSpinner}>
                Validando...
            </Text>
        </View>

    );
}


const styles = StyleSheet.create ({
    spinnerlogin: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "white"
    },
    textSpinner: {
        marginTop: 20,
        fontSize: 18
    }
});