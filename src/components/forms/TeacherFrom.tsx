"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import React from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import InputField from "../InputField";


const schema = z.object({
    username:z.string().min(3, {message:"Username must be three characters"}),
    email:z.string().email({message:"Provide valid email address"}),
    password:z.string().min(8,{message:"password must have atleast 8 characters long"}),
    firstName:z.string().min(2, {message:"First Name is required"}),
    lastName:z.string().min(2, {message:"Last Name is required"}),
    phone:z.string().min(10, {message:"Phone is required"}),
    address:z.string().min(2, {message:"Address is required"}),
    birthday:z.date({message:"DOB is required"}),
    sex:z.enum(["male", "female"], {message:"gender is required"}),
    img:z.instanceof(File,{message:"Image is required"})


})

type Inputs = z.infer<typeof schema>;
const TeacherFrom = ({ type }: { type: "create" | "update"; data?: any }) => {

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>({
    resolver: zodResolver(schema),
  });

  

  const onSubmit = handleSubmit((data)=>{
    console.log(data);
    
  })

  return (
  <form className="flex flex-col gap-4 "  onSubmit={onSubmit}>
        <h1 className="text-xl font-semibold">Create New Teacher</h1>

        <span className="text-gray-500 text-sm">Authentication Information</span>
          <InputField type="text" name="username" label="Username" register={register} error={errors.username}/>
        <span className="text-gray-500 text-sm">Personal Information</span>
        <button className="bg-primary text-white font-semibold p-2 rounded-md" >{type === "create" ? "Create" :"Update"}</button>
    </form>
)
};

export default TeacherFrom;
