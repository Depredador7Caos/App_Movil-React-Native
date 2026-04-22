/** Espejo */
const BASE_URL = "http://172.30.10.101/api"; // Cambia esto según tu IP real

export async function getSolicitudesMantenimiento() {
    try {
        const response = await fetch(`${BASE_URL}/src/view/getSolicitudesMantenimiento/_index.php`, {
            method: "GET",
            headers: {"Content-Type": "application/json"},
            // body: JSON.stringify({})
        });

        if (!response.ok) {
            throw new Error('Error en la respuesta del servidor');
        }

        const data = await response.json();

        return {
            status: "Success",
            data: data
        }


    } catch (error) {
        return {
            status: "error", 
            message: "No se pudo conectar al servidor de solic." 
        };
    }
}