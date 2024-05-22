"use client";
import { loginSchema } from "@/schemas/validation.schema";
import React, { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { login } from "@/api/data.api";
import { useUserStore } from "@/store/user-store";
import { toast } from "sonner";
import { useRouter } from "next/navigation";

type Input = {
  username: string;
  password: string;
};

export function LoginForm() {
  const [userData, setUserData] = useState<{ username: string } | undefined>();
  const [isLoading, setIsLoading] = useState(true);
  const [isCookie, setIsCookie] = useState(false);
  const [isCookieSet, setIsCookieSet] = useState<string | undefined>("");
  const setUserState = useUserStore((state) => state.updateUsername);
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Input>({ resolver: zodResolver(loginSchema) });
  const onSubmit: SubmitHandler<Input> = async (data) => {
    try {
      setIsLoading(true);
      const userdata = await login(data);
      setIsLoading(false);
      setUserState(userdata.data.username);
      toast("Authentication Successfully!");
      router.push("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="h-[500px] flex flex-col shadow w-[500px] items-center justify-center rounded gap-5 sm:w-full">
      <h3 className="text-2xl font-bold sm:text-base">Login</h3>

      {!isCookie && <p>{isCookieSet}</p>}
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col  items-center justify-center gap-3 sm:text-xs xs:w-full xs:p-2"
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
          id="password"
          type="password"
        />
        {errors.password?.message && <span>{errors.password?.message}</span>}
        <input
          value="Submit"
          type="submit"
          className="hover:cursor-pointer border rounded p-2 sm:p-1"
        />
      </form>
    </div>
  );
}
