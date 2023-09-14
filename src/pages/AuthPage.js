import SignUpForm from "../components/SignUpForm/SignUpForm"
import LoginForm from "../components/LoginForm/LoginForm"

function AuthPage({setUser}){
    return(
        <div>
            <h1>Auth Page</h1>
            <SignUpForm setUser={setUser}/>
            <LoginForm/>
        </div>
    )
}

export default AuthPage