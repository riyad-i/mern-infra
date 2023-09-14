const BASE_URL = '/api/users';

export function signUp(userData) {
  return sendRequest(BASE_URL, 'POST', userData);
}

export function login(credentials) {
  return sendRequest(`${BASE_URL}/login`, 'POST', credentials);
}

export function checkToken(){
    return sendRequest(`${BASE_URL}/check-token`)
}


/*--- Helper Functions ---*/

async function sendRequest(url, method = 'GET', payload = null) {
  // Fetch accepts an options object as the 2nd argument
  // used to include a data payload, set headers, etc.
  const options = { method };
  if (payload) {
    options.headers = { 'Content-Type': 'application/json' };
    options.body = JSON.stringify(payload);
  }
  const res = await fetch(url, options);
  // res.ok will be false if the status code set to 4xx in the controller action
  if (res.ok) return res.json();
  throw new Error('Bad Request');
}







// const BASE_URL = '/api/users'

// export async function signUp(userData){
//     console.log('api user data', userData);

//     const res = await fetch(BASE_URL, {
//         method: 'POST',
//         headers: {'Content-Type': 'application/json'},
//         body: JSON.stringify(userData)
//     })

//     if (res.ok){
//         return await res.json()
//     }else{
//         throw new Error('Invalid Sign Up')
//     }
// }


// export async function login(credentials){
//     const res = await fetch(BASE_URL + '/login', {
//         method: 'POST',
//         headers: {'Content-Type': 'application/json'},
//         body: JSON.stringify(credentials)
//     })

//     if (res.ok){
//         return await res.json()
//     }else{
//         throw new Error('Invalid Sign Up')
//     }
// }