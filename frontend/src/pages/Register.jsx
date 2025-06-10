import { nanoid } from "@reduxjs/toolkit";
import {useForm} from "react-hook-form"
import { Link } from "react-router-dom";

const Register = () => {
    const {register, reset, handleSubmit} = useForm();

    const RegisterHandler=(user)=>{
        console.log(user);
    }
    return (
        <form onSubmit={handleSubmit(RegisterHandler)} className='flex flex-col w-1/2 gap-5 justify-start items-start'>

            <input {...register("username")}
             className='outline-0 border-b p-2 text-2xl' type='text' placeholder='Prathmesh' />

            <input {...register("email")}
            className='outline-0 border-b p-2 text-2xl' type='email' placeholder='Prathmesh@gmail.com' />

            <input {...register("password")}
            className='outline-0 border-b p-2 text-2xl' type='password' placeholder='********' />

        <button type="submit" className="mt-4 px-4 py-2 bg-blue-400 rounded">Register</button>
        <p>Already Have an account?
        <Link to="/Login" className="text-blue-400"> Login</Link>
        </p>
        </form >

  )
}

export default Register