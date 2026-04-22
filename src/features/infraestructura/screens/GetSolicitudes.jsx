import { Text } from "react-native";
import ListaMatenimientos from "../hooks/ListaMantenimientos";

export default function GetSolicitudes() {
    return(
        <>
            <Text>
                Screen para vizualizar solicitudes mantenimiento
            </Text>

            <ListaMatenimientos/>
        </>

    );
}