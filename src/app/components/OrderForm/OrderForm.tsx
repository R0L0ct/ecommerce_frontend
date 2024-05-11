"use client";
import { loginSchema, orderSchema } from "@/schemas/validation.schema";
import React, { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { login } from "@/api/data.api";
import { useUserStore } from "@/store/user-store";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";

type Input = {
  name: string;
  region: string;
  city: string;
  lastname: string;
  country: string;
  email: string;
  address: string;
  phone: string;
};

export function OrderForm() {
  const [isLoading, setIsLoading] = useState(true);
  const router = useRouter();

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Input>({ resolver: zodResolver(orderSchema) });
  const onSubmit: SubmitHandler<Input> = async (data) => {
    try {
      setIsLoading(true);
      setIsLoading(false);
      toast("Successful Purchase");
      console.log(data);
      //   router.push("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="min-h-[500px] flex flex-col shadow min-w-[80%] items-center justify-center rounded gap-5 p-5">
      <h3 className="text-2xl font-bold">Order Form</h3>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col items-center justify-center gap-5 w-full"
      >
        <div className="flex w-full justify-center  gap-5">
          <div className="flex flex-col gap-5">
            <input
              placeholder="name..."
              {...register("name")}
              className="border rounded p-1"
              id="name"
            />
            <div className="text-red-600">
              {errors.name?.message && <span>{errors.name?.message}</span>}
            </div>
            <input
              placeholder="lastname..."
              {...register("lastname")}
              className="border rounded p-1"
              id="lastname"
            />
            <div className="text-red-600">
              {errors.lastname?.message && (
                <span>{errors.lastname?.message}</span>
              )}
            </div>
            <input
              placeholder="email..."
              {...register("email")}
              className="border rounded p-1"
              id="email"
            />
            <div className="text-red-600">
              {errors.email?.message && <span>{errors.email?.message}</span>}
            </div>
            <input
              placeholder="country..."
              {...register("country")}
              className="border rounded p-1"
              id="country"
            />
            <div className="text-red-600">
              {errors.country?.message && (
                <span>{errors.country?.message}</span>
              )}
            </div>
          </div>
          <div className="flex flex-col gap-5">
            <input
              placeholder="region..."
              {...register("region")}
              className="border rounded p-1"
              id="region"
            />
            <div className="text-red-600">
              {errors.region?.message && <span>{errors.region?.message}</span>}
            </div>
            <input
              placeholder="city"
              {...register("city")}
              className="border rounded p-1"
              id="city"
            />
            <div className="text-red-600">
              {errors.city?.message && <span>{errors.city?.message}</span>}
            </div>
            <input
              placeholder="address..."
              {...register("address")}
              className="border rounded p-1"
              id="address"
            />
            <div className="text-red-600">
              {errors.address?.message && (
                <span>{errors.address?.message}</span>
              )}
            </div>
            <input
              placeholder="phone..."
              {...register("phone")}
              className="border rounded p-1"
              id="phone"
              type="number"
            />
            <div className="text-red-600">
              {errors.phone?.message && <span>{errors.phone?.message}</span>}
            </div>
          </div>
        </div>

        <div className="border-t w-full flex justify-center items-center p-5">
          <Button type="submit" className="hover:cursor-pointer">
            Purchase
          </Button>
        </div>
      </form>
    </div>
  );
}
