import { nanoid } from "@reduxjs/toolkit";
import {useForm} from "react-hook-form"
import { Link, useNavigate } from "react-router-dom";
import { asyncRegisterUser } from "../../store/actions/userActions";
import {useDispatch} from 'react-redux'

const Register = () => {
    const {register, reset, handleSubmit} = useForm();
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const RegisterHandler=(user)=>{
        console.log(user);
        user.id = nanoid()
        user.isAdmin = false;
        dispatch(asyncRegisterUser(user));

        navigate("/login");
    }

      

    return (
        <form onSubmit={handleSubmit(RegisterHandler)} className='flex flex-col w-1/2 gap-5 justify-start items-start'>

            <input {...register("username")}
             className='outline-0 border-b p-2 text-2xl' type='text' placeholder='Prathmesh' />

            <input {...register("email")}
            className='outline-0 border-b p-2 text-2xl' type='email' placeholder='Prathmesh@gmail.com' />

            <input {...register("password")}
            className='outline-0 border-b p-2 text-2xl' type='password' placeholder='********' autocomplete="on"/>

        <button type="submit" className="mt-4 px-4 py-2 bg-blue-400 rounded">Register</button>
        <p>Already Have an account?
        <Link to="/Login" className="text-blue-400"> Login</Link>
        </p>
        </form >

  )
}

export default Register