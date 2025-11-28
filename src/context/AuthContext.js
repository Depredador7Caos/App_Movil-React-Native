import { createContext, useState, useEffect } from "react";

export const AuthContext = createContext();

export default function AuthProvider({ children }) {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    // SIMULACIÓN DE INICIO (revisar si hay sesión guardada)
    useEffect(() => {
        setTimeout(() => {
            setLoading(false);
        }, 800);
    }, []);

    // GUARDAR DATA DE USUARIO
    const login = (data) => { 
        setUser(data);
    };

    // CERRAR SESIÓN
    const logout = () => { 
        setUser(null);
    };

    return (
        <AuthContext.Provider value={{ user, login, logout, loading }}>
            {children}
        </AuthContext.Provider>
    );
}
