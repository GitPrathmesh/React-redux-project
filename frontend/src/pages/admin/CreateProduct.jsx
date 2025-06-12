import { useDispatch } from "react-redux";
import { useForm } from "react-hook-form";
import { nanoid } from "@reduxjs/toolkit";
import { useNavigate} from "react-router-dom";


const CreateProduct = () => {
const {register, reset, handleSubmit} = useForm();
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const CreateProductHandler =(product)=>{
        product.id = nanoid()
        console.log(product);
       
        // dispatch(asyncRegisterUser(product));    
        navigate("/products")


    }
    return (
        <form onSubmit={handleSubmit(CreateProductHandler)} className='flex flex-col w-1/2 gap-5 justify-start items-start'>

            <input {...register("title")}
             className='outline-0 border-b p-2 text-2xl' type='text' placeholder='Product Title' />

            <input {...register("price")}
            className='outline-0 border-b p-2 text-2xl' type='number' placeholder='Product Price' />

            <textarea {...register("Description")}
            className='outline-0 border-b p-2 text-2xl' type='text' placeholder='Product Desc' autoComplete="on"/>

     <input {...register("category")}
            className='outline-0 border-b p-2 text-2xl' type='number' placeholder='Product category' />

            <input {...register("image")}
            className='outline-0 border-b p-2 text-2xl' type='url' placeholder='Image url' />

        <button type="submit" className="mt-4 px-4 py-2 bg-blue-400 rounded">Create Product</button>
        
        </form >

  )
}

export default CreateProduct