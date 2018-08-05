const config = {
    headers: {
        "Content-Type": "application/json; charset=utf-8"
    }
};

const handleErrors = response => {
    if (!response.ok) throw Error(response.statusText);
    return response.json();
}

const auth = {
    loading: false,
    user: null,
    isAuthenticated: true,
    err: null
}

export const login = credentials => setGlobalState => {
    setGlobalState(prevState => ({ auth: { ...prevState.auth, loading: true } }))
    return fetch("/api/auth/login", { method: "POST", body: JSON.stringify(credentials), ...config })
        .then(handleErrors)
        .then(({ user, token }) => {
            localStorage.setItem("token", token);
            localStorage.setItem("user", JSON.stringify(user));
            setGlobalState(prevState => ({
                auth: {
                    ...prevState.auth,
                    user,
                    err: null,
                    loading: false,
                    isAuthenticated: true
                }
            }))
        })
        .catch(err => setGlobalState(prevState => ({
            auth: {
                ...prevState.auth,
                loading: false,
                err: err.message,
                isAuthenticated: false
            }
        })))
};

export const logout = () => setGlobalState => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    setGlobalState({auth});
}

export default auth;