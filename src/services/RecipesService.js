const baseUrl = `http://127.0.0.1:8000/recipes/`;

export const RecipesService = {
    get,
    getById,
    create,
    update,
    remove
};

function handleResponse(response) {
    return response.text().then(text => {
        const data = text && JSON.parse(text);
        console.log(data)
        if (!response.ok) {
            return Promise.reject(response.statusText);
        }
        console.log(data)
        return data;
    });
}

function get() {
    const requestOptions = {
        method: 'GET'
    };
    return fetch(baseUrl, requestOptions).then(handleResponse);
}

function getById(id) {
    const requestOptions = {
        method: 'GET'
    };
    return fetch(baseUrl + id, requestOptions).then(handleResponse);
}

function create(params) {
    console.log(baseUrl)
    console.log(params)
    const requestOptions = {
        method: 'POST',
        headers: { 
            'Accept': 'application/json',
            'Content-type': 'application/json'
        },
        body: JSON.stringify(params)
    };
    console.log(requestOptions)
    return fetch(baseUrl, requestOptions).then(handleResponse);
}

function update(id, params) {
    const requestOptions = {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(params)
    };
    return fetch(baseUrl + id, requestOptions).then(handleResponse);
}

function remove(id) {
    const requestOptions = {
        method: 'DELETE'
    };
    return fetch(baseUrl + id, requestOptions).then(handleResponse);
}