import React from 'react'
import { FieldError } from 'react-hook-form';

type InputFieldProps={
    label:string;
    type?:string;
    register:any;
    name:string;
    defaultValue?:string;
    error?:FieldError;
    inputProps?:React.InputHTMLAttributes<HTMLInputElement>;
}


const InputField = ({
    label,
    type="text",
    register,
    name,
    defaultValue,
    error,
    inputProps
}:InputFieldProps) => {
  return (
    <div className="flex flex-col gap-3 w-full md:w-1/4">

        <label className="text-xs text-gray-500"
        
        >{label}</label>
          <input type={type} {...register(name)} className="ring-[1.5px] ring-green-600 rounded-md p-2 text-sm outline-none w-full"
          {...inputProps}
          defaultValue={defaultValue}
          />
          {error?.message && <p className="text-color-3 text-xs">{error.message?.toString()}</p>}

        </div>
  )
}

export default InputField