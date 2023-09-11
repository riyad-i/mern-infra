import { useState } from "react"

function SignUpForm(){
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        confirm: '',
        error: ''
    })

    return(
        <div>
            <div>
                <form>
                    <label>Name</label>
                    <input type="text" name="name" required/>
                    
                    <label>Email</label>
                    <input type="email" name="email" required/>

                    <label>Password</label>
                    <input type="password" name="password" required/>

                    <label>Confirm Password</label>
                    <input type="password" name="confirm" required/>

                    <button>Sign Up</button>
                </form>
            </div>
        </div>
    )
}

export default SignUpForm