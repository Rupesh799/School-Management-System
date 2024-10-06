"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import React from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import InputField from "../InputField";
import { FiUploadCloud } from "react-icons/fi";

const schema = z.object({
  username: z.string().min(3, { message: "Username must be three characters" }),
  email: z.string().email({ message: "Provide valid email address" }),
  password: z
    .string()
    .min(8, { message: "password must have atleast 8 characters long" }),
  firstName: z.string().min(2, { message: "First Name is required" }),
  lastName: z.string().min(2, { message: "Last Name is required" }),
  phone: z.string().min(10, { message: "Phone is required" }),
  address: z.string().min(2, { message: "Address is required" }),
  birthday: z.date({ message: "DOB is required" }),
  bloodType: z.string({ message: "Blood Type is Required" }),
  sex: z.enum(["male", "female"], { message: "gender is required" }),
  img: z.instanceof(File, { message: "Image is required" }),
});

type Inputs = z.infer<typeof schema>;
const TeacherFrom = ({
  type,
  data,
}: {
  type: "create" | "update";
  data?: any;
}) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>({
    resolver: zodResolver(schema),
  });

  const onSubmit = handleSubmit((data) => {
    console.log(data);
  });

  return (
    <form className="flex flex-col gap-4 " onSubmit={onSubmit}>
      <h1 className="text-xl font-semibold">Create New Teacher</h1>

      <span className="text-gray-500 text-sm">Authentication Information</span>
      <div className="flex gap-2 justify-between flex-wrap">
        <InputField
          defaultValue={data?.username}
          type="text"
          name="username"
          label="Username"
          register={register}
          error={errors.username}
        />
        <InputField
          defaultValue={data?.username}
          type="email"
          name="email"
          label="Email"
          register={register}
          error={errors.email}
        />
        <InputField
          defaultValue={data?.username}
          type="password"
          name="password"
          label="Password"
          register={register}
          error={errors.password}
        />
      </div>

      <span className="text-gray-500 text-sm">Personal Information</span>
      <div className="flex justify-between flex-wrap gap-2">
        <InputField
          defaultValue={data?.username}
          type="text"
          name="firstName"
          label="First Name"
          register={register}
          error={errors.firstName}
        />
        <InputField
          defaultValue={data?.username}
          type="text"
          name="lastName"
          label="Last Name"
          register={register}
          error={errors.lastName}
        />
        <InputField
          defaultValue={data?.username}
          type="text"
          name="phone"
          label="Phone"
          register={register}
          error={errors.phone}
        />
        <InputField
          defaultValue={data?.username}
          type="text"
          name="address"
          label="Address"
          register={register}
          error={errors.address}
        />
        <InputField
          defaultValue={data?.bloodType}
          name="bloodType"
          label="Blood Group"
          register={register}
          error={errors.bloodType}
        />
        <InputField
          defaultValue={data?.username}
          type="date"
          name="birthday"
          label="Birthday"
          register={register}
          error={errors.birthday}
        />

        <div className="flex flex-col gap-3 w-full md:w-1/4">
          <label className="text-xs text-gray-500">Gender</label>
          <select
            {...register("sex")}
            defaultValue={data?.sex}
            className="ring-[1.5px] ring-green-600 rounded-md p-2 text-sm outline-none w-full"
          >
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
          {errors?.sex && (
            <p className="text-color-3 text-xs">
              {errors?.sex.message?.toString()}
            </p>
          )}
        </div>
        
        <div className="flex flex-col gap-3 w-full md:w-1/4 justify-center">
          <label className="text-xs text-gray-500 flex items-center gap-2 cursor-pointer" htmlFor="img">
            <FiUploadCloud size={30}/>
             <span>Upload a profile</span>
          </label>
          <input type="file" id="img" {...register("img")} className="hidden"/>
          {errors?.sex && (
            <p className="text-color-3 text-xs">
              {errors?.sex.message?.toString()}
            </p>
          )}
        </div>
      </div>
      <button className="bg-primary text-white font-semibold p-2 rounded-md">
        {type === "create" ? "Create" : "Update"}
      </button>
    </form>
  );
};

export default TeacherFrom;
