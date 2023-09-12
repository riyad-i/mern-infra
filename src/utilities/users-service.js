import * as usersAPI from "./users-api";


export async function signUp(userData){
    console.log('user data', userData);
    const token = await usersAPI.signUp(userData)
    return token
    // Delegate the network request code to the users-api.js API module
    // which will ultimately return a JSON Web Token (JWT)

    //Note: We have not used a try/catch block because any error will propagate up to the "consumer" of the service - in this case the consumer is the handleSubmit method in the <SignUpForm> component.
}













