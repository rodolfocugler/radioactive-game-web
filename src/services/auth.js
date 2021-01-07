import jwt from "jwt-decode"

export const TOKEN_KEY = "TOKEN_KEY";
export const TOKEN_EXPIRES_AT = "TOKEN_EXPIRES_AT";
export const isAuthenticated = () => {
    return localStorage.getItem(TOKEN_KEY) !== null &&
        new Date().getTime() / 1000 < parseInt(localStorage.getItem(TOKEN_EXPIRES_AT));
};
export const getToken = () => localStorage.getItem(TOKEN_KEY);
export const login = token => {
    const decodedToken = jwt(token);
    localStorage.setItem(TOKEN_KEY, token);
    localStorage.setItem(TOKEN_EXPIRES_AT, decodedToken.exp.toString());
};
export const logout = () => {
    localStorage.removeItem(TOKEN_KEY);
    localStorage.removeItem(TOKEN_EXPIRES_AT);
};
export const getUser = () => {
    const decodedToken = jwt(localStorage.getItem(TOKEN_KEY));
    return {
        id: decodedToken.aud,
        email: decodedToken.sub,
        name: decodedToken.user,
        environment: decodedToken.environment,
        group: decodedToken.group
    }
};