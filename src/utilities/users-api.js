
const BASE_URL = '/api/users'

export async function signUp(userData){
    console.log('api user data', userData);

    const res = await fetch(BASE_URL, {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(userData)
    })

    if (res.ok){
        return await res.json()
    }else{
        throw new Error('Invalid Sign Up')
    }
}