import { Pressable, StyleSheet, Text } from "react-native";
import { Ionicons } from '@expo/vector-icons';

export default function Icons({ title }) {
    return (
        <Ionicons style={styles.iconHome} name={title} />
    );
}

const styles = StyleSheet.create({
    iconHome: {
        color: "#fff",
        fontSize: 50
    }
});