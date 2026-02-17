const BASE_URL = "http://172.30.10.101/api"; // Cambia esto según tu IP real
// url del espejo
export async function loginUser(usuario, password) {
    try {
        const response = await fetch(`${BASE_URL}/login.php`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ usuario, password })
        });

        return await response.json();
    } catch (error) {
        return { status: "error", message: "No se pudo conectar al servidor." };
    }
}
