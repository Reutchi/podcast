import '../appSignUp/appSignUp.scss'

import {Link, useNavigate} from "react-router-dom";
import {useState} from "react";

import FormSign from "../appForm/AppForm";
import ButtonBlue from "../../../Utils/Components/Button/button"
import {UserAuth} from "../../../context/AuthContext";

const AppSignUp = () => {

    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')
    const [error,setError] = useState('')

    const {createUser} = UserAuth();
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault()
        setError('')
        try{
            await createUser(email,password)
            navigate('/')
        }catch (e){
            setError(e.message)
            console.log(e.message)
        }
    }

    return(
        <form className='SignUpForm' onClick={handleSubmit} >
            <h2 className='SignUpFormTitle'>Create your account</h2>
            <label>Email</label>
            <input onChange={(e) => setEmail(e.target.value) } type='email'/>
            <label>Password</label>
            <input onChange={(e) => setPassword(e.target.value)} type='password'/>
            <Link to='/signup'>
                <ButtonBlue title={"Sign Up"}/>
            </Link>
            <Link to='/login'>
                <ButtonBlue title={"I have already an account"}/>
            </Link>
        </form>
    )
}
export  default AppSignUp