import { Pressable, StyleSheet, Text } from "react-native";
import { Ionicons } from '@expo/vector-icons';

export default function ButtonMain({ title }) {
    return (

        <Pressable style={styles.btnMain}>
            <Text style={styles.textMain}>
                <Ionicons style={styles.iconHome} name={title} />
            </Text>
        </Pressable>

    );
}

const styles = StyleSheet.create({
    btnMain: {
        width: 80,
        height: 80,
        borderWidth: 1,
        // borderColor: "red",
        borderRadius: 50,
        backgroundColor: "black",
        alignItems: "center",
        justifyContent: "center",
        marginBottom: 9
    },
    textMain: {
        color: "#fff",
        fontSize: 20,
        fontWeight: "bold"
    },
    iconHome: {
        color: "#fff",
        fontSize: 50
    }
});