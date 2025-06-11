import { nanoid } from "@reduxjs/toolkit";
import {useForm} from "react-hook-form"
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { asyncLoginUser } from "../../store/actions/userActions";

const Login = () => {
    const {register, reset, handleSubmit} = useForm();
    const dispatch = useDispatch();
    const LoginHandler=(user)=>{
        user.id = nanoid();
        dispatch(asyncLoginUser(user))
    }
    return (
        <form onSubmit={handleSubmit(LoginHandler)} className='flex flex-col w-1/2 gap-5 justify-start items-start'>

            <input {...register("email")}
            className='outline-0 border-b p-2 text-2xl' type='email' placeholder='Prathmesh@gmail.com' />

            <input {...register("password")}
            className='outline-0 border-b p-2 text-2xl' type='password' placeholder='********' autoComplete="on"/>

        <button type="submit" className="mt-4 px-4 py-2 bg-blue-400 rounded" >Login</button>
        <p>Don't Have an account? 
        <Link to="/register" className="text-blue-400"> Register</Link>
        </p>
        </form >

  )
}

export default Login