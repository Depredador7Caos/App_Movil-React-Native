// Logica de validación de usuario (modo prueba)
import { useState } from "react";

export default function useLogin() {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    // Función de login
    const login = async (usuario, password) => {
        setLoading(true);
        setError(null);

        // Usuario de prueba
        const testUser = {
            usuario: "admin",
            password: "12345",
            nombre: "Usuario de prueba"
        };

        // Simulación de espera
        await new Promise((resolve) => setTimeout(resolve, 1000));

        // Validación
        if (usuario === testUser.usuario && password === testUser.password) {
            setLoading(false);
            return {
                success: true,
                user: testUser
            };
        }

        setLoading(false);
        setError("Credenciales inválidas.");

        return { success: false };
    };

    return { login, loading, error };
}
