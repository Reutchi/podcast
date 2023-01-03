import '../appSignUp/appSignUp.scss'

import FormSign from "./appForm/AppForm";
import Button from "../../Utils/Components/Button/button";

import {Link} from "react-router-dom";
import {useState} from "react";


const AppSignUp = () => {

    const [form, setForm] = useState([
        {label:'Name', type: 'text'},
        {label:'Email', type: 'email'},
        {label:'Password', type: 'password'},
    ])

  return(
      <form className='SignUpForm'>
          <h2 className='SignUpFormTitle'>Create your account</h2>
          {form.map(({label,type}) => {
              return(
                  <FormSign
                  Label={label}
                  Type={type}
                  />
              )
          })}
          <Link to='/signup'>
              <Button title={"Sign Up"}/>
          </Link>
          <Link to='/login'>
            <Button title={"I have already an account"}/>
          </Link>
      </form>
  )
}
export  default AppSignUp