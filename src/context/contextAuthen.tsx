"use client";

import api_auth from "@/call_api/auth";
import useAuthen from "@/swr/admins/useAuthen";
import { IUser } from "@/swr/admins/useListAdmin";
import { createContext, ReactNode, useContext } from "react";


interface AuthContextType {
    login: (user: IUser) => Promise<void>;
    logout: () => Promise<void>;
    isAuthenticated: boolean;
}

export const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
    const { UserLogin, mutate } = useAuthen();

    return (
        <AuthContext.Provider
            value={{
                login: async (user) => {
                    await api_auth.SignIn(user);
                    await mutate();
                },
                logout: async () => {
                    await api_auth.SignOut();
                    await mutate(undefined, { revalidate: true });
                },
                isAuthenticated: !!UserLogin,
            }}
        >
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => {
    const context = useContext(AuthContext);
    if (!context)
        throw new Error("useAuth phải được sử dụng bên trong AuthProvider");
    return context;
};
