import '../appLogin/appLogin.scss';
import FormSign from "../appForm/AppForm";
import Button from "../../../Utils/Components/Button/button";
import {useState} from "react";
import {useNavigate} from "react-router-dom";
import {UserAuth} from "../../../context/AuthContext";

const AppLogin = () => {

    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')
    const [error,setError] = useState('')

    const {signIn} = UserAuth();
    const navigate = useNavigate();

    const handleSubmit =  async (e) =>{
        e.preventDefault();
        setError('')
        try {
            await signIn(email,password)
            navigate('/')
        }catch (e){
            console.log(e.message)
        }
    }

    return(
        <form className='SignUpForm' onSubmit={handleSubmit}>
            <h2 className='SignUpFormTitle'>Welcome back</h2>
            <label>Email</label>
            <input onChange={(e) => setEmail(e.target.value) } type='email'/>
            <label>Password</label>
            <input onChange={(e) => setPassword(e.target.value)} type='password'/>
            <Button title={'Login'}/>
        </form>
    )
}

export default AppLogin