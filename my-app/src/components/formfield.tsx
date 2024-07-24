import React from 'react'
import { fieldProps } from '@/lib/types';
const formField:React.FC<fieldProps>=({
    type,
    fullname,
    placeholder,
    error,
    register,
    valueAsNumber

})=>(
    <>
    <input className='border-2 p-2 md:p-3 m-2  md:w-[60%] w-[80%]  rounded-xl  ' type={type}  placeholder={placeholder} {...register(fullname, { valueAsNumber })} />
    {error && <span className="error-message text-red-600 text-sm ">{error.message}</span>}
    </>
)
export default formField;
// this component defines field of a  form that can be used anywhere in the code