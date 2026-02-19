import React from "react";
import {View, Text, StyleSheet, TouchableOpacity} from "react-native";

export default function StructureListMain({ title, description, onPress}) {
    return (


        <TouchableOpacity style={styles.btn} onPress={onPress} activeOpacity={0.7}>
            <View style={styles.textContainer}>
                <Text style={styles.title}>{title}</Text>
                <Text style={styles.description}>{description}</Text>
            </View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    btn: { 
        padding: 10,
        backgroundColor: '#fff', 
        borderBottomWidth: 2,
        borderColor: '#eee',
        borderRadius: 12,
        marginBottom: 15,
        borderLeftColor: 'darkblue',
        borderLeftWidth: 3,
        // Sombras para iOS
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        // Sombras para Android
        elevation: 2,
        overflow: 'hidden',
    },
    textContainer: {
        padding: 15,
    },
    title: {
        fontSize: 18,
        fontWeight: '700',
        color: '#1a1a1a',
        marginBottom: 4,
    },
    description: {
        fontSize: 14,
        color: '#666',
    },
})