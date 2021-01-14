import jwt from "jwt-decode"
import api from "./api";

export const TOKEN_KEY = "TOKEN_KEY";
export const TOKEN_EXPIRES_AT = "TOKEN_EXPIRES_AT";
export const PASSWORD = "PASSWORD";
export const isAuthenticated = () => {
    return localStorage.getItem(TOKEN_KEY) !== null &&
        new Date().getTime() / 1000 < parseInt(localStorage.getItem(TOKEN_EXPIRES_AT));
};
export const getToken = () => localStorage.getItem(TOKEN_KEY);
export const saveLoginResponse = (token, password) => {
    const decodedToken = jwt(token);
    localStorage.setItem(TOKEN_KEY, token);
    localStorage.setItem(PASSWORD, password);
    localStorage.setItem(TOKEN_EXPIRES_AT, decodedToken.exp.toString());
};
export const refreshLogin = async () => {
    const user = getUser();
    await login(user.email, user.password);
};
export const login = async (email, password) => {
    const response = await api.post("/login", {
        "email": email,
        "password": password
    });
    saveLoginResponse(response.headers.authorization, password);
};
export const logout = () => {
    localStorage.removeItem(TOKEN_KEY);
    localStorage.removeItem(TOKEN_EXPIRES_AT);
};
export const getUser = () => {
    const decodedToken = jwt(localStorage.getItem(TOKEN_KEY));
    return {
        id: parseInt(decodedToken.sub),
        email: decodedToken.aud,
        name: decodedToken.user,
        environment: decodedToken.environment,
        group: decodedToken.group,
        isLeader: decodedToken.isLeader,
        password: localStorage.getItem(PASSWORD)
    }
};