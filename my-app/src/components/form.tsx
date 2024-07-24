'use client'
import { validFieldNames , fieldNames } from "@/lib/types"
import {useForm} from 'react-hook-form'
import FormField from "./formfield"
import { zodResolver } from "@hookform/resolvers/zod"
import { FieldSchemas } from "@/lib/schemas"
function ContactForm(
    
){
    const {
        register,
        handleSubmit,
        formState: { errors },
        setError,
        reset
    } = useForm<fieldNames>({
        resolver:zodResolver(FieldSchemas)
    });
    const onSubmit = async (data:fieldNames)=>{
        try{
            let response = await fetch ('/api/contact',{
                method:'POST',
                headers:{
                  "Content-Type": "application/json",
                },
                body:JSON.stringify(data)
        
              });
              const responseData = await response.json();
      const {errors={}} = responseData;
      const fieldmappings:Record<string,validFieldNames>={
        fullname:'fullname',
        email:'email',
        message:'message'
      }
      const fieldwithError = Object.keys(fieldmappings).find(
        (field)=>errors[field]
      )
      if(fieldwithError){
        setError(fieldmappings[fieldwithError], {
          type: "server",
          message: errors[fieldwithError],
        });
      }
      reset()
      alert('We have recieved your message.Thanks')

        }catch(error){
            alert('success!')


        }

    }
    return(
        <form onSubmit={handleSubmit(onSubmit)}>
        <div className=" flex flex-col justify-center items-center md:w-1/2 w-3/4 h-[500px] mx-auto  ">
          <h1 className="md:text-3xl text-xl font-bold mb-4 text-primary-content">
            Let&apos;s Talk
          </h1>
          <FormField
            type="username"
            placeholder="FullName"
            fullname="fullname"
            register={register}
            error={errors.fullname}
          />

          <FormField
            type="email"
            placeholder="Email"
            fullname="email"
            register={register}
            error={errors.email}
          />

          <FormField
            type="message"
            placeholder="Message"
            fullname="message"
            register={register}
            error={errors.message}
            
          />
           <button type="submit" className="  p-2 md:p-4 m-4 bg-primary-content text-primary-dark rounded-xl font-bold  shadow-xl hover:bg-blue-200  ">
              Submit
            </button>
          </div>
        </form>
    )

}
export default ContactForm
