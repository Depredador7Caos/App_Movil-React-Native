import React, {useEffect, useState} from "react";
import { View, Text, FlatList } from "react-native";

// TRAEMOS EL JSON QUE NOS MANDA DESDE EL API
import { getSolicitudesMantenimiento } from "../../../api/getSolicitudesMantenimiento";

export default function ListaMatenimientos() {
    
    const [solicitudes, setSolicitudes] = useEffect([]);

    // EFECTO DE CARGA
    useEffect(() => {
        cargarSolicitudes();
    }, []);

    const cargarSolicitudes= async () => {
        const res = await getSolicitudesMantenimiento();

        if (res.status === "Success") {
            setSolicitudes(res.data);
        } else {
            console.log(res.message);
            
        }
    }
    
    return(

        <View>
            <FlatList 
                data={solicitudes}
                keyExtractor={(item, index) => index.toString()}
                renderItem={({ item }) =>(
                    <Text>{item.descripcion}</Text>
                )}
            />
        </View>

    );
}