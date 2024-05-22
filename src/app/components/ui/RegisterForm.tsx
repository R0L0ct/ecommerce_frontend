"use client";
import { registerSchema } from "@/schemas/validation.schema";
import React, { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { registerUser } from "@/api/data.api";
import { useUserStore } from "@/store/user-store";
import { toast } from "sonner";
import { useRouter } from "next/navigation";

type Input = {
  username: string;
  password: string;
  email: string;
};

export function RegisterForm() {
  const [isLoading, setIsLoading] = useState(true);
  const setUserState = useUserStore((state) => state.updateUsername);
  const router = useRouter();

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Input>({ resolver: zodResolver(registerSchema) });
  const onSubmit: SubmitHandler<Input> = async (data) => {
    try {
      setIsLoading(true);
      // console.log(data);
      await registerUser(data);
      setIsLoading(false);
      toast("Registration Successfully!");
      router.push("/login");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="h-[500px] flex flex-col shadow w-[500px] items-center justify-center rounded gap-5 sm:w-full">
      <h3 className="text-2xl font-bold sm:text-base">Register</h3>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col  items-center justify-center gap-3 sm:text-xs xs:w-full xs:px-2"
      >
        <input
          placeholder="your username..."
          {...register("username")}
          className="border rounded p-1 xs:w-full xs:rounded-none"
          id="username"
        />
        {errors.username?.message && <span>{errors.username?.message}</span>}
        <input
          placeholder="your password"
          {...register("password")}
          className="border rounded p-1 xs:w-full xs:rounded-none"
          type="password"
          id="password"
        />
        {errors.password?.message && <span>{errors.password?.message}</span>}
        <input
          placeholder="your email"
          {...register("email")}
          className="border rounded p-1 xs:w-full xs:rounded-none"
          type="email"
          id="email"
        />
        {errors.email?.message && <span>{errors.email?.message}</span>}
        <input
          value="Submit"
          type="submit"
          className="hover:cursor-pointer border rounded p-2 sm:p-1"
        />
      </form>
    </div>
  );
}
