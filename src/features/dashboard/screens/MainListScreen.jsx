import { SafeAreaView } from "react-native-safe-area-context";
import { Text, FlatList, StyleSheet} from "react-native";

// IMPORTACION DE COMPONENTES
import StructureListMain from "../../../components/listas/StructureListMain";

// IMPORTACION DE DATOS LISTA
import listaDatos from "../../../../assets/datos/datosLista.json";


// CUERPO DE LA FUNCION
export default function MainList({navigation}){
    const renderlista  = ({item}) => (
        <StructureListMain title={item.title} description={item.descripcion} onPress={ () => navigation.navigate(item.screen) }/>
    );

    return (
        <SafeAreaView style={styles.lista} edges={['top', 'bottom']}>

            <FlatList 
                data={listaDatos}
                renderItem={renderlista}
                keyExtractor={item => item.id}
                contentContainerStyle={styles.listPadding}
            />

        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    lista: {
        flex: 1,
        backgroundColor: '#f5f5f5',
    },
    textoPrincipal: {
        fontSize: 24,
        fontWeight: 'bold',
        margin: 20,
        color: '#333',
    },
    listPadding: {
        paddingHorizontal: 20,
        paddingBottom: 20,
    },
})