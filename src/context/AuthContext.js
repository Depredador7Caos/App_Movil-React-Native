import { createContext, useState } from "react";

export const AuthContext = createContext();

export default function AuthProvider({ children }) {
    const [user, setUser] = useState(null);

    // GUARDAR DATA DE USUARIO
    const login = (data) => { setUser(data);};

    // CERRAR SESIÓN
    const logout = () => { setUser(null);};

    return (
        <AuthContext.Provider value={{ user, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
}
