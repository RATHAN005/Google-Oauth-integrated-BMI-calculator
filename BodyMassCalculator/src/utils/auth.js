const AUTH_KEY = "isAuthenticated";
export const login = (username, password) => {
    if(username === "admin" && password === "1234") {
        localStorage.setItem(AUTH_KEY, "true");
        return true;
    }
    return false;
};
export const logout = () => {
    localStorage.removeItem(AUTH_KEY)
};

export const isAuthenticated = () => {
    return localStorage.getItem(AUTH_KEY) === "true";
};