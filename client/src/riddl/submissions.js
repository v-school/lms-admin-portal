const submissions = {
    data: [],
    loading: true,
    err: null
}

const config = {
    headers: {
        "Content-Type": "application/json; charset=utf-8"
    },
};

const handleErrors = response => {
    if (!response.ok) throw Error(response.statusText);
    return response.json();
}

export const getSubmissions = () => setGlobalState => (
    fetch("/api/submissions", config)
        .then(handleErrors)
        .then(data => setGlobalState({
            submissions: {
                data,
                loading: false,
                err: null
            }
        }))
        .catch(err => setGlobalState({
            submissions: {
                data: [],
                loading: false,
                err: err.message
            }
        }))
)

export default submissions;