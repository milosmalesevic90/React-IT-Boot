const POST = 'https://coetus.herokuapp.com/api/forum/users'
const GET = 'https://coetus.herokuapp.com/api/forum/users'
const PUT = 'https://coetus.herokuapp.com/api/forum/users'



function login(user){
    let res = fetch(`${POST}`,{
        headers:{
            'Content-Type':'application/json; charset=utf-8' 
        },
        method:'POST',
        body:JSON.stringify(user)
    }).then(res => res.json())
    return res
}
function register(user){
    return fetch(`${PUT}`,{
        headers:{
            'Content-Type':'application/json; charset=utf-8'
        },
        method:'PUT',
        body:JSON.stringify(user)
    }).then(res => res.json())
}
export {
    login,
    register
}