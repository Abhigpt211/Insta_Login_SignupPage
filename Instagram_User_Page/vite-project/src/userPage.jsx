import React, {useState} from "react";
import SignUpForm from './SignUpForm';
import LoginForm from './LoginForm';

function UserPage() {
    const [isSignUp, setIsSignUp] = useState(false)

    const toggleForm = () => {
    setIsSignUp((prevIsSignUp)=> !prevIsSignUp)
}  
   return (
       <div className="user-page"> 
       <img src="/instagram logo.png" alt="logo" height={'50px'} width={'50px'}/><br/>
       {isSignUp ? <SignUpForm/> : <LoginForm/>}
       <button onClick={toggleForm}>
        {isSignUp ? 'Switch to Login' : 'Switch to Sign Up'}
       </button>
       </div>
   )

}

export  default UserPage;

