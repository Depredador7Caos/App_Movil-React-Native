import { Pressable, StyleSheet, Text } from "react-native";

export default function ButtonDanger({ title, onPress }) {
    return (

        <Pressable style={styles.btnDanger} onPress={onPress}>
            <Text style={styles.textDanger}>
                {title}
            </Text>
        </Pressable>

    );
}

const styles = StyleSheet.create({
    btnDanger: {
        width: 200,
        height: 50,
        borderWidth: 1,
        borderColor: "red",
        borderRadius: 10,
        backgroundColor: "red",
        alignItems: "center",
        justifyContent: "center"
    },
    textDanger: {
        color: "#fff",
        fontSize: 20,
        fontWeight: "bold"
    }
});