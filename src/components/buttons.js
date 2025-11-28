import { Pressable, StyleSheet, Text } from "react-native";

export default function Boton({ onPress }) {
    return (
        <Pressable style={styles.btn} onPress={onPress}>
            <Text style={styles.btnText}> Acceder </Text>
        </Pressable>
    );
}

const styles = StyleSheet.create({
    btn: {
        width: 200,
        height: 50,
        borderBlockColor: "#F45e25",
        borderWidth: 1,
        borderRadius: 10,
        backgroundColor: "#F45e25",
        alignItems: "center",
        justifyContent: "center",
    },
    btnText: {
        color: "#fff",
        fontSize: 20,
        fontWeight: "bold",
    },
});
