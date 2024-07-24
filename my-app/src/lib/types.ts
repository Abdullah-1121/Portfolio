import {FieldError , UseFormRegister} from 'react-hook-form'
export type fieldNames = {
    fullname : string,
    email: string,
    message: string
}
export type fieldProps = {
    type:string,
    fullname:validFieldNames,
    placeholder:string,
    error?:FieldError,
    register:UseFormRegister<fieldNames>
    valueAsNumber?:boolean
}
 export type validFieldNames = 
 |"fullname"
 |"email"
 |"message"