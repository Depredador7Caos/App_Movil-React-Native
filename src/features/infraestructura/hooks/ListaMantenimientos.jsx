import React, {useEffect, useState} from "react";
import { View, Text, FlatList, StyleSheet} from "react-native";

// TRAEMOS EL JSON QUE NOS MANDA DESDE EL API
import { getSolicitudesMantenimiento } from "../../../api/getSolicitudesMantenimiento";

export default function ListaMatenimientos() {
    
    const [solicitudes, setSolicitudes] = useState([]);

    // EFECTO DE CARGA
    useEffect(() => {
        cargarSolicitudes();
    }, []);

    const cargarSolicitudes= async () => {
        const res = await getSolicitudesMantenimiento();

        if (res.status === "success") {
            setSolicitudes(res.data);
        } else {
            console.log(res.message);
        }
    }
    
    return(

        <View style={styles.listaPadre}>
            <FlatList 
                data={solicitudes}
                keyExtractor={(item, index) => index.toString()}
                renderItem={({ item }) =>(
                    // ESTRUCTURA DE TODO LO QUE QUIERA IMPRIMER
                    <View style={styles.itemText}>
                        <Text style={styles.listaPadre}>{item.descripcion}</Text>
                    </View>
                )}
                ListEmptyComponent={
                    <Text style={styles.emptyText}>No hay solicitudes de Mantenimiento</Text>
                    
                }
            />
        </View>

    );
}

const styles = StyleSheet.create({
    listaPadre: {
        flex: 1,
        backgroundColor: "#f5f5f5",
        paddingTop: 20, 
        paddingHorizontal: 15,
    },
    itemCard: {
        backgroundColor: "#ffffff",
        padding: 15,
        marginVertical: 6,
        borderRadius: 8,
        // Sombra ligera para que parezca tarjeta de app moderna
        elevation: 2, 
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.2,
        shadowRadius: 1.41,
    },
    itemText: {
        fontSize: 16,
        color: "#333333",
    },
    emptyText: {
        textAlign: "center",
        marginTop: 40,
        color: "#888888",
        fontSize: 16,
    }
});