const BASEURL = 'https://coetus.herokuapp.com'
const API = '/api/gamer'
const MEMORYCARDS = '/memory/cards'
const USERS = '/users'

function getMemoryCards() {
    return fetch(`${BASEURL}${API}${MEMORYCARDS}`)
        .then(res => res.json())
}

function login(user) {
    let res = fetch(`${BASEURL}${API}${USERS}`, {
        headers: {
            'Content-Type': 'application/json; charset=utf-8'
        },
        method: 'POST',
        body: JSON.stringify(user)
    }).then(res => res.json())
    return res
}

function register(user) {
    let res = fetch(`${BASEURL}${API}${USERS}`, {
        headers: {
            'Content-Type': 'application/json; charset=utf-8'
        },
        method: 'PUT',
        body: JSON.stringify(user)
    }).then(res => res.json())
    return res
}
function profile(user) {
    let res = fetch(`${BASEURL}${API}${USERS}`, {
        headers: {
            'Content-Type': 'application/json; charset=utf-8'
        },
        method: 'GET',
        body: JSON.stringify(user)
    }).then(res => res.json())
    return res
}


export { getMemoryCards, login,register,profile }

